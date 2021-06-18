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
      >
        <div  className={classes.modal__container}>
          <img  src={cometa} alt="" />
          <h2  >{title}</h2>
          <p>
          {children}
          </p>
        </div>
      </Modal>
    </div>
  );
}
