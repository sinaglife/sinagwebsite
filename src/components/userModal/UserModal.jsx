import React from 'react'
import {Link, useHistory} from "react-router-dom";
import Modal from '@material-ui/core/Modal';

import classes from "./UserModal.module.scss"

const UserModal = ({
  open, 
  close, 
  user, 
  singOut
}) => {

  const history = useHistory()

  const goTo = (path) =>{
    history.push(path)
    close()
  }
    
    return (
      <Modal
      open={open}
      onClose={close}
      disableEnforceFocus
      disableAutoFocus
    >
        {
            !user?.status ?
            <div className={classes.userModal__container} >     
              <p onClick={() => goTo("/entrar")} className={classes.userModal__button}>
                  entrar
              </p>
              <p className={classes.userModal__paragraph}>
                  Aun no tienes cuenta?
              </p>
              <p onClick={() => goTo("/nuevo-usuario")} className={classes.userModal__button}>
                  Registrarse
              </p> 
            </div>
            :
            <div className={classes.userModal__container}>
              <p onClick={() => goTo("/cambiar-contrasena")}>Cambiar contraseña</p>
              <button 
              className={classes.userModal__button}
              onClick={singOut} >
                   salir
              </button>
              <p className={classes.userModal__dropOut} onClick={() => goTo("/darme-de-baja")}>Darme de baja</p> 
            </div>
        }
        
        </Modal>
    )
}

export default UserModal
