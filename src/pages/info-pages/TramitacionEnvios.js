import React from 'react'
import classes from './footer_choices.module.scss';

const TramitacionEnvios = () => {

    return (
        <div className={classes.footer_choices}>
            <h2 >TRAMITACIÓN DE ENVÍOS:</h2>
            
            <h3>¿Cuál es el pedido mínimo para no pagar envio?</h3>
            <p>
            Todas las compras superiores a 40€ son totalmente gratuitas. 
            </p>
                <h3>¿Qué compañía de transporte se encarga de realizar nuestros envíos? </h3>
                <p>
                La empresa <a href="https://www.correos.es/es/es/particulares">CORREOS</a> se encargará de que el cliente reciba su pedido en perfecto estado.
                </p>
                <h3>¿Puede enviarse el pedido a otra dirección o persona?</h3>
                <p>
                Por supuesto. El usuario podrá
                colocar la dirección de correo postal que sea de su preferencia. Así, si quiere realizar un
                regalo, enviará ese pedido a la dirección que haya marcado en el proceso de compra.
                Marque la casilla de *regalo* y SINAG LIFE se encargará de que el producto vaya en una
                caja – regalo especial por un coste de 0,99€.
                </p>
                <h3>¿Puede otra persona recoger mi paquete?</h3>
                <p>
                Sin problema, solo debe llevar cualquier
                documento de identificación del destinatario (DNI, NIE, Pasaporte o carnet de conducir)
                </p> 


                <h3>¿Cuáles son los precios de envío?</h3>
                <ul>
                    <li>España, Península y Baleares 4,70€ (3 - 5 días hábiles)</li>
                    <li>Europa 6,90€ (7 - 10 días hábiles)</li>
                    <li>Express 8,92€ (24 horas) Necesito tener mi pedido en 24 horas ¿Ofrecéis el
                        servicio? Por supuesto, puedes elegir la opción de ENVÍO EXPRESS, servicio que
                        tiene un valor de 8,92€ SÓLO dentro de ESPAÑA.
                    </li>
                </ul>
                <h3>¿Cuánto tardará mi compra en llegar?</h3>
                <p>
                Una vez realizada la compra procedemos a enviar el pedido. El tiempo estimado de entrega
                dependerá la zona de España o del continente y los días hábiles de la empresa de envío.
                Aproximadamente de 3 a 5 días hábiles dentro de España y de 7 a 10 días hábiles en la
                comunidad Europea, tomando en cuenta que aún no contamos con el servicio de envíos al
                continente Americano.
                </p>  
                <h3>Aun no me llega mi paquete en los días programados, ¿qué hago?</h3>
                <p>
                Como todas las tiendas online, una vez que realices tu compra te enviaremos la
                confirmación de la misma, posteriormente, la empresa de envíos le enviará a su correo un
                número de seguimiento. Si no recibe el paquete en el tiempo estimado, está obligado a
                ponerse en contacto con la empresa de envío CORREOS e informarles con su número de
                seguimiento la incidencia que esté experimentando en ese momento. Ellos deberían poder
                ayudarle con cualquier problema relacionado a su compra.
                Si aún no puede ubicar su paquete, contáctenos a sinaglife@gmail.com y haremos todo lo
                posible para ayudarle.    
                </p>          
        </div>
    )
}

export default TramitacionEnvios
