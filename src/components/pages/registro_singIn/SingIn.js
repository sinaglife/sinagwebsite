import React from 'react'
import {InputRow} from "./Register"
import googleIcon from "../../../assets/images/google.svg"
import { useFormik } from 'formik';

import classes from "./RegistroSingIn.module.scss"


const SingIn = () => {

    const initialState = {
        email: "",
        password: ""
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
           <h3>Entrar</h3> 
           <form onSubmit={formik.handleSubmit}>
                <InputRow 
                name="email" label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                />
                <InputRow name="password" label="Contraseña"
                 value={formik.values.password}
                 onChange={formik.handleChange}
                 type="password"
                 />
                <a href="#" >¿Olvido su contraseña?</a>
                <div className={classes.buttons__container}>
                    <button type="submit">Aceptar</button>
                    <button className={classes.singWhit__button}><img src={googleIcon}/>Registrarse con Google</button>
                </div>
                <a href="#" >¿Aún no tienes cuenta?</a>
           </form>
        </div>
    )
}

export default SingIn
