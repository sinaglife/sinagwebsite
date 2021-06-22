import React, {useState} from 'react'
import { useFormik } from 'formik';
import {
    FormComponent, 
    InputRow
} from "../../components/form/FormComponent"
import { getData} from "../../utils/functions"

import classes from "./RegistroSingIn.module.scss"

const ForgotPassword = () => {

    const [isLoading, setIsLoading] = useState(false)
    const initialState = {
        email: "",
    }

    const formik = useFormik({
        initialValues: initialState,
        onSubmit: values => {

            try {

                
            } catch (error) {
                
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

    return (
        <FormComponent>
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
