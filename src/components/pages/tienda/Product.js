import React, { Fragment} from 'react';
import classes from "./Product.module.scss";

const Product = (props) => {

    return (
            <div className={classes.product__container} onClick={props.onClick}>
                <img src={props.url} alt="" />
                <div className={classes.card__body}>
                    <h2 className={classes.card__title}>{props.title}</h2>
                    <a className={classes.card__price} href="/">{props.price}€</a>
                </div>
            </div>
    )
}

export default Product;