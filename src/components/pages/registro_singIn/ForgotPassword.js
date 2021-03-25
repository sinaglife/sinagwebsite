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
            formik.resetForm();
        },
        validate: values => {

            let errors = {}

            if(!values.email){
                errors.email = "Email requerido"
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                errors.email = "Email invalid"
            }

            return errors;
        }
    });
    return (
        <div className={classes.container__form}>
            <h3>restablecer contraseña</h3>
            <p>Le enviaremos un email, para restablecer su contraseña.</p>
            <form onSubmit={formik.handleSubmit}>
                <InputRow 
                 error={formik.errors.email}
                label="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}/>
                     <button style={{backgroundColor: formik.isSubmitting ? "rgb(214, 212, 212)" : null}} type="submit">
                         Enviar
                    </button>
            </form>
        </div>
    )
}

export default ForgotPassword
