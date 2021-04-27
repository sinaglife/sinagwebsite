import React from 'react';
import Modal from '@material-ui/core/Modal';
import cometa from "../assets/images/footer/cometa.png"
import classes from "./Modal.module.scss"



export default function SimpleModal({close, open}) {
  
  const body = (
    <div  className={classes.modal__container}>
      <img  src={cometa} alt="" />
      <h2  >Gracias por tu compra</h2>
      <p>
       Orden de envio
      </p>
      
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={close}
      >
        {body}
      </Modal>
    </div>
  );
}
