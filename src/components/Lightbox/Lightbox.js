import React, { useState } from "react";

import Auxi from "../../hoc/Auxi";
import classes from "./Lightbox.module.scss";
import Backdrop from "../Backdrop/Backdrop";

const Lightbox = (props) => {
  const [X, setX] = useState(0);

  const goRight = () => {
    if (X === props.lightImgsArr.length - 1) {
      setX(0);
    } else {
      let newX = X + 1;
      setX(newX);
    }
  };

  const goLeft = () => {
    if (X === 0) {
      setX(props.lightImgsArr.length - 1);
    } else {
      setX(X - 1);
    }
  };

  return (
    <Auxi>
      {props.showLightbox ? (
        <Auxi>
          <Backdrop click={props.closeLightbox} />

          <div className={classes.ImgShow}>
            <img alt="LightboxImg" src={props.lightImgsArr[X]} />

            {props.lightImgsArr.length !== 1 ? (
              <Auxi>
                <button className={classes.GoLeft} onClick={goLeft}>
                  <i className={classes.ArrowLeft}></i>
                </button>
                <button className={classes.GoRight} onClick={goRight}>
                  <i className={classes.ArrowRight}></i>
                </button>
              </Auxi>
            ) : null}
          </div>
        </Auxi>
      ) : null}
    </Auxi>
  );
};

export default Lightbox;
