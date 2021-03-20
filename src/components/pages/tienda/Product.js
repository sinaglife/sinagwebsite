import React from 'react';
import { Link} from "@reach/router";
import classes from "./Product.module.scss";

const Product = ({productData}) => {
    return (
        <Link  to={`productos/${productData.id}`} >
            <div  className={classes.product__container} >
                <img src={productData.acf.product_image1.url} alt="" />
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