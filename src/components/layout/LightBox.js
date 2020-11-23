import React, {Fragment, useState} from 'react';
import classes from "./LightBox.module.scss";
import Backdrop from "./Backdrop";

const LightBox = (props)=> {

    const [x, setX] = useState(0);

    const goRight = ()=>{
        if(x === props.lightImgsArr.length - 1){
            setX(0);
        }else{
            let newX = x + 1;
            setX(newX);
        }
    };

    const goLeft = ()=>{
        if(x === 0){
            setX(props.lightImgsArr.length - 1);
        }else{
            setX(x - 1);
        }
    };

    return (
        <Fragment>
            {props.showLightbox ? (
                <Fragment>
                <Backdrop 
                close={props.closeLightbox}
                show={props.show}
                />
                <div className={classes.show__image}>
                    <img alt="LightboxImg" src={props.lightImgsArr[x]}/>
                {props.lightImgsArr.length !==1 ? (
                    <Fragment>
                      <button className={classes.goLeft} onClick={goLeft}>
                          <i className={classes.arrowLeft}></i>
                      </button>  
                      <button className={classes.goRight} onClick={goRight}>
                          <i className={classes.arrowRight}></i>
                      </button>  
                    </Fragment>
                ): null}
                </div>
                </Fragment>
            ) : null}
        </Fragment>   
    );
};

export default LightBox;