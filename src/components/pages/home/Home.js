import React from 'react';
import classes from "./Home.module.scss";
import Slider from "../../layout/Slider";
import Banner from "../../layout/Banner";
import banner from "../../../assets/images/sinagBanner.jpg";
import blog from "../../../assets/images/homeBlog_img.jpg";
import mala from "../../../assets/images/home/mala-image.jpg";
import {Parallax} from "react-parallax";
import Mosaic from "../../layout/Mosaic";
import piedras from "../../../assets/images/piedrasFondo.jpg"


const Home = ({data})=> {

    return (
        <div className={classes.home}>
            {data && <Slider data={data}/>}
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
                    <img src={mala} alt="blog" />
                    <p><strong>JAPAMALAS:</strong> Cada piedra tiene
                        un potencial desconocido, es el regalo que
                        nos da la naturaleza de tan diversas formas y
                        colores, llegan a nuestras vidas para sanar algún
                        aspecto de nosotros.
                        <a  href="/blog">Mas info</a>
                    </p>
                </div>
            {data && <Banner data={data}/>}
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
        </div>
    )
}

export default Home;