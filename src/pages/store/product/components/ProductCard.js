import React from 'react'
import {addProductToBasket} from "../../../../redux/basket/basket.actions"
import { connect } from 'react-redux'
import classes from "./ProductCard.module.scss";

const ProductCard = ({data, selectedImg, addProductToBasket}) => {

    const src=data.acf.product_image1.url
    const alt=data.acf.product_image1.alt
    const title=data.acf.product_title
    const price=data.acf.product_price
 
  const x = 1;
    return (
        <div className={classes.productCard} >
            <div className={classes.productCard__hoovered}>
                <h3 className={classes.productCard__more__info} onClick={selectedImg}>Mas info</h3>
            </div>       
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
                        <p className={classes.productCard__price}>{price}€</p>
                        <button onClick={()=>addProductToBasket(data, x)} className={classes.shoppingButton}>
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        addProductToBasket: (item, qty)=> dispatch(addProductToBasket(item, qty))
    }
};
export default connect(null, mapDispatchToProps)(ProductCard)