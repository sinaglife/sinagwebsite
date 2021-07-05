import React, {useState} from 'react'
import { useFormik } from 'formik';
import { useHistory, useParams } from "react-router-dom";
import {InputRow, FormComponent} from "../../components/form/FormComponent"
import Modal from "../../components/Modal"
import Loading from "../../components/Loading"
import { getData} from "../../utils/functions"
import uri from "../../utils/uri.utils"

import classes from "./RegistroSingIn.module.scss"


const UpdatePassword = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalTex, setModalText] = useState({
        title: "",
        text: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    let history = useHistory()
    const params = useParams()

    console.log(params?.token)

    const initialState = {
      email: "",
      password: "",
      confirmPassword: "",
  }

  const formik = useFormik({
    initialValues: initialState,
    onSubmit: async values => {

      try {

        if(!params.token){ 

          setIsLoading(false)
          setIsModalOpen(true)
          setModalText({
            title: "Error",
            text: "Error al recibir los datos"
        })
          formik.resetForm();
   
      }else{

        setIsLoading(true)

        const response = await getData(
          `${uri.basePath}${uri.createPass}`,
          "put",
          null,
          {
            email: values.email,
            newPassword: values.password,
            token: params.token
          }
        )

        if(response.success){
          setIsLoading(false)
          setIsModalOpen(true)
          setModalText({
            title: "Cambio de contraseña",
            text: "Cambio exitoso"
        })
          formik.resetForm();
        }else {
          setIsLoading(false)
          setIsModalOpen(true)
          setModalText({
            title: "Cambio de contraseña",
            text: "Lo sentimos, algo ha ido mal"
        })
          formik.resetForm();
        }
      } 
        
      } catch (error) {
        setIsLoading(false)
        setIsModalOpen(true)
          setModalText({
            title: "Error",
            text: "Lo sentimos, algo ha ido mal"
        })
        formik.resetForm();
      }
    },

    validate: values => {

      let errors = {}

      if(!values.email){
          errors.email = "Email requerido"
      }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
          errors.email = "Email invalido"
      }

      if(!values.password){
        errors.password = "Campo obligatorio"
      }
       if(values.password.length < 9  ){
          errors.password = "Contraseña minimo 8 caracteres"
      }

      if(!values.confirmPassword){
        errors.newPassword = "Campo obligatorio"
      }
      if(values.confirmPassword.length < 9 ){
        errors.confirmPassword = "Contraseña minimo 8 caracteres"

      }
       if(values.password !== values.confirmPassword){
      errors.confirmPassword = "Las contraseñas deben coincidir"
      }

    return errors;
    }
  });

  const handleClose = () => {
    if(modalTex.text === "Cambio exitoso"){
      setIsModalOpen(false)
      history.push("/")
    }else {
      setIsModalOpen(false)
    }
  }
  
  const formData = [
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
        error: formik.errors.confirmPassword,
        type:"password", 
        onChange: formik.handleChange,
        name:"confirmPassword", 
        value: formik.values.confirmPassword,
        label: "Confirmar Contraseña"
    }
  ]
    return (
    <>
      <Modal 
       open={isModalOpen} 
       close={handleClose}
       title={modalTex.title}
      >
       {modalTex.text}
      </Modal>
    {
      isLoading ? <Loading/> :
      <FormComponent
       title="Nueva contraseña"
       onSubmit={formik.handleSubmit}
       isSubmitting={formik.isSubmitting}
       >
        {
           formData.map((item, index) => (
            <InputRow 
            error={item.error}
            label={item.label}
            name={item.name}
            value={item.value}
            onChange={item.onChange}
            key={index}
            />
        ))
        }
        <button disabled={formik.isSubmitting} className={classes.register__button} type="submit">
          Enviar
        </button>
      </FormComponent>
      
    }
    </>
  )
}

export default UpdatePassword
