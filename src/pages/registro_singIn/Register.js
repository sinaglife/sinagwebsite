import React, {useEffect, useState} from 'react'
import { useFormik } from 'formik';
import { useSelector, useDispatch} from "react-redux"
import { useHistory } from "react-router-dom";
import {InputRow, FormComponent} from "../../components/form/FormComponent"
import Modal from "../../components/Modal"
import Loading from "../../components/Loading"
import {  
    registerUserStart,
    registerUserSuccess,
    registerUserFailure
} from "../../redux/user/user.actions"
import { getData} from "../../utils/functions"


import classes from "./RegistroSingIn.module.scss"


const Register = () => {
    
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    let history = useHistory()

    useEffect(()=>{
        if(!!user?.status){
            history.push("/")
        }
    }, [user])

    const initialState = {
        name: "",
        lastName: "",
        email: "",
        password: "",
        password2: ""
    }

    const formik = useFormik({
        initialValues: initialState,
        onSubmit: async values => {

            try {
                dispatch(registerUserStart())
                
                const response = await getData(
                    "http://localhost:8080/api/user/register",
                    "post",
                    null,
                    {
                        name:values.name,
                        lastName:values.lastName,
                        email:values.email, 
                        password:values.password
                    }
                )
                if(response.success){
                    dispatch(registerUserSuccess(response.data))
                    setIsModalOpen(true)
                    formik.resetForm();
                }else{
                    dispatch(registerUserFailure(response.message))
                    alert(response.message)
                    formik.resetForm();
                }
               
            } catch (error) {
                dispatch(registerUserFailure(error))
                //Abrir modal de error
            }
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

            if(values.password !== values.password2)
            errors.password = "Las contraseñas deben coincidir"
            
            return errors;
        }
    });

    const handleClose = () => {
        setIsModalOpen(false)
        history.push("/")
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
            <Modal 
            open={isModalOpen} 
            close={handleClose}
            title="Registro exitoso"
            >
                Favor revise su correo.
            </Modal>
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


