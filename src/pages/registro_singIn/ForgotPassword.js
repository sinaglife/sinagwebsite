import React, {useState} from 'react'
import { useFormik } from 'formik';
import {
    FormComponent, 
    InputRow
} from "../../components/form/FormComponent"
import { getData} from "../../utils/functions"
import uri from "../../utils/uri.utils"
import SnackbarComponent from "../../components/SnackbarComponent"
//import { useHistory } from "react-router-dom";
import classes from "./RegistroSingIn.module.scss"

const ForgotPassword = () => {

    const [showSnackbar, setShowSnackbar] = useState({
        open: false,
        error: false,
        text: "Lo sentimos, algo ha ido mal"
    })
    const initialState = {
        email: "",
    }

    const formik = useFormik({
        initialValues: initialState,
        onSubmit: async values => {

            try {
                const response = await getData(
                    `${uri.basePath}${uri.forgotPass}`,
                    "put",
                    null,
                    {
                        email:values.email
                    }
                )

                if(response.success){
                    setShowSnackbar({
                        open: true,
                        text: "Operacion exitosa, revisa tu bandeja de entrada"
                    })
                    formik.resetForm();
                }else{
                    setShowSnackbar({
                        open: true,
                        error: true,
                        text: "Lo sentimos, algo ha ido mal"
                    })
                    formik.resetForm();
                }
                
            } catch (error) {
                setShowSnackbar({
                    open: true,
                    error: true,
                    text: "Lo sentimos, algo ha ido mal"
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
                errors.email = "Email invalid"
            }

            return errors;
        }
    });

    const handleClose = () => {
        setShowSnackbar({
            open:false
        })
    }

    return (
        <FormComponent
        title="Olvido de contraseña"
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
            <InputRow 
               error={formik.errors.email}
               name="email" label="Email"
               value={formik.values.email}
               onChange={formik.handleChange}
            />
            <button className={classes.register__button} type="submit">
             Enviar
            </button>
        </FormComponent>
    )
}

export default ForgotPassword
