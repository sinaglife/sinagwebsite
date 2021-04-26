import React from 'react';
import classes from "./Home.module.scss";
import Slider from "./components/Slider";
import banner from "../../assets/images/sinagBanner.jpg";
import blog from "../../assets/images/homeBlog_img.jpg";
import mala from "../../assets/images/home/japamala-image.jpg";
import taller from "../../assets/images/home/taller-espiritualidad-img.jpg";
import piedras from "../../assets/images/piedrasFondo.jpg"
import {Parallax} from "react-parallax";
import Mosaic from "./components/Mosaic";
import SliderComponent from './components/SliderComponent';


const Home = ({data})=> {
    return (
        <div className={classes.home}>
                <SliderComponent/>
            <div className={classes.home__slogan}>
                <h2>"Inspirados En Crear Desde El Alma."</h2> 
            </div>
            <Parallax   bgImage={piedras} strength={1200}  bgClassName={classes.ParaImg} blur={0}>
                {data && <Mosaic data={data}/>}
            </Parallax>
            <div className={classes.home__banner}>
                <img src={banner} alt="envios a toda europa"/>
            </div>
            <div className={classes.home__mala}>
                    <p><span>¿POR QUÉ TIENE 108 CUENTAS?</span> Hinduista: El mala posee 108 cuentas, 
                    es un número sagrado. Hay 108 letras en el alfabeto sánscrito. El diámetro del Sol 
                    es aproximadamente 108 veces más grande que el diámetro de la Tierra
                    <a  href="/mala">Saber más</a>
                    
                    </p>
                    <img src={mala} alt="blog" />
            </div>
            <div className={classes.home__blog}>
                <img src={blog} alt="blog" />
                <p><strong>LAS PIEDRAS Y SU MAGIA:</strong> Cada piedra tiene
                    un potencial desconocido, es el regalo que
                    nos da la naturaleza de tan diversas formas y
                    colores, llegan a nuestras vidas para sanar algún
                    aspecto de nosotros.
                    <a  href="/blog">Mas info</a>
                </p>
            </div>
            <div className={classes.home__taller}>
                <img src={taller} alt="" />
                <button className={classes.home__taller__btn}>Diseña aquí</button>
                <button className={classes.home__espiritualidad__btn}>Meditemos</button>
            </div>
                
        </div>
    )
}

export default Home;