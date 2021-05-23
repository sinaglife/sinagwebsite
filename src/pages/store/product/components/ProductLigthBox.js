import React, {useState} from 'react';
import PropTypes from "prop-types";
import Backdrop from "../../../../components/Backdrop";
import {WhatsappShareButton, FacebookShareButton} from "react-share";
import {addProductToBasket} from "../../../../redux/basket/basket.actions"
import { useDispatch} from "react-redux"
import {Link, useLocation} from "react-router-dom";
import SocialMediaBtn from "../../../../components/UI/social-media-buttons/SocialMediaBtn"

import classes from "./ProductLightBox.module.scss"


const ProductLigthBox = ({productData, close, ...props})=> {

        const location = useLocation()
        console.log(location)
        const dispatch = useDispatch()
        const [x, setX] = useState(0);
        const [productImg, setProductImg] = useState(productData.images.map((item)=>(
           {
            src: item.src,
            alt: item.alt
           }
        )))
        const productTitle = productData.name;
        const productPrice = productData.price;
        const productId = productData.id

        const goToBasketHandler = (productData, x)=> {
            dispatch(addProductToBasket(productData, x));
            close();
        }
       

        const buyNowHandler = (subtotal)=>{
            localStorage.setItem("subtotal", String(subtotal))
        }
   
        let productImgLength = productImg?.length;

        const goRight = ()=>{
            
            if(x === productImgLength - 1){
                setX(0);
            }else{
                let newX = x + 1;
                setX(newX);
            }
        };
    
        const goLeft = ()=>{
           
            if(x === 0){
                setX(productImgLength - 1);
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
                    <img src={productImg[x].src} alt={productImg[x].alt}/>
                <button
                className={classes.goRight}
                onClick={goRight} 
                >
                    <i className="fas fa-chevron-right"></i>
                </button>  
            </div>
        );
        const navigationButtons =  productImgLength > 1
        ? renderButtons()
        : (
            <img src={productImg[x].src} alt={productImg[x].alt}/>
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
                            <SocialMediaBtn
                            Component={FacebookShareButton}
                            url={location.pathname}
                            quote="Inspirados en crear desde el alma"
                            hashtag="#sinaglife"
                            icon="facebook"
                            color="black"
                            size="small"
                            />
                            <SocialMediaBtn
                            Component={WhatsappShareButton}
                            url={location.pathname}
                            quote="Inspirados en crear desde el alma"
                            hashtag="#sinaglife"
                            icon="whatsapp"
                            color="black"
                            size="small"
                            />
                            
                        </div>
                    </div>
                </div>
                <div className={classes.lightBox__right}>
                    <h3>{productTitle}</h3>
                    <p className={classes.lightBox__right__price}>{productPrice}€</p>
                    <Link to={{
                        pathname: `/productos/${productId}`,
                        state: productData
                    }}  >
                        <p className={classes.lightBox__more__info}>Mas info</p>
                    </Link>
                    <div className={classes.lightBox__right__buttons}>
                        <button onClick={()=>goToBasketHandler(productData,1)} >Agregar al carrito</button>
                        <button onClick={()=>buyNowHandler(Number(productPrice))} >
                            <Link style={{textDecoration: "none", color: "black"}} to="/checkout">
                                Comprar ya
                            </Link>
                        </button>
                        
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
    productImg: PropTypes.arrayOf(PropTypes.string),
}


export default ProductLigthBox
