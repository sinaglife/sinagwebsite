import React from 'react'
import Button from "../UI/button/Button";
import classes from "./ProductCard.module.scss";

const ProductCard = ({src, alt, title, price}) => {
    return (
        <div className={classes.productCard}>
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
                           Add to car
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard


{/*
    <Button
    icon="shoppingCar"
    color="black"
    size="medium"
    padding="noPadding"   
/>*/
}