import React, {useEffect} from 'react'
import { useFormik } from 'formik';
import { useSelector, useDispatch} from "react-redux"
import { redirectTo } from "@reach/router";
import { registerWithEmailAndPassword } from "../../../utils/user.utils"

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

    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(user){
            redirectTo("/")
        }
    }, [user])

    const initialState = {
        email: "",
        password: ""
    }
    const formik = useFormik({
        initialValues: initialState,
        onSubmit: values => {
            dispatch(registerWithEmailAndPassword(values.email, values.password))
            formik.resetForm();
        },
        validate: values => {
            let errors = {}

            if(!values.email){
                errors.email = "Email requerido"
            }else if(values.email.length <= 8){
                errors.email = "Minimo 8 caracteres"
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                errors.email = "Email invalid"
            }

            if(!values.password){
                errors.password = "Password Required"
            }else if(values.password.length < 8 ){
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
