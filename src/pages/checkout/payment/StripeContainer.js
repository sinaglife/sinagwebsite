import React, {useState, useEffect} from 'react'
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
//import { redirectTo } from "@reach/router";
import {loadStripe} from '@stripe/stripe-js';
import { useSelector} from "react-redux"
import axios from 'axios';
import classes from "./StripeContainer.module.scss"

const stripePromise = loadStripe("pk_test_51IcwH9Cz57I5nxPx7a0Y9Gce66QaPSqIJknhMp0yXgDABgwpCItDAm4rR2w1WhF6NVr1Gc9yLOpSA0L0v8SJC83200lyuyLMyR");


const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        color: "rgb(0, 0, 0)",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: "rgb(0, 0, 0)"
        },
        "::placeholder": {
          color: "#C7C7C7"
        }
      },
      invalid: {
        iconColor: "rgb(168, 19, 19)",
        color: "rgb(168, 19, 19)"
      }
    }
  };

const StripeForm = ({name, email, deliveryAmount})=>{

    const stripe = useStripe();
    const elements = useElements();
    const basket = useSelector(state => state.basket.basketItems)
    const [description, setDescription] = useState("")
    const [success, setSuccess] = useState(false)
    const [subTotal, setSubTotal] = useState(0)

    const total = subTotal < 40 ? subTotal + deliveryAmount : subTotal;
    const getDescription = ()=> basket?.map((item)=> item.acf.product_title)
    
    useEffect(()=>{
        setDescription(getDescription())
        setSubTotal(parseInt(localStorage.getItem("subtotal")))
        return () => {
           localStorage.removeItem("subtotal")
        }
    }, [])

 

   const handleSubmit = async (event)=>{
       event.preventDefault()
       if (!stripe || !elements) return;

     const {error, paymentMethod} = await stripe.createPaymentMethod({
           type: "card",
           card: elements.getElement(CardElement),
           billing_details: {
            name,
            email
           } 
       });
       if(!error){
           try {
               const { id } = paymentMethod
               const response = await axios.post("http://localhost:3001", {
                   amount: total,
                   id,
                   description: description.join()
               })
               if(response.data.success){
                   console.log("succesfull payment")
                   setSuccess(true)
                   
               }
           } catch (error) {
               elements.getElement("card").focus();
               console.log("Error",error);
           }
       }else{
          
           console.log(error.message)
       }
   
   }
    
    return (
        <>
        {
        !success ?
           
            <div  className={classes.stripe__form}>
                 <h3>Datos del la tarjeta</h3> 
                <div className={classes.payment__details}>
                    <div className={classes.payment__details__row}>
                        <h5>Subtotal:</h5>
                        <span>{subTotal}$</span>
                    </div>
                    <div className={classes.payment__details__row}>
                        <h5>Envio:</h5>
                        
                            {
                                subTotal < 40 ?
                                <span>{deliveryAmount}$</span> :
                                <span>Gratis</span>
                            }
                            
                        
                    </div>
                    <div className={classes.payment__details__row}>
                         <h5>Total:</h5>
                         <span>{total}$</span>
                    </div>
                </div>
                <CardElement className={classes.stripe__input}  options={CARD_OPTIONS}/>
                <button type="submit" className={classes.stripe__button}>
                    Pagar
                </button >
            </div>
                : 
            <h2>Gracias por tu compra</h2>
        }   
        </>
    )
}

const StripeContainer = ({deliveryAmount, email, name}) => {
    
    return (
        <div >
            <Elements stripe={stripePromise}>
                <StripeForm 
                deliveryAmount={deliveryAmount}
                name={name}
                email={email}
                />
            </Elements>
        </div>
    )
}

export default StripeContainer
