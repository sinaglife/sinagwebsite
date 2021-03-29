import React, {useState, useEffect} from 'react'
import BasketProduct from "./BasketProduct"
import { useSelector, useDispatch} from "react-redux"
import {getBasketTotal} from "../../utils/basket.utils"
import classes from "./MainBasket.module.scss"

const BasketResume = ()=>{
    const basket = useSelector(state => state.basket.basketItems)
    const [subTotal, setSubTotal]= useState(0)
    const delivery = 6.00;
    const total = subTotal + delivery

    useEffect(() => {
        setSubTotal(getBasketTotal(basket))  
    }, [basket])

    return(
        <>
            {
                basket.length > 0 &&
                <div className={classes.basket__resume}>
                <div className={classes.resume__top}>
                <h3>Cupones</h3>
                <div className={classes.introduce__cupon}>
                    <input type="text" name="cupon" placeholder="introduce tu cupon"/>
                    <button>Aplicar</button>
                </div>
            </div>
            <div className={classes.resume__body}>
                <div className={classes.container}>
                    <h3>Subtotal:</h3>
                    <p>{subTotal}$</p>
                </div>
                <div className={classes.container}>
                    <h3>Gastos de envio:</h3>
                    <p>{delivery}$</p>
                </div>
                <div className={classes.container}>
                    <h3>Total:</h3>
                    <p>{total}$</p>
                </div>
            </div>
            <div className={classes.resume__bottom}>
                <button>Tramitar Compra</button>
                <div className={classes.keep__shopping}>
                    <button>Continuar Comprando</button>
                    <button>Vaciar cesta</button>
                </div>
            </div> 
            </div>
            
            }
           </> 
    )
}


const MainBasket = () => {
    const basket = useSelector(state => state.basket.basketItems)
    const dispatch = useDispatch()
    return (
        <div className={classes.mainBasket}>
           <div className={classes.mainBasket__products__container}>
            <h1 className={classes.basket__title}>Cesta</h1>
                <div>
                    {
                        basket.length > 0 ?
                        basket.map((item, index)=> (
                            <BasketProduct
                            dispatch={dispatch}
                            key={index}
                            data={item}
                            />
                        ))
                        :
                        <span>Cesta Vacia</span>   
                    }
                    
                </div>
               
            
           </div>
           <div className={classes.mainBasket__resume}>
                <BasketResume/>
           </div>
        </div>
    )
}


export default MainBasket
