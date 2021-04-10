import React, {useState, useEffect} from 'react'
import BasketProduct from "./BasketProduct"
import { useSelector, useDispatch} from "react-redux"
import {removeAllFromBasket} from "../../redux/basket/basket.actions"
import {getBasketTotal} from "../../utils/basket.utils"
import { Link } from "@reach/router";
import classes from "./MainBasket.module.scss"

const BasketResume = ()=>{
    const basket = useSelector(state => state.basket.basketItems)
    const dispatch = useDispatch()
    const [subTotal, setSubTotal]= useState(0)
    const delivery = subTotal < 40 ? 6.00 : null
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
                    <p>{subTotal}€</p>
                </div>
                <div className={classes.container}>
                    <h3>Gastos de envio:</h3>
                    {
                        subTotal >= 40 ?
                        <p>Gratis</p> :
                        <p>{delivery}€</p>
                    }
                </div>
                <div className={classes.container}>
                    <h3>Total:</h3>
                    <p>{total}€</p>
                </div>
            </div>
            <div className={classes.resume__bottom}>
                <button>Tramitar Compra</button>
                <div className={classes.keep__shopping}>
                    <button><Link style={{textDecoration: "none", color: "black"}} to="/tienda">Continuar Comprando</Link></button>
                    <button onClick={()=> dispatch(removeAllFromBasket())}>Vaciar cesta</button>
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
                        <div>
                            <h5>No tienes Productos en tu cesta</h5>
                             <Link style={{color: "black", fontSize: "1rem"}} to="/tienda">Seguir Comprando</Link>
                        </div>
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
