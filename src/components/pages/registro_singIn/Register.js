import React from 'react'
import { useFormik } from 'formik';

import classes from "./RegistroSingIn.module.scss"

export const InputRow = ({label, name, type, value, onChange, error})=>{
    return(
        <div className={classes.create__user__row}>
            <label>{label}</label>
            <input name={name} type={type} value={value}  onChange={onChange}/>
            {
                error && <p>{error}</p>
            }
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
            formik.resetForm();
        },
        validate: values => {
            let errors = {}

            if(!values.name){
                errors.name = "Nombre obligatorio"
            }else if(values.name.length <= 3){
                errors.name = "Minimo 3 caracteres"
            }

            if(!values.lastName){
                errors.lastName = "Apellido obligatorio"
            }

            if(!values.email){
                errors.email = "Email requerido"
            }else if(values.email.length <= 8){
                errors.email = "Minimo 8 caracteres"
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                errors.email = "Email invalid"
            }

            if(!values.password){
                errors.password = "Password Required"
            }else if(!values.password.length <= 5){
                errors.password = "Contraseña minimo 8 caracteres"
            }
            

            return errors;
        }
    });

    return (
        <div className={classes.container__form}>
            <h3>crear usuario</h3>
            <form onSubmit={formik.handleSubmit} >
                <InputRow
                error={formik.errors.name}
                type="text" 
                onChange={formik.handleChange}
                name="name" value={formik.values.name}
                label="Nombre"
                />
                <InputRow
                error={formik.errors.lastName}
                type="text" 
                onChange={formik.handleChange}
                name="lastName" value={formik.values.lastName}
                label="Apellido"
                />
                <InputRow
                 error={formik.errors.email}
                type="email" 
                onChange={formik.handleChange}
                name="email" value={formik.values.email}
                label="Email"
                />
                <InputRow
                 error={formik.errors.password}
                type="password" 
                onChange={formik.handleChange}
                name="password" value={formik.values.password}
                label="Contraseña"
                />
                <button style={{backgroundColor: formik.isSubmitting ? "rgb(214, 212, 212)" : null}} type="submit">Crear</button>
            </form>
        </div>
    )
}

export default Register
