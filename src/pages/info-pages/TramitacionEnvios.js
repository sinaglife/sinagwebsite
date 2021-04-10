import React from 'react'
import classes from './footer_choices.module.scss';

const TramitacionEnvios = () => {

    return (
        <div className={classes.footer_choices}>
            <h2 >TRAMITACIÓN DE ENVÍOS:</h2>
            
            <h3>¿Puede enviarse el pedido a otra dirección o persona?</h3>
            <p>
                Por supuesto. El usuario podrá colocar la dirección de correo postal que sea de su 
                preferencia. Si quiere realizar un regalo, SINAG LIFE enviará el pedido a la dirección que el
                 usuario haya elegido en el proceso de compra (indicando que se trata de un regalo).
                SINAG LIFE se encargará de que el producto vaya en una caja – regalo especial. 
            </p>
                <h3>¿Qué compañía de transporte se encarga de realizar nuestros envíos? </h3>
                <p>
                La empresa CORREOS se encargará de que el cliente reciba su pedido en perfecto estado, en el tiempo estipulado por la compañía.
                ¿Cuáles son los plazos de entrega?
                El coste del envio a cualquier punto de la Península es de 2,99 € + IVA.
                El coste del envio a Baleares es de 4,99 € + IVA.
                El coste del envio a Canarias es de 7,99 € + IVA.
                (Si el pedido incluye piezas de joyas grabadas el pedido podría tardar de 3 a 4 días hábiles más).
                </p>
                <h3>¿Cuál es el pedido mínimo para no pagar envio?</h3>
                <p>
                     Todas las compras superiores a 40€,  son gratuitas única y exclusivamente para Europa.
                </p>
                <h3>¿Cuánto tardará mi compra en llegar?</h3>
                <p>
                    Una vez realizada la compra, procedemos a enviar el pedido, esto dependerá de la zona de españa o del continente, Aproximadamente 3 a 4 días dentro de españa y de 7 a 15 Días en la comunidad europea.
                    En el continente Americano suele tardar 30 días.
                </p> 


                <h3>Necesito tener mi pedido mañana por la mañana ¿Ofrecéis el servicio?</h3>
                <p>
                También puedes elegir la opción de MRW12, pero este servicio tiene un precio entre
                 15,95€ y 19,95 en función del peso del envío.
                </p>
                <h3>Aun no me llega mi paquete en los días programados, ¿qué hago?</h3>
                <p>
                Como todas las tiendas online, una vez que enviemos tus artículos te enviaremos un número de seguimiento. Posteriormente, está obligado a ponerse en contacto con la empresa de envío e informarles con su número de seguimiento y cualquier problema que esté experimentando. Ellos deberían poder ayudarlo con cualquier problema relacionado con su compra. Si aún no puede ubicar su paquete, contáctenos a sinaglife@gmail.com y haremos todo lo posible para ayudarle.

                </p>            
        </div>
    )
}

export default TramitacionEnvios
