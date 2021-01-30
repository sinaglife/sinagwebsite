import React from 'react'
import classes from './footer_choices.module.scss';

const PoliticaCookies = () => {

    return (
        <div className={classes.footer_choices}>
            <h2> POLÍTICAS DE COOKIES</h2>
            <p>
            La presente política de cookies tiene por finalidad informarle de manera clara y 
            precisa sobre las cookies que se utilizan en la página web de Sinag Life.
            </p>
            <h3>¿Qué son las cookies?</h3>
            <p>
                Una cookie es un pequeño fragmento de texto que los sitios web que visita envían al
                navegador y que permite que el sitio web recuerde información sobre su visita, como su
                idioma preferido y otras opciones, con el fin de facilitar su próxima visita y hacer que
                el sitio le resulte más útil. Las cookies desempeñan un papel muy importante y contribuyen
                a tener una mejor experiencia de navegación para el usuario.
            </p>
            <h3>Tipos de cookies:</h3>
            <p>
                Según quién sea la entidad que gestione el dominio, desde donde se envían las cookies y se
                traten los datos que se obtengan, se pueden distinguir dos tipos: cookies propias y cookies de
                terceros. Existe también una segunda clasificación según el plazo de tiempo que permanecen almacenadas
                en el navegador del cliente, pudiendo tratarse de cookies de sesión o cookies persistentes.
                Por último, existe otra clasificación con cinco tipos de cookies según la finalidad para la
                que se traten los datos obtenidos: cookies técnicas, cookies de personalización, cookies de análisis,
                cookies publicitarias y cookies de publicidad comportamental.
                Para más información a este respecto puede consultar la Guía sobre el uso de las cookies de la Agencia
                Española de Protección de Datos <a href="https://www.aepd.es/es"><strong>AEPD</strong></a>   
            </p>
            <h3>Cookies utilizadas en la web:</h3>
            <p>
            A continuación se identifican las cookies que están siendo utilizadas en esta web, así como su tipología y función:
            La página web de Sinag Life  utiliza Google Analytics, un servicio de analítica web desarrollada por Google, que permite la medición y análisis de la navegación en las páginas web. En su navegador podrá observar cookies de este servicio. Según la tipología anterior se trata de cookies propias, de sesión y de análisis.
            A través de la analítica web se obtiene información relativa al número de usuarios que acceden a la web, el número de páginas vistas, la frecuencia y repetición de las visitas, su duración, el navegador utilizado, el operador que presta el servicio, el idioma, el terminal que utiliza y la ciudad a la que está asignada su dirección IP. Información que posibilita un mejor y más apropiado servicio por parte de este portal.
            Para garantizar el anonimato, Google convertirá su información en anónima truncando la dirección IP antes de almacenarla, de forma que Google Analytics no se usa para localizar o recabar información personal identificable de los visitantes del sitio.
            Google solo podrá enviar la información recabada por Google Analytics a terceros cuanto esté legalmente obligado a ello. Con arreglo a las condiciones de prestación del servicio de Google Analytics, Google no asociará su dirección IP a ningún otro dato conservado por Google.
            </p>
        </div>
    )
}

export default PoliticaCookies
