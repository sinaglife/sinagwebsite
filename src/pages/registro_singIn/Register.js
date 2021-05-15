import React, {useEffect} from 'react'
import { useFormik } from 'formik';
import { useSelector, useDispatch} from "react-redux"
import { useHistory } from "react-router-dom";
import { registerWithEmailAndPassword } from "../../utils/user.utils"
import {InputRow, FormComponent} from "../../components/form/FormComponent"

import classes from "./RegistroSingIn.module.scss"


const Register = () => {

    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    let history = useHistory()

    useEffect(()=>{
        if(user){
            history.push("/")
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
            <FormComponent>
            <InputRow
             error={formik.errors.email}
            type="email" 
            onChange={formik.handleChange}
            name="email" 
            value={formik.values.email}
            label="Email"
            />
            <InputRow
            error={formik.errors.password}
            type="password" 
            onChange={formik.handleChange}
            name="password" 
            value={formik.values.password}
            label="Contraseña"
            />
            <button className={classes.register__button} 
            type="submit">
                Crear
            </button>
        </FormComponent>
    )
}

export default Register


