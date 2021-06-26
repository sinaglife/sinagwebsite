import React, {useState} from 'react'
import {removeProductFromBasket, addProductToBasket} from "../../redux/basket/basket.actions"
import Quantity from '../store/product/components/Quantity'
import Button from "../../components/UI/button/Button"

import classes from "./Basket.module.scss"

const BasketProduct = ({data, dispatch}) => {
    const productQuantity = data?.quantity;
    const productSize = data?.size
    const [quantity, setQuantity] = useState(productQuantity)

    const handleQuantityChange = (e)=>{
        let amount = parseInt(e.target.value)
        
        if(amount > quantity){
            dispatch(addProductToBasket(data, 1))
            setQuantity(quantity + 1)
        }else if(amount < quantity ){
            dispatch(removeProductFromBasket(data))
            setQuantity(quantity - 1)
        }
       
    }

    const removeItemFromBasket = (data)=>{
        dispatch(removeProductFromBasket(data))
        if(quantity > 1){
            setQuantity(quantity - 1)
        }else{
            setQuantity(1)
        }
    }

    const handleSubmit = ()=>{    
       
    }

    console.log("basket",data)
    return (
        <div className={classes.basketProduct}>
            <div className={classes.product__container}>
               <div className={classes.basket__product__header}> <h2>Producto</h2> </div>
                <div className={classes.main__container}>
                    <div className={classes.left__container}>
                        <img src={data?.images[0].src} />
                    </div>
                    <div className={classes.right__container}>
                        <div>
                            <h3>{data?.name}</h3>
                            <p>Talla:{productSize}</p>
                        </div>
                        <div className={classes.right__bottom}>
                            <input type="checkbox"/>
                            Envolver para regalo
                        </div>
                    </div>
              </div>
            </div>
            <div className={classes.amount__container}>
                <div className={classes.basket__product__header}> <h2>Cantidad</h2> </div>
                   <div className={classes.quantity__container}>
                        <div className={classes.quantity__component}>
                            <Quantity 
                            id={data?.id}
                            productQuantity={productQuantity}
                            quantity={quantity}
                            setQuantity={setQuantity}
                            handleChange={handleQuantityChange}
                            handleSubmit={handleSubmit}
                            />
                        </div>
                    </div>
            </div>       
            <div className={classes.price__container}>
                <div className={classes.basket__product__header}> <h2>Precio</h2> </div>
                        <div className={classes.product__price}>
                            {data?.price}€
                        </div>
                </div>
            <div className={classes.delete__container}>
                <div  className={classes.basket__product__header}><h2><br/></h2></div>
                    <div className={classes.basket__delete}>
                        <Button
                            onClick={()=> removeItemFromBasket(data)}
                            className={classes.whatsapp}
                            icon="delete"
                            color="black"
                            size="small"
                            padding="noPadding"
                        />
                    </div>
                </div>
        </div>
    )
}

export default BasketProduct
