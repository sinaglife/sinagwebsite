import React from 'react'
import classes from './Conocenos.module.scss';
import jhose from "./jhose1.jpeg";
import dani from "./dani1.jpeg";
import daniyjhose from "./jhosedani.jpg"


const Conocenos = () => {
    return (
        <div className={classes.conocenos}>
            <div className={classes.title__container}>
                <h1>Conòcenos</h1>
                <img  src={daniyjhose}/>
                <p>SINAG,  del tagalo “Rayo de luz” representa la conexión, espiritualidad y el sentir.
                    Porque basta con un rayo de luz, para despejar cualquier oscuridad. 
                    Nace de un pequeño pero gran sueño, donde aprovechamos lo brindado por la naturaleza, para crear piezas personalizadas y rendirle homenaje,  pero sobre todo para sentirnos vivos.
                </p>
            </div>
            <div className={classes.text__container}>
                <img src={jhose}/>
                <p>Representamos una marca que ofrece a cada cliente un producto especial de alta calidad e innovador, 
                    donde se sientan identificados con su estilo,
                    respetando la naturaleza y reutilizando lo que ella nos proporciona, inspirándonos en crear piezas exclusivas.
                </p>
            </div>
            <div className={classes.text__container}>
                <p>Somos una marca líder en tendencias de minerales,  mantenemos un estilo flexible y cómodo para nuestro público,
                    caracterizandonos con cualidades únicas de empresa,  
                    garantizando productos actualizados, diversos y originales. Para así llegar a todas las personas y distribuidores a nivel mundial.
                </p>
                <img src={dani}/>
            </div>
        </div>
    )
}

export default Conocenos
