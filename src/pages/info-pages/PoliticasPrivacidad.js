import React from 'react'
import { Link } from "react-router-dom";
import classes from './footer_choices.module.scss';

const PoliticasPrivacidad = () => {
    return (
        <div className={classes.footer_choices}>
            <h2>POLÍTICAS DE PRIVACIDAD</h2>
            <h3>SinagLife propone este sitio web:</h3>
            <p>
                Incluyendo toda la información, las herramientas y los servicios a usted (usuario)
                 a la condición expresa que acepte la totalidad de las modalidades, condiciones, políticas
                y avisos
                contenidos en el presente documento.
            </p>
            <p>
                Se prohíbe el uso de nuestros productos a fines ilegales o no autorizados. Tampoco
                se le permite en el marco del uso de nuestro servicio, infringir las leyes de su
                jurisdicción (incluyendo pero no limitándose a las leyes relativas al derecho de autor).
            </p>
            <p>
                Cuando navegue en nuestra tienda, recibimos de forma automática la dirección de protocolo
                 Internet (dirección IP) de su ordenador,
                Realizando a su vez marketing por correo electrónico, con su consentimiento podremos 
                enviarle correos acerca de nuestra tienda y/o productos.
            </p>

           <h3>Consentimiento.</h3>
            <p>
                Si le pedimos proporcionarnos sus datos personales por alguna otra razón, para nuestro
                servicio de marketing por ejemplo, le pediremos directamente su
                consentimiento explícito, o le ofreceremos la posibilidad de decir no.
            </p>
            <h3>¿Cómo puedo quitarles mi consentimiento?</h3>
            <p>
                Si después de habernos dado su consentimiento, cambia de idea y ya no está de acuerdo con
                el hecho de que podamos contactarte o recolectar sus datos, puede darse de baja en el siguiente enlace <Link to="/darme-de-baja">darse de baja</Link>.
                Para cualquier duda escribirnos a: <a href="mailto:soporte@sinaglife.com">soporte@sinaglife.com</a>.
            </p>
        </div>
    )
}

export default PoliticasPrivacidad
