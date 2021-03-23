import React, {useState} from 'react';
import { Link} from "@reach/router";
import classes from "./Product.module.scss";

const Product = ({productData}) => {
    const [imgToShow,setImgToShow] = useState(productData.acf.product_image1.url)
    const imgArray = [
        productData.acf.product_image1.url,
        productData.acf.product_image2.url
    ]
    const getImgToShow = ()=> {
        if(imgArray[1]){
            if(imgToShow === imgArray[0]){
                setImgToShow(imgArray[1])
            }else{
                setImgToShow(imgArray[0])
            }
        }
    }
    return (
        <Link style={{ textDecoration: "none", color: "black" }}  to={`productos/${productData.id}`} >
            <div  className={classes.product__container} >
                <img onMouseEnter={getImgToShow}
                    onMouseLeave={getImgToShow}
                    src={imgToShow} alt="" 
                />
                <div className={classes.card__body}>
                    <h2 className={classes.card__title}>{productData.acf.product_title}</h2>
                    <p className={classes.card__price} >{productData.acf.product_price}€</p>
                </div>
            </div>
        </Link>
    )
}

export default Product;


/**
 * 
 * 
   

 */