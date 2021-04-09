const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

require("dotenv").config()

const stripe = new Stripe(process.env.SECRET_KEY);
const app = express();

app.set("port", process.env.PORT || 3001)
app.use(cors({ origin: '*' }));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.post("/", async (req, res)=> {
    const {id, amount} = req.body;
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "EUR",
            description: "Gaming Keyboard",
            payment_method: id,
            confirm: true, 
        });

        console.log(payment);

        return res.status(200).json({
            message: "payment succesfully",
            success: true
        })
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            message: error.raw.message,
            success: false
        })
    }
})

app.listen(app.get("port"), ()=>{
    console.log(`server listen on port ${app.get("port")}`);
})