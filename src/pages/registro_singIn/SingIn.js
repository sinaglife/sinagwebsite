import React, {useEffect, useState}  from 'react'
//import googleIcon from "../../assets/images/google.svg"
import { useFormik } from 'formik';
import { useHistory, Link } from "react-router-dom";
import {
    FormComponent, 
    InputRow
} from "../../components/form/FormComponent"
import {  
    singInStart,
    singInSuccess,
    singInFailure
} from "../../redux/user/user.actions"
import { getData} from "../../utils/functions"
import { useDispatch} from "react-redux"
import uri from "../../utils/uri.utils"
import SnackbarComponent from "../../components/SnackbarComponent"

import classes from "./SingIn.module.scss"


const SingIn = ({user}) => {

    const [showSnackbar, setShowSnackbar] = useState({
        open: false,
        error: false,
        text: "Lo sentimos, algo ha ido mal"
    })
    let history = useHistory()
    const dispatch = useDispatch()

    useEffect(()=>{
        window.scrollTo(0,0)
        if(!!user?.status){
            history.push("/")
        }
    }, [user, history])

    const handleClose = () => setShowSnackbar({
        open: false
    })
    
    const initialState = {
        email: "",
        password: ""
    }

    const formik = useFormik({
        initialValues: initialState,
        onSubmit: async values => {
            
            try {
                dispatch(singInStart())

                const response = await getData(
                    `${uri.basePath}${uri.singIn}`,
                    "post",
                    null,
                    {
                        email:values.email, 
                        password:values.password
                    }
                )
                if(response.success){
                    dispatch(singInSuccess(response.data))
                    history.push("/")
                }else {
                    dispatch(singInFailure(response.message))
                    setShowSnackbar({
                        open: true,
                        error: true,
                        text: "Lo sentimos, algo ha ido mal"
                    })
                    formik.resetForm();
                }
                
            } catch (error) {
                dispatch(singInFailure(error))
                    setShowSnackbar({
                        open: true,
                        error: true,
                        text: error
                    })
                    formik.resetForm();
            }
           
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
        <>
            <SnackbarComponent
             open={showSnackbar.open}
             success={showSnackbar.error}
             text={showSnackbar.text}
             close={handleClose}
             autoHide={4000}
             />
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
                        {/* <button type="button"  style={{display: formik.isSubmitting ? "none" : null}}
                        className={classes.singWhit__button}>
                            <img src={googleIcon}/>
                            Registrarse con Google
                        </button> */}
                    </div>
                    
                    <Link to="/nuevo-usuario" >
                        <p className={classes.singIn__linkTo}>
                            ¿Aun no tienes cuenta?
                        </p>
                    </Link>
            </FormComponent>
        </>
    )
}

export default SingIn
