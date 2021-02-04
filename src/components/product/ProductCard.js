import React from 'react'
import classes from "./ProductCard.module.scss";

const ProductCard = ({src, alt, title, price, selectedImg}) => {
    return (
        <div className={classes.productCard} onClick={selectedImg}>
            <div className={classes.productCard__container}>
                <div className={classes.productCard__header}>
                    <img 
                      src={src}
                      alt={alt} 
                     />   
                </div>
                <div className={classes.productCard__content}>
                    <h3>{title}</h3>
                    <div className={classes.productCard__info}>
                        <p className={classes.productCard__price}>{price}$</p>
                        <button className={classes.shoppingButton}>
                           agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard