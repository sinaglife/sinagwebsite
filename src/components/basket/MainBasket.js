import React from 'react'
import BasketProduct from "./BasketProduct"
import piedras from "../../assets/images/piedras1.jpg"
import classes from "./MainBasket.module.scss"

const BasketResume = ()=>{
    return(
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
                    <p>12:00$</p>
                </div>
                <div className={classes.container}>
                    <h3>Gastos de envio:</h3>
                    <p>6:00$</p>
                </div>
                <div className={classes.container}>
                    <h3>Total:</h3>
                    <p>18:00$</p>
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
    )
}


const MainBasket = () => {
    return (
        <div className={classes.mainBasket}>
           <div className={classes.mainBasket__products__container}>
            <h1 className={classes.basket__title}>Cesta</h1>
                <div>
                    <BasketProduct
                    src={piedras}
                    title="collar vergatario"
                    talla={32}/>
                </div>
                <div>
                    <BasketProduct
                    src={piedras}
                    title="collar vergatario"
                    talla={32}/>
                </div>
                <div>
                    <BasketProduct
                    src={piedras}
                    title="collar vergatario"
                    talla={32}/>
                </div>
                <div>
                    <BasketProduct
                    src={piedras}
                    title="collar vergatario"
                    talla={32}/>
                </div>
            
           </div>
           <div className={classes.mainBasket__resume}>
                <BasketResume/>
           </div>
        </div>
    )
}

export default MainBasket
