import React from 'react'
import {InputRow} from "../../registro_singIn/Register"
import classes from "./Delivery.module.scss"


 const Delivery = ({onChange})=>(
    <div className={classes.delivery__choices}>
        <h3>Opciones de envío</h3>
        <div className={classes.delivery__row}> 
            <div className={classes.delivery__row__left}>
                <InputRow 
                onChange={onChange}
                style={classes.delivery__input}
                type="radio"
                name="delivery"
                value="national"
                />
                <p>España, Peninsula y Baleares</p>
            </div>
             <span>4,70€</span>
        </div>
        <div className={classes.delivery__row}> 
            <div className={classes.delivery__row__left}>
                <InputRow
                onChange={onChange}
                style={classes.delivery__input}
                type="radio"
                name="delivery"
                value="international"
                />
                <p>Toda Europa</p>
            </div>
             <span>6,10€</span>
        </div>
        <div className={classes.delivery__row} style={{borderBottom: "none"}}> 
            <div className={classes.delivery__row__left}>
                <InputRow 
                onChange={onChange}
                style={classes.delivery__input}
                type="radio"
                name="delivery"
                value="express"
                />
                <p>Express</p>
            </div>
             <span>8,92€</span>
        </div>
        <a href="https://www.correos.es/es/es/particulares">Más informacion.</a>
    </div>
)

export default Delivery
