import React, {useState} from 'react'
import { useFormik } from 'formik';
import {
    FormComponent, 
    InputRow
} from "../../components/form/FormComponent"
import { getData} from "../../utils/functions"
import uri from "../../utils/uri.utils"
import Modal from "../../components/Modal"
import { useHistory } from "react-router-dom";
import classes from "./RegistroSingIn.module.scss"

const ForgotPassword = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalText, setModalText] = useState({
        title: "",
        text: ""
    })
    const initialState = {
        email: "",
    }
    const history = useHistory()

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
                    setIsModalOpen(true)
                    setModalText({
                        title:"Operacion exitosa",
                        text: "Revise su correo electronico"
                    })
                    formik.resetForm();
                }else{
                    setIsModalOpen(true)
                    setModalText({
                        title:"Error",
                        text: "Algo ha ido mal, para cualquier duda pongase en contacto con soporte."
                    })
                    formik.resetForm();
                }
                
            } catch (error) {
                setIsModalOpen(true)
                    setModalText({
                        title:"Error",
                        text: "Algo ha ido mal, para cualquier duda pongase en contacto con soporte."
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
        setIsModalOpen(false)
        history.push("/")
    }

    return (
        <FormComponent
        title="Olvido de contraseña"
        onSubmit={formik.handleSubmit}
        isSubmitting={formik.isSubmitting}
        >
            <Modal 
            open={isModalOpen} 
            close={handleClose}
            title={modalText.title}
            >
                {modalText.text}
            </Modal>
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
