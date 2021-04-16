import React, {useState, useEffect} from 'react'
import Delivery from "./delivery/Delivery"
import CustomerData from "./CustomerData"
import StripeContainer from "./payment/StripeContainer"
import { useFormik } from 'formik';
import classes from "./Checkout.module.scss"

function Checkout() {

    const initialState = {
        name: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        zip: "",
        city: "",
        country: "",
        delivery: "",
        national: false,
        international: false,
        express: false
    }
    const formik = useFormik({
        initialValues: initialState,
        onSubmit:  values =>{
            console.log(values)
    },
        validate: values =>{}
    });
    let deliveryAmount = formik.values.delivery === "national" ? 5 : 
    formik.values.delivery === "international" ? 10 : 
    formik.values.delivery === "express" ? 15 : 0

    useEffect(()=>{
        let value = formik.values.delivery;
       
    }, [formik.values.delivery])
   

    return (
       
        <div  className={classes.checkout}>  
          <form onSubmit={formik.handleSubmit}>
            <CustomerData 
                name={formik.values.name}
                lastName={formik.values.lastName}
                email={formik.values.email}
                phone={formik.values.phone}
                address={formik.values.address}
                zip={formik.values.zip}
                city={formik.values.city}
                country={formik.values.country}
                onChange={formik.handleChange} 
                />
                <Delivery onChange={formik.handleChange} />
          </form>
            <StripeContainer
            deliveryAmount={deliveryAmount}
            name={formik.values.name}
            email={formik.values.email} 
            />
        </div>
    )
}

export default Checkout
