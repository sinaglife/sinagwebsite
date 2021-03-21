import React from 'react'
import { useFormik } from 'formik';

import {InputRow} from "./Register"

import classes from "./RegistroSingIn.module.scss"



const ForgotPassword = () => {
    const initialState = {
        email: "",
    }

    const formik = useFormik({
        initialValues: initialState,
        onSubmit: values => {
            console.log("submitting", values)
        },
        validate: values => {

            let errors = {}

            return errors;
        }
    });
    return (
        <div className={classes.container__form}>
            <h3>restablecer contraseña</h3>
            <p>Le enviaremos un email, para restablecer su contraseña.</p>
            <form onSubmit={formik.handleSubmit}>
                <InputRow 
                label="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default ForgotPassword
