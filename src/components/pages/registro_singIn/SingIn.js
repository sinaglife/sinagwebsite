import React, {useEffect}  from 'react'
import {InputRow} from "./Register"
import googleIcon from "../../../assets/images/google.svg"
import { useFormik } from 'formik';
import {logInWithGoogle, logWithEmailAndPassword} from "../../../utils/user.utils"
import { Link, redirectTo } from "@reach/router";
import { connect } from 'react-redux'

import classes from "./RegistroSingIn.module.scss"


const SingIn = ({logWithEmailAndPassword, logInWithGoogle, user}) => {

    useEffect(()=>{
        if(user != null){
            console.log("usuario",user)
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
            logWithEmailAndPassword(values.email, values.password)
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
            }else if(values.password.length < 8){
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
                <div className={classes.remember__password}>
                    <input type="checkbox" name="remember"/>
                    <p>Recordar contraseña</p>
                </div>
                <Link to="/olvido-contrasena">
                    ¿Olvido su contraseña?
                </Link>
                
                    <div className={classes.buttons__container}>
                        <button style={{backgroundColor: formik.isSubmitting ? "rgb(214, 212, 212)" : null}}
                         type="submit">
                             Aceptar
                        </button>
                        <button type="button" onClick={logInWithGoogle} style={{display: formik.isSubmitting ? "none" : null}}
                         className={classes.singWhit__button}>
                            <img src={googleIcon}/>
                            Registrarse con Google
                        </button>
                    </div>
                   
                <Link to="/nuevo-usuario" >
                    ¿Aún no tienes cuenta?
                </Link>
           </form>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        user: state.user.user,
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        logWithEmailAndPassword: (email, password) =>
         dispatch(logWithEmailAndPassword(email, password)),
        logInWithGoogle: ()=> dispatch(logInWithGoogle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingIn)
