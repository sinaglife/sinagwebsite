import React, {useState, useEffect} from 'react'
import Delivery from "./delivery/Delivery"
import CustomerData from "./CustomerData"
import StripeForm from "./payment/StripeContainer"
import { useFormik } from 'formik';
import { useSelector, useDispatch} from "react-redux"
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {removeAllFromBasket} from "../../redux/basket/basket.actions";

import axios from 'axios';

import classes from "./Checkout.module.scss"

function Checkout() {

    const stripe = useStripe();
    const elements = useElements();
    const [success, setSuccess] = useState(false)
    const [description, setDescription] = useState("")
    const [subTotal, setSubTotal] = useState(0)
    const basket = useSelector(state => state.basket.basketItems)
    const dispatch = useDispatch()
    const getDescription = ()=> basket?.map((item)=> item.name)

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
    }
    const formik = useFormik({
        initialValues: initialState,
        onSubmit: async values =>{

            if (!stripe || !elements) return;

            
     const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
        billing_details: {
         name:formik.values.name,
         email: formik.values.email,
        } 
    });
    if(!error){
        try {
            const { id } = paymentMethod
            const response = await axios.post("http://localhost:3001", {
                amount: total * 100,
                id,
                description: description.join()
            })
            if(response.data.success){
                console.log("succesfull payment")
                setSuccess(true)
                dispatch(removeAllFromBasket())
            }
        } catch (error) {
            elements.getElement("card").focus();
            console.log("Error",error);
        }
    }else{
       
        console.log(error.message)
    }
            console.log(values)
    },
        validate: values =>{}
    });

    useEffect(()=>{
        setDescription(getDescription())
        setSubTotal(parseInt(localStorage.getItem("subtotal")))
        return () => {
           localStorage.removeItem("subtotal")
        }  
    }, [])
   
    let deliveryAmount = formik.values.delivery === "national" ? 4.70 : 
    formik.values.delivery === "international" ? 6.10 : 
    formik.values.delivery === "express" ? 8.92 : 0;

    const total = subTotal < 40 ? subTotal + deliveryAmount : subTotal;
    return (
       
        <form onSubmit={formik.handleSubmit} className={classes.checkout}>  
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
            {
                subTotal < 40 && 
                <Delivery onChange={formik.handleChange} />
            }
            
            <StripeForm
            success={success}
            deliveryAmount={deliveryAmount}
            subTotal={subTotal}
            total={total} 
            />
        </form>
    )
}

export default Checkout
