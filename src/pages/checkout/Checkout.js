import React, {useState, useEffect} from 'react'
import Delivery from "./delivery/Delivery"
import CustomerData from "./CustomerData"
import StripeForm from "./payment/StripeContainer"
import { useFormik } from 'formik';
import { useSelector, useDispatch} from "react-redux"
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {removeAllFromBasket} from "../../redux/basket/basket.actions";
import Modal from "../../components/Modal"
import {useHistory} from "react-router-dom";

import axios from 'axios';

import classes from "./Checkout.module.scss"

function Checkout() {

    const history = useHistory()
    console.log( history.location.state)
    const stripe = useStripe();
    const elements = useElements();
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")
    const [subTotal, setSubTotal] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const basket = useSelector(state => state.basket.basketItems)
    const dispatch = useDispatch()

    const removeItemsSucces = ()=> {
        localStorage.removeItem("delivery")
        localStorage.removeItem("subtotal")
        localStorage.removeItem("total")
    }
    
      const handleClose = () => {
        setIsModalOpen(false);
        removeItemsSucces()

        history.push("/");
      };

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
                description: JSON.stringify(basket)
            })
            if(response.data.success){
                console.log("succesfull payment", basket)
                setSuccess(true)
                setIsModalOpen(true)
                dispatch(removeAllFromBasket())
            }
        } catch (error) {
            elements.getElement("card").focus();
            setError(error)
        }
    }else{
        setError(error.message)
    }

    },
    validate: values => {
        let errors = {}

        if(!values.email){
            errors.email = "Email requerido"
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email = "Email invalido"
        }
        if(values.zip.length < 5)
        errors.zip = "Codigo postal incorrecto"

        return errors;
    }
    });


    useEffect(()=>{
       
        setSubTotal(parseInt(localStorage.getItem("subtotal")))
        return () => {
           localStorage.removeItem("subtotal")
        }  
    }, [])

    useEffect(()=>{
        if(basket.length === 0) history.push("/");
    }, [])
   
    let deliveryAmount = formik.values.delivery === "national" ? 4.70 : 
    formik.values.delivery === "international" ? 6.10 : 
    formik.values.delivery === "express" ? 8.92 : 0;

    const total = subTotal < 40 ? subTotal + deliveryAmount : subTotal;

    if(total && total > 0)
    localStorage.setItem("total", String(total))

    if(deliveryAmount && deliveryAmount > 0)
    localStorage.setItem("delivery", String(deliveryAmount))

    return (
        
        isModalOpen ?

       <Modal
       close={handleClose}
       open={isModalOpen}
       /> 
       :
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
            deliveryAmount={deliveryAmount}
            subTotal={subTotal}
            total={total} 
            />
        </form>
    )
}

export default Checkout
