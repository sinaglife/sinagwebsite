import React from "react";
import classes from "./Backdrop.module.scss";
import Button from "../UI/button/Button";

const Backdrop = ({show, close}) =>
  show ? (
    <div className={classes.backdrop} onClick={close}>
      <div className={classes.backdropButton}>
        <Button icon="close" color="white" />
      </div>
    </div>
  ) : null;

export default Backdrop;
