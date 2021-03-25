import React from 'react'
import Quantity from '../product/Quantity'
import Button from "../UI/button/Button"

import classes from "./Basket.module.scss"

const BasketProduct = ({title, src, talla}) => {
    return (
        <div className={classes.basketProduct}>
            <div className={classes.product__container}>
               <div className={classes.basket__product__header}> <h2>Producto</h2> </div>
                <div className={classes.main__container}>
                    <div className={classes.left__container}>
                        <img src={src} />
                    </div>
                    <div className={classes.right__container}>
                        <div>
                            <h3>{title}</h3>
                            <p>Talla:{talla}cm</p>
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
                            <Quantity/>
                        </div>
                   </div>
            </div>
            <div className={classes.delivery__container}>
            <div className={classes.basket__product__header}> <h2>Envio</h2> </div>
                    <div className={classes.delivery__content}>
                        <div className={classes.delivery__choices}>
                            <input type="checkbox"/>
                            Correo ordinario
                        </div>
                        <div className={classes.delivery__choices}>
                            <input type="checkbox"/>
                            Correo certificado
                        </div>
                        <div className={classes.delivery__choices}>
                            <input type="checkbox"/>
                            Punto de recogida Madrid.
                        </div>
                    </div>
                </div>
            <div className={classes.price__container}>
            <div className={classes.basket__product__header}> <h2>Precio</h2> </div>
                    <div className={classes.product__price}>
                        12:00$
                    </div>
            </div>
            <div className={classes.delete__container}>
                <div  className={classes.basket__product__header}><h2><br/></h2></div>
                    <div className={classes.basket__delete}>
                        <Button
                            className={classes.whatsapp}
                            icon="delete"
                            color="black"
                            size="medium"
                            padding="noPadding"
                        />
                    </div>
                </div>
        </div>
    )
}

export default BasketProduct