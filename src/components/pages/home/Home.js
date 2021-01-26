import React  from 'react';
import classes from "./Home.module.scss";
import Slider from "../../layout/Slider";
import banner from "./sinagBanner.jpg";
import taller from "./tallerSinag.jpg";
import blog from "./homeBlog_img.jpg";
import {Parallax} from "react-parallax";
import Mosaic from "../../layout/Mosaic";
import { Link } from "@reach/router";

const Home = (props)=> {

    return (
        <div className={classes.home}>
            <Slider/>
            <div className={classes.home__slogan}>
                <h2>"Inspirados En Crear Desde El Alma."</h2>
                
            </div>
            <Parallax  bgImage={blog} strength={400}  bgClassName={classes.ParaImg} blur={0}>
                <Mosaic
                clickMosaic={props.clickMosaic}
                />
            </Parallax>   
            <div className={classes.home__banner}>
                <img src={banner} alt=""/>
            </div>
            <div className={classes.home__taller}>
                <h3>"Tu creatividad y originalidad,<br/> son ideas para realizar piezas personalizadas"</h3>
                <img src={taller} alt=""/>
            </div>
            <Link to="Blog" style={{ textDecoration: "none", color: "black" }}>
            <div className={classes.home__blog}>
                <img src={blog} alt="" />
                <p><strong>LAS PIEDRAS Y SU MAGIA</strong> Cada piedra tiene
                    un potencial desconocido, es el regalo que
                    nos da la naturaleza de tan diversas formas y
                    colores, llegan a nuestras vidas para sanar algún
                    aspecto de nosotros
                </p>
            </div>
            </Link>
        </div>
    )
}

export default Home;