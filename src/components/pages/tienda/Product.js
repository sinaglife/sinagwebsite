import React, { Fragment} from 'react';
import classes from "./Product.module.scss";




const Product = (props) => {

    return (
        <Fragment>
            <div className={classes.productContainer} onClick={props.onClick}>
                <div className={classes.card} >
                    <img src={props.url} alt="" />
                    <div className={classes.card_body}>
                        <h5 className={classes.card_title}>{props.title}</h5>
                        <p className={classes.card_text}>{props.desc}</p>
                        <a className={classes.card_price} href="#">{props.price}€</a>
                    </div>
                </div>
            </div>
    </Fragment>
    )
}

export default Product;