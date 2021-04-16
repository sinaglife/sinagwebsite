import React from 'react'
import {InputRow} from "../../registro_singIn/Register"
import classes from "./Delivery.module.scss"


 const Delivery = ({onChange})=>(
    <div className={classes.delivery__choices}>
        <h3>Opciones de envio</h3>
        <div className={classes.delivery__row}> 
            <div className={classes.delivery__row__left}>
                <InputRow 
                onChange={onChange}
                style={classes.delivery__input}
                type="radio"
                name="delivery"
                value="national"
                />
                <p>Envio estandar nacional</p>
            </div>
             <span>5:00€</span>
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
                <p>Envio estandar internacional</p>
            </div>
             <span>10:00€</span>
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
                <p>Envio express</p>
            </div>
             <span>15:00€</span>
        </div>
    </div>
)

export default Delivery
