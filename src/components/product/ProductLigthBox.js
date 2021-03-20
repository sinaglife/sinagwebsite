import React, {useState} from 'react';
import PropTypes from "prop-types";
import Button from "../UI/button/Button";
import Backdrop from "../layout/Backdrop";
import FacebookButton from "../UI/social-media-buttons/FacebookButton"
import WhatsAppButton from "../UI/social-media-buttons/WhatsAppButton"
import { Link } from "@reach/router";

import classes from "./ProductLightBox.module.scss"


const ProductLigthBox = ({productData, src, alt, lightImgsArr, ...props})=> {
    
        const [x, setX] = useState(0);
        const productTitle = productData.title;
        const productPrice = productData.price;
        const productDesc = productData.descripcion;
        const productId = productData.id

        const goToBasketHandler = ()=> {
            console.log("go to the carrito")
        }

        const buyNowHandler = ()=>{
            console.log("buy now")
        }
   
        let lightImgArrLength = lightImgsArr.length;

        const goRight = ()=>{
            
            if(x === lightImgArrLength - 1){
                setX(0);
            }else{
                let newX = x + 1;
                setX(newX);
            }
        };
    
        const goLeft = ()=>{
           
            if(x === 0){
                setX(lightImgArrLength - 1);
            }else{
                setX(x - 1);
            }
        };

        const renderButtons = () => (
            <div className={classes.lightBox__main__img}>
                <button 
                className={classes.goLeft }
                onClick={goLeft} 
                >
                    <i className="fas fa-chevron-left"></i>
                </button>  
                    <img src={lightImgsArr[x]} alt={alt}/>
                <button
                className={classes.goRight}
                onClick={goRight} 
                >
                    <i className="fas fa-chevron-right"></i>
                </button>  
            </div>
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
                    <h3>{productTitle}</h3>
                    <p>{productDesc}</p>
                    <p className={classes.lightBox__right__price}>{productPrice}€</p>
                    <Link to={`/mosaico/productos/${productId}`}  >
                        <p className={classes.lightBox__more__info}>Mas info</p>
                    </Link>
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
    src: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    alt: PropTypes.string,
    description: PropTypes.string,
    lightImgsArr: PropTypes.arrayOf(PropTypes.string),
}

export default ProductLigthBox
