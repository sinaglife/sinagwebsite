const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");
const axios = require("axios")

require("dotenv").config()

const stripe = new Stripe(process.env.SECRET_KEY);
const app = express();

app.set("port", process.env.PORT || 3001)
app.use(cors({ origin: '*' }));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const getData = async()=> {
    try {
        let response = await axios({
            method: "get",
            url: "https://39570618.servicio-online.net/API/wp-json/wc/v2/products/",
            auth:{
                username: "ck_f80844a27bd42c0423659df39d3968c2908ca8f0",
                password: "cs_1f62d919eddc2913d6443098981bf1f41d1d089d"
            }
    }) 
        return await response.data
    } catch (error) {
        console.log(error)
    }
}


const prinData = async()=>{
    const data = await getData()
    if(data)
    console.log(data)
}

prinData()

app.post("/", async (req, res)=> {
    const {id, amount, description} = req.body;
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "EUR",
            description: description,
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

app.post("/products", async (req, res)=>{
   try {
       const data = await getData()
       return res.status(200).json({
           data,
           message: "success",
           success: true
        })
   } catch (error) {
    console.log(error)
    res.status(400).json({
        message: "there was a problem with woocommerce api"
    })
   }
})

app.listen(app.get("port"), ()=>{
    console.log(`server listen on port ${app.get("port")}`);
})