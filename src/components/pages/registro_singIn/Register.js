import React from 'react'
import { useFormik } from 'formik';

import classes from "./RegistroSingIn.module.scss"

export const InputRow = ({label, name, type, value, onChange})=>{
    return(
        <div className={classes.create__user__row}>
            <label>{label}</label>
            <input name={name} type={type} value={value} onChange={onChange}/>
        </div>
       
    )
};

const Register = () => {

    const initialState = {
        name: "",
        lastName: "",
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

    //console.log("formik", formik.values)
    return (
        <div className={classes.container__form}>
            <h3>crear usuario</h3>
            <form onSubmit={formik.handleSubmit} >
                <InputRow
                type="text" 
                onChange={formik.handleChange}
                name="name" value={formik.values.name}
                label="Nombre"
                />
                <InputRow
                type="text" 
                onChange={formik.handleChange}
                name="lastName" value={formik.values.lastName}
                label="Apellido"
                />
                <InputRow
                type="email" 
                onChange={formik.handleChange}
                name="email" value={formik.values.email}
                label="Email"
                />
                <InputRow
                type="password" 
                onChange={formik.handleChange}
                name="password" value={formik.values.password}
                label="Contraseña"
                />
                <button type="submit">Crear</button>
            </form>
        </div>
    )
}

export default Register
