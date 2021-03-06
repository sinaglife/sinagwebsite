import React from 'react'
import classes from './footer_choices.module.scss';

const PreguntasFrecuentes = () => {
    return (
        <div className={classes.footer_choices}>
            <h2>PREGUNTAS FRECUENTES:</h2>
            
            <h3>¿Cuáles son las formas de pago?</h3>
            <p>
            Cualquier compra de nuestra tienda online se puede pagar por 
            tarjeta de crédito/débito Paypal.
            </p>

            <p>
                <span>Mi tarjeta me da un error y no puedo finalizar el pago:</span>  
                La mayoría de transacciones denegadas son causadas por los límites de las tarjetas. 
                Consulta con tu entidad bancaria para poder subir el límite diario, semanal o mensual. 
                El segundo fallo  más común es intentar hacer el pago con un navegador muy antiguo o 
                desactualizado. Las pasarelas de pago bancarias requieren un navegador actualizado para 
                mantener tus datos seguros. Intenta hacer la compra desde otro navegador actualizado.
            </p>

            <h3>¿Me puedo fiar de dar los datos de mi tarjeta?</h3>
            <p>
            Desde Sinag Life no tenemos acceso a tus datos bancarios. Al entrar en el
            proceso de pago  te redireccionamos a la pasarela segura de <a href="https://stripe.com/es">STRIPE.</a> Tus datos son
            totalmente invisibles para nosotros. Una vez realizado el pago, es STRIPE
            el que nos da la
            confirmación instantánea de que el pago se ha tramitado correctamente.
            </p>

            <h3>Si pago por PayPal, me aparece una comisión ¿Cuál es el motivo?</h3>
            <p>
            Paypal cobra una comisión a los establecimientos muy superior al de las tarjetas
            de crédito. 
            Recuerda que puedes evitar dicha cómision, usando otros medios de pago.
            </p>
            <h3>¿Los productos tienen garantía?</h3>
            <p>
            Si la pieza ha sido deteriorada por el uso normal, o por una modificación
            ajena a nuestra marca, SINAG no podrá cubrir dichas alteraciones. No obstante,
            para cualquier duda, estaremos encantados de ayudarte a través del correo electrónico:
            <a href="sinaglife@gmail.com">sinaglife@gmail.com</a>. Por otro parte si es por rotura de roller o complementos durante el
            envio, dispondrá de 30 días a partir de la fecha en la que ha recibido el producto para
            reclamar la garantía. El 80% de las piezas y artículos que vendemos son hechos a
            mano y por tanto, cumplen las legislaciones españolas en cuanto garantía.
            </p>
            <h3>¿Qué se debe hacer en caso de recibir un producto defectuoso?</h3> 
            <p>
            En el caso excepcional de que reciba un producto con algún defecto de fabricación, por favor,
            lea con atención nuestro apartado Políticas de devoluciones, y si le quedara alguna duda, 
            póngase en contacto con nosotros con la mayor celeridad posible al correo electrónico: sinaglife@gmail.com.
            </p>
        </div>
    )
}

export default PreguntasFrecuentes
