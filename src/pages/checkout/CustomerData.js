import React from 'react'
import {InputRow} from "../registro_singIn/Register"
import classes from "./CustomerData.module.scss"


const CustomerData = ({
    onChange,
    name,
    lastName,
    email,
    phone,
    address,
    zip,
    city,
    country
}) => {
    
    return (
            <div className={classes.customer__form}>
               <div className={classes.customer__info}>
                    <h3>Datos del cliente</h3>
                    <InputRow style={classes.customer__data__input} name="name" value={name} onChange={onChange} label="Nombre" />
                    <InputRow style={classes.customer__data__input} name="lastName" value={lastName} onChange={onChange} label="Apellido" />
                    <InputRow style={classes.customer__data__input} name="email" value={email} onChange={onChange} label="Email" type="email"/>
                    <InputRow style={classes.customer__data__input} name="phone" values={phone} onChange={onChange} label="Phone"/>
                </div>
                <div className={classes.delivery__info}>
                    <h3>Direccion de envio</h3>
                    <InputRow style={classes.customer__data__input} name="address" value={address} onChange={onChange} label="Direccion"/>
                    <InputRow style={classes.customer__data__input} name="zip" value={zip} onChange={onChange} label="Codigo postal"/>
                    <InputRow style={classes.customer__data__input} name="city" value={city} onChange={onChange} label="Ciudad"/>
                    <InputRow style={classes.customer__data__input} name="country" value={country} onChange={onChange} label="Pais"/>
                </div>
            </div>
    )
}

export default CustomerData
