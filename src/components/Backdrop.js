import React from "react";
import Button from "./UI/button/Button";

const styles = {
  div:{
    position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.6)",
    zIndex: 600
  },
  buttom:{
    position: "fixed",
    top: 0,
    right: 0,
    zIndex: 610,
  }
}
const Backdrop = ({show, close}) =>
  show ? (
    <div  styles={styles.div} onClick={close}>
      <div  styles={styles.buttom}>
        <Button icon="close" color="white" />
      </div>
    </div>
  ) : null;

export default Backdrop;
