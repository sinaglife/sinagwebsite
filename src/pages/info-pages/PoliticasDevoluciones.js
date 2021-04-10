import React from 'react'
import classes from './footer_choices.module.scss';


const PoliticasDevoluciones = () => {
    
    return (

        <div className={classes.footer_choices}>
            <h2 > POLÍTICAS DE DEVOLUCIONES:</h2>
            <p> 
                El 80% de nuestros productos son fabricados a mano, 
                se crean según demanda del cliente, por lo que rogamos, 
                la comprobación exhaustiva de las medidas/tallas, iniciales y colores.
                En sinaglife.com queremos que nuestros clientes estén satisfechos
                con los productos comprados. Por ello, ofrecemos un plazo máximo
                de 15 días, a partir de la recepción del pedido para devolverlo o
                cambiarlo.
                Cualquier producto que se quiera cambiar o devolver, se tiene que
                hacer con el embalaje (sobre o caja recibido) y etiquetado original
                en las mejores condiciones posibles, empaquetado y protegido.
                Si no se cumplen las condiciones y existen manchas, rasgaduras,
                roturas, o llegan fuera del plazo establecido no serán aceptados
                por sinaglife.com. 
                En ningún caso el cliente debe devolver la mercancía a CORREOS
                sin notificación previa a sinaglife.com. 
                Para devolver cualquier artículo de nuestra tienda online contactenos
                al correo de sinaglife@gmail.com o al 625 572 710.
            </p>
            <h3>A continuación le informamos cómo proceder en cada caso:</h3>
            <ol >
                <li>Producto dañado durante el envío:
                Al recibir el producto debe revisarlo. Si comprueba que ha sido dañado durante el envío, deberá ponerse en contacto con nosotros 
                de forma inmediata a través de nuestras vías de contacto.
                </li>
                <li>
                 Producto defectuoso:
                Para la devolución por producto defectuoso, primero habrá que constatar el defecto de la pieza mediante el envío de fotos en las que se compruebe que el producto está dañado o deteriorado.
                 A partir de aquí, todos los gastos ocasionados los asumirá <strong>SINAGLIFE</strong>.
                </li>
                <li>
                 Garantía de Roller Facial:
                Nuestros Roller Faciales tienen una garantía de 30 días, luego de la obtención del mismo. En esta garantía no se incluyen los daños ocasionadas por negligencias, golpes, caídas, uso o manipulaciones 
                indebidas por parte del cliente. De este modo la garantía perderá su valor.
                </li>
                <li>
                 Producto incorrecto:
                En el caso de que nos hayamos equivocado en el envío del producto, dispone de 14 días naturales a partir de la fecha
                de recepción del pedido para devolvernos el mismo.
                </li>
            </ol>
            <h3>¿Cuáles son los gastos de devolución?</h3>
            <ol >
                 <li>
                 Si nos devuelve un producto cuyo origen de daño sea durante el envío o por un error en el mismo,
                 nosotros asumimos los gastos de devolución.
                 </li>
                 <li>
                 Si la devolución es porque el producto no es de su agrado y no desea otro producto a cambio. El gasto de envío correrá por su cuenta y el dinero será devuelto en cuanto
                recibamos el producto de vuelta y comprobemos que está en buen estado.
                 </li>
                 <li>
                 Si el cliente ha recibido una pulsera, tobillera, colgante o anillo con la medida/talla incorrecta 
                 y ha sido un error por su parte, el cliente asumirá los gastos de envío.
                 </li>
            </ol>
        </div>
    )
}

export default PoliticasDevoluciones
