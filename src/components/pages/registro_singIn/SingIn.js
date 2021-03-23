import React,{useState} from 'react'
import {InputRow} from "./Register"
import googleIcon from "../../../assets/images/google.svg"
import { useFormik } from 'formik';

import classes from "./RegistroSingIn.module.scss"


const SingIn = () => {
    const [user, setUser] = useState({
        name: "",
        email:""
    })

    const initialState = {
        email: "",
        password: ""
    }

    const formik = useFormik({
        initialValues: initialState,
        onSubmit: values => {
            setUser({
                ...user,
                name: values.name,
                email: values.email
            })
            formik.resetForm();
        },
        validate: values => {
            let errors = {}

            if(!values.email){
                errors.email = "Email requerido"
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                errors.email = "Email invalido"
            }

            if(!values.password){
                errors.password = "Password Required"
            }else if(values.password.length <= 5){
                errors.password = "Contraseña minimo 8 caracteres"
            }
            return errors;
        }
    });
    return (
        <div className={classes.container__form}>
           <h3>Entrar</h3> 
           <form onSubmit={formik.handleSubmit}>
                <InputRow 
                error={formik.errors.email}
                name="email" label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                />
                <InputRow name="password" label="Contraseña"
                error={formik.errors.password}
                 value={formik.values.password}
                 onChange={formik.handleChange}
                 type="password"
                 />
                <a href="http://localhost:3000/olvido-contrasena" >
                    ¿Olvido su contraseña?
                </a>
                   
                    <div className={classes.buttons__container}>
                        <button style={{backgroundColor: formik.isSubmitting ? "rgb(214, 212, 212)" : null}}
                         type="submit">
                             Aceptar
                        </button>
                        <button style={{display: formik.isSubmitting ? "none" : null}}
                         className={classes.singWhit__button}>
                            <img src={googleIcon}/>
                            Registrarse con Google
                        </button>
                    </div>
                   
                <a href="http://localhost:3000/nuevo-usuario" >
                    ¿Aún no tienes cuenta?
                </a>
           </form>
        </div>
    )
}

export default SingIn


//style={`display:${formik.isSubmitting && "none"}`}