import React, {useEffect}  from 'react'
//import {InputRow} from "./Register"
import googleIcon from "../../assets/images/google.svg"
import { useFormik } from 'formik';
import { useHistory, Link } from "react-router-dom";
import {logInWithGoogle, logWithEmailAndPassword} from "../../utils/user.utils"
import { connect } from 'react-redux'
import {
    FormComponent, 
    InputRow
} from "../../components/form/FormComponent"

import classes from "./SingIn.module.scss"


const SingIn = ({logWithEmailAndPassword, logInWithGoogle, user}) => {

    let history = useHistory()
    useEffect(()=>{
        window.scrollTo(0,0)
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
        <FormComponent
        title="Entrar"
        onSubmit={formik.handleSubmit}
        isSubmitting={formik.isSubmitting}
        buttonTitle="Aceptar"
        >
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
                <div className={classes.singIn__remember}>
                    <input type="checkbox" name="remember"/>
                    <p>Recordar contraseña</p>
                </div>
                <Link to="/olvido-contrasena">
                    <p className={classes.singIn__linkTo}>
                        ¿Olvido su contraseña?
                    </p>
                </Link>
                <div className={classes.singIn__submit__buttons}>
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
                    <p className={classes.singIn__linkTo}>
                        ¿Aun no tienes cuenta?
                    </p>
                </Link>
        </FormComponent>
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
