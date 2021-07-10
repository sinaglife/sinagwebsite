import React from 'react';
import Modal from '@material-ui/core/Modal';
import cometa from "../assets/images/footer/cometa.png"
import classes from "./Modal.module.scss"



export default function SimpleModal({
  close, 
  open, 
  title,
  children
}) {
  
  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        disableEnforceFocus
        disableAutoFocus
      >
        <div  className={classes.modal__container}>
          <div className={classes.modal__content}>
            <img  src={cometa} alt="cometa-sinaglife-accesorios" />
            <h2>{title}</h2>
            <div className={classes.modal__paragraph}>
              <p>
              {children}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
