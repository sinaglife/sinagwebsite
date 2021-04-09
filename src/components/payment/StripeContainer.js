import React, {useState} from 'react'
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios';


const stripePromise = loadStripe('pk_test_51IcwH9Cz57I5nxPx7a0Y9Gce66QaPSqIJknhMp0yXgDABgwpCItDAm4rR2w1WhF6NVr1Gc9yLOpSA0L0v8SJC83200lyuyLMyR');

const StripeForm = ()=>{

    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e)=>{
        e.preventDefault()
      const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        });
        if(!error){
            try {
                const { id } = paymentMethod
                const response = await axios.post("http://localhost:3001", {
                    amount: 1000,
                    id
                })

                if(response.data.success){
                    console.log("succesfull payment")
                    setSuccess(true)

                }
            } catch (error) {
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
            <form onSubmit={handleSubmit}>
                <CardElement/>
                <button type="submit">
                    Pagar
                </button >
            </form>
    
                : 
            <h2>Gracias por tu compra</h2>
        }   
        </>
    )
}

const StripeContainer = () => {
    return (
        <div style={{marginTop: "5rem"}}>
            <Elements stripe={stripePromise}>
                <StripeForm/>
            </Elements>
        </div>
    )
}

export default StripeContainer
