import React from 'react'
import {addProductToBasket} from "../../../../redux/basket/basket.actions"
import { connect } from 'react-redux'
import classes from "./ProductCard.module.scss";

const ProductCard = ({data, selectedImg, addProductToBasket}) => {

    const src=data.images[0].src
    const alt=data.images[0].alt
    const title=data.name
    const price=data.price
 
  const x = 1;
    return (
        <div className={classes.productCard} >
            <div className={classes.productCard__hoovered} onClick={selectedImg}>
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
                        <button onClick={()=>addProductToBasket(data, x)} 
                        className={classes.shoppingButton}
                        >
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