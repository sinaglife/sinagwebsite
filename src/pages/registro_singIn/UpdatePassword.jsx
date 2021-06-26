import React, {useState} from 'react'
import { useFormik } from 'formik';
import { useHistory, Link } from "react-router-dom";
import {InputRow, FormComponent} from "../../components/form/FormComponent"
import Modal from "../../components/Modal"
import Loading from "../../components/Loading"
import { getData} from "../../utils/functions"
import { useSelector, useDispatch} from "react-redux"

import classes from "./RegistroSingIn.module.scss"


const UpdatePassword = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalTex, setModalText] = useState({
        title: "",
        text: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    let history = useHistory()

    const initialState = {
      email: "",
      password: "",
      newPassword: "",
  }

  const formik = useFormik({
    initialValues: initialState,
    onSubmit: async values => {

      try {

        setIsLoading(true)

        const response = await getData(
          "http://localhost:8080/api/user/update-password",
          "post",
          null,
          {
            email: values.email,
            password: values.password,
            newPassword: values.newPassword
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
            text: "Contraseña incorrecta"
        })
          formik.resetForm();
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
      }else if(values.password.length < 9  ){
          errors.password = "Contraseña minimo 8 caracteres"
      }

      if(!values.newPassword){
        errors.newPassword = "Campo obligatorio"
      }
      if(values.newPassword.length < 9 ){
        errors.newPassword = "Contraseña minimo 8 caracteres"
      }else if(values.password === values.newPassword){
      errors.newPassword = "Las contraseñas no pueden coincidir"
      }

    return errors;
    }
  });

  const handleClose = () => {
    if(modalTex.title === "Cambio exitoso"){
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
        error: formik.errors.newPassword,
        type:"password", 
        onChange: formik.handleChange,
        name:"newPassword", 
        value: formik.values.newPassword,
        label: "Contraseña nueva"
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
       title="Cambio de contraseña"
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
