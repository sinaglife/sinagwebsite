import React, {useEffect, useState} from 'react'
import { useFormik } from 'formik';
import { useSelector, useDispatch} from "react-redux"
import { useHistory, Link } from "react-router-dom";
import {InputRow, FormComponent} from "../../components/form/FormComponent"
import SnackbarComponent from "../../components/SnackbarComponent"
import Loading from "../../components/Loading"
import {  
    registerUserStart,
    registerUserSuccess,
    registerUserFailure
} from "../../redux/user/user.actions"
import { getData, getUserAge} from "../../utils/functions"
import uri from "../../utils/uri.utils"



import classes from "./RegistroSingIn.module.scss"


const Register = () => {
    
    const [showSnackbar, setShowSnackbar] = useState({
        open: false,
        error: false,
        text: "Lo sentimos, algo ha ido mal"
    })
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    let history = useHistory()

    useEffect(()=>{
        if(!!user?.status){
            history.push("/")
        }
    }, [user, history])

    const initialState = {
        name: "",
        lastName: "",
        email: "",
        password: "",
        password2: "",
        birth: ""
    }

    const formik = useFormik({
        initialValues: initialState,
        onSubmit: async values => {

            try {
                dispatch(registerUserStart())
                
                const response = await getData(
                    `${uri.basePath}${uri.register}`,
                    "post",
                    null,
                    {
                        name:values.name,
                        lastName:values.lastName,
                        birthDate: values.birth,
                        email:values.email, 
                        password:values.password
                    }
                )
                if(response.success){
                    dispatch(registerUserSuccess(response.data))
                    setShowSnackbar({
                        open: true,
                        text: "Registro exitoso, revise su bandeja de entrada"
                    })
                    formik.resetForm();
                }else{
                    dispatch(registerUserFailure(response.message))
                    setShowSnackbar({
                        open: true,
                        error: true,
                        text: "Lo sentimos, algo ha ido mal"
                    })
                    formik.resetForm();
                }
               
            } catch (error) {
                dispatch(registerUserFailure(error))
                setShowSnackbar({
                    open: true,
                    error: true,
                    text: error
                })
                formik.resetForm();
            }
        },
        validate: values => {
            let errors = {}

            if(!values.email){
                errors.email = "Email requerido"
            }else if(values.email.length <= 14){
                errors.email = "Minimo 8 caracteres"
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                errors.email = "Email invalid"
            }

            if(!values.password){
                errors.password = "Password Required"
            }else if(values.password.length < 8 ){
                errors.password = "Contraseña minimo 8 caracteres"
            }

            if(values.password !== values.password2)
            errors.password = "Las contraseñas deben coincidir"

            if(values.birth === "" || getUserAge(values.birth) < 18)
            errors.birth = "Debes ser mayor de edad"
            
            return errors;
        }
    });

    const handleClose = () => {
        setShowSnackbar({
            open:false
        })

    }

    const formData = [
        {
            type:"text", 
            onChange: formik.handleChange,
            name:"name", 
            value: formik.values.name,
            label: "Nombre"
        },
        {
            type:"text", 
            onChange: formik.handleChange,
            name:"lastName", 
            value: formik.values.lastName,
            label: "Apellido"
        },
        {
            error: formik.errors.birth,
            type:"date", 
            onChange: formik.handleChange,
            name:"birth", 
            value: formik.values.birth,
            label: "Fecha de nacimiento"
        },
        {
            error: formik.errors.email,
            type:"email", 
            onChange: formik.handleChange,
            name:"email", 
            value: formik.values.email,
            label: "Email"
        },
        {
            error: formik.errors.password,
            type:"password", 
            onChange: formik.handleChange,
            name:"password", 
            value: formik.values.password,
            label: "Contraseña"
        },
        {
            error: formik.errors.password2,
            type:"password", 
            onChange: formik.handleChange,
            name:"password2", 
            value: formik.values.password2,
            label: "Repetir contraseña"
        }
    ]

    if(formik.isSubmitting){
        return(
            <Loading/>
        )
    }
   

    return (
        <FormComponent
        title="Registrarse"
        onSubmit={formik.handleSubmit}
        isSubmitting={formik.isSubmitting}
        >
            <SnackbarComponent
             open={showSnackbar.open}
             success={showSnackbar.error}
             text={showSnackbar.text}
             close={handleClose}
             autoHide={4000}
             />
            {
                formData.map((item, index)=> (
                    <InputRow
                    error={ item.error ? item.error : null}
                    type={item.type}
                    onChange={item.onChange}
                    name={item.name} 
                    value={item.value}
                    label={item.label}
                    key={index}
                    />
                ))
            }
            <p>Al registrarte, aceptas las <Link to="/politicas-de-privacidad">politicas de privacidad</Link> 
             <br/>y terminos de uso.
            </p>
            <button 
            className={classes.register__button} 
            disabled={formik.isSubmitting}
            type="submit"
            >
                Crear
            </button>
        </FormComponent>
    )
}

export default Register


