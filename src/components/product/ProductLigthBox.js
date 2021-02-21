import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import Button from "../UI/button/Button";
import FilterBySize from "./FilterBySize";
import Backdrop from "../layout/Backdrop";
import FacebookButton from "../UI/social-media-buttons/FacebookButton"
import WhatsAppButton from "../UI/social-media-buttons/WhatsAppButton"

import classes from "./ProductLightBox.module.scss"


const ProductLigthBox = ({src, title, price, alt, description, lightImgsArr, ...props})=> {
    
        const [x, setX] = useState(0);
        const [sizeChoice, setSizeChoice] = useState("");

        const goToBasketHandler = ()=> {
            console.log("go to the carrito")
        }

        const buyNowHandler = ()=>{
            console.log("buy now")
        }
   
        let lightImgArrLength = lightImgsArr.length;

        useEffect(() => {
            if(title.includes("Colgante"))
            setSizeChoice("colgante")
            else if(title.includes("Anillo"))
            setSizeChoice("anillo")
            else if(title.includes("Pulsera"))
            setSizeChoice("pulsera")
            else 
            setSizeChoice("")
        }, [title])


        const goRight = ()=>{
            
            if(x === lightImgsArr.length - 1){
                setX(0);
            }else{
                let newX = x + 1;
                setX(newX);
            }
        };
    
        const goLeft = ()=>{
           
            if(x === 0){
                setX(lightImgsArr.length - 1);
            }else{
                setX(x - 1);
            }
        };

        const renderButtons = () => (
            <>
            <button 
            className={classes.goLeft }
            onClick={goLeft} 
            >
                <i class="fas fa-chevron-left"></i>
            </button>  
                <img src={lightImgsArr[x]} alt={alt}/>
            <button
            className={classes.goRight}
            onClick={goRight} 
            >
                <i class="fas fa-chevron-right"></i>
            </button>  
            </>
        );
        const navigationButtons =  lightImgArrLength > 1
        ? renderButtons()
        : (
            <img src={lightImgsArr[x]} alt={alt}/>
        )
    
    return (
        <>
            <Backdrop 
                close={props.close}
                show={props.show}
            />
            <div className={classes.lightBox}>
                <div className={ classes.lightBox__left}>
                   {
                        navigationButtons
                   }
                    <div className={classes.lightBox__left__share}>
                        <p>Compartir</p>
                        <div className={classes.share__icons}>
                            <FacebookButton/>
                            <Button
                                icon="insta"
                                color="black"
                                size="medium"
                                padding="noPadding"
                            /> 
                            <WhatsAppButton/>       
                        </div>
                    </div>
                </div>
                <div className={classes.lightBox__right}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p className={classes.lightBox__right__price}>{price}$</p>
                    
                   {
                       sizeChoice !== "" 
                       ? 
                       <div className={classes.lightBox__size__choice}>
                            <strong>Tallas:</strong> 
                            <FilterBySize
                            sizeChoice={sizeChoice}
                            />
                        </div>

                        : null
                   }
                    
                    <div className={classes.lightBox__right__buttons}>
                        <button onClick={goToBasketHandler} >Agregar al carrito</button>
                        <button onClick={buyNowHandler} >Comprar ya</button>
                    </div>    
                </div>
            </div>
        </>
    )
}

ProductLigthBox.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    alt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    lightImgsArr: PropTypes.arrayOf(PropTypes.string),
}

export default ProductLigthBox
