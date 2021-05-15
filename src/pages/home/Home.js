import React from 'react';
import classes from "./Home.module.scss";
import banner from "../../assets/images/sinagBanner.jpg";
import blog from "../../assets/images/homeBlog_img.jpg";
import desktopMalaImg from "../../assets/images/home/desktop-mala-image.jpg";
import mobileMalaImg from "../../assets/images/home/mobile-mala-image.jpg";
import desktopTallerImg from "../../assets/images/home/desktop-taller-image.jpg";
import mobileTallerImg from "../../assets/images/home/mobile-taller-image.jpg";
import desktopEspiritualidadImg from "../../assets/images/home/desktop-espiritualidad-image.jpg";
import mobileEspiritualidadImg from "../../assets/images/home/mobile-espiritualidad-image.jpg";
import piedras from "../../assets/images/piedrasFondo.jpg"
import {Parallax} from "react-parallax";
import Mosaic from "./components/Mosaic";
import SliderComponent from './components/SliderComponent';


const Home = ({data, datoToSlider, dataToMosaic})=> {

    const malaImg = window.innerWidth > 500 ? desktopMalaImg : mobileMalaImg
    const tallerImg = window.innerWidth > 500 ? desktopTallerImg : mobileTallerImg
    const espiritualidadImg = window.innerWidth > 500 ? desktopEspiritualidadImg : mobileEspiritualidadImg
    
    return (
        <div className={classes.home}>
                <SliderComponent datoToSlider={datoToSlider}/>
            <div className={classes.home__slogan}>
                <h2>"Inspirados En Crear Desde El Alma."</h2> 
            </div>
            <Parallax   bgImage={piedras} strength={1200}  bgClassName={classes.ParaImg} blur={0}>
                {data && <Mosaic data={dataToMosaic}/>}
            </Parallax>
            <div className={classes.home__banner}>
                <img src={banner} alt="envios a toda europa"/>
            </div>
            <div className={classes.home__mala}>
                <div>
                <span>JAPAMALA 108 CUENTAS</span> 
                    <p>Es el rosario hindú por excelencia, 
                        empleado para recitar mantras, frases o palabras 108 veces, es una herramienta
                        práctica y al mismo tiempo está llena de simbolismo. Lo que se busca 
                        con esta experiencia es la concentración y la unión entre el cuerpo y 
                        espíritu a través de la meditación.</p> 
                    <a href="/mala">Saber más</a>
                </div>    
                <img src={malaImg} alt="japamala-108-cuentas" />
            </div>
            <div className={classes.home__blog}>
                <img src={blog} alt="blog" />
                <div className={classes.home__blog__info}>
                    <strong>LAS PIEDRAS Y SU MAGIA:</strong><p>Cada piedra tiene
                    un potencial desconocido, es el regalo que
                    nos da la naturaleza de tan diversas formas y
                    colores, llegan a nuestras vidas para sanar algún
                    aspecto de nosotros.</p>
                    <a  href="/blog">Mas info</a>
                </div>
            </div>
            <div className={classes.home__taller}>
                <img src={tallerImg} alt="" />
                <img src={espiritualidadImg} alt="" />
            </div>
                
        </div>
    )
}

export default Home;