import React, {useState} from 'react';
import PropTypes from "prop-types";
import Button from "../../../../components/UI/button/Button";
import Backdrop from "../../../../components/Backdrop";
import FacebookButton from "../../../../components/UI/social-media-buttons/FacebookButton"
import WhatsAppButton from "../../../../components/UI/social-media-buttons/WhatsAppButton"
import {addProductToBasket} from "../../../../redux/basket/basket.actions"
import { useDispatch} from "react-redux"
import { Link } from "@reach/router";

import classes from "./ProductLightBox.module.scss"


const ProductLigthBox = ({productData, alt, lightImgsArr, close, ...props})=> {

        const dispatch = useDispatch()
        const [x, setX] = useState(0);
        const productTitle = productData.acf?.product_title;
        const productPrice = productData.acf?.product_price;
        const productDesc = productData.acf?.product_descripcion;
        const productId = productData.id

        const goToBasketHandler = (productData, x)=> {
            dispatch(addProductToBasket(productData, x));
            close();
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
                close={close}
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
                        <button onClick={()=>goToBasketHandler(productData,1)} >Agregar al carrito</button>
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
