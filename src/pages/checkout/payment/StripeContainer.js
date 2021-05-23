import React, {useEffect} from 'react'
import {CardElement} from '@stripe/react-stripe-js';


import classes from "./StripeContainer.module.scss"



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

 const StripeForm = ()=>{

  const subTotal = localStorage.getItem("subtotal")
  const total = localStorage.getItem("total")
  const deliveryAmount = localStorage.getItem("delivery")
  
       
    return (
        <>
            <div  className={classes.stripe__form}>
                 <h3>Datos del la tarjeta</h3> 
                <div className={classes.payment__details}>
                    <div className={classes.payment__details__row}>
                        <h5>Subtotal:</h5>
                        <span>{subTotal}$</span>
                    </div>
                    <div className={classes.payment__details__row}>
                        <h5>Envío:</h5>
                            {
                            subTotal < 40 ?
                            <span>{deliveryAmount}€</span> :
                            <span>Gratis</span>
                            }
                    </div>
                    <div className={classes.payment__details__row}>
                         <h5>Total:</h5>
                         <span>{total}€</span>
                    </div>
                </div>
                <CardElement className={classes.stripe__input}  options={CARD_OPTIONS}/>
                <button type="submit" className={classes.stripe__button}>
                    Pagar
                </button >
            </div>
        </>
    )
}

export default StripeForm
