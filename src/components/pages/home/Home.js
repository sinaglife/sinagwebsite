import React, {useEffect, useState} from 'react';
import axios from 'axios'
import classes from "./Home.module.scss";
import Slider from "../../layout/Slider";
import Banner from "../../layout/Banner";
import banner from "../../../assets/images/sinagBanner.jpg";
import blog from "../../../assets/images/homeBlog_img.jpg";
import {Parallax} from "react-parallax";
import Mosaic from "../../layout/Mosaic";
import { Link } from "@reach/router";
import piedras from "../../../assets/images/piedrasFondo.jpg"


const Home = ()=> {

    const [pagesData, setPagesData] = useState(null);


    useEffect(() => {
        let api1 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=1`;
        let api2 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=2`;
        let api3 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=3`;
    
        const promise1 = axios
            .get(api1)
            .then((res) => {
            return res.data;
            })
            .catch((err) => []);
        const promise2 = axios
            .get(api2)
            .then((res) => {
            return res.data;
            })
            .catch((err) => []);
        const promise3 = axios
            .get(api3)
            .then((res) => {
            return res.data;
            })
            .catch((err) => []);
    
        Promise.all([promise1, promise2, promise3]).then((results) => {
            const data = results[0].concat(results[1]);
            data.concat(results[2]);
            setPagesData(data);
        });
    }, []);

    return (
        <div className={classes.home}>
            {pagesData && <Slider data={pagesData}/>}
            <div className={classes.home__slogan}>
                <h2>"Inspirados En Crear Desde El Alma."</h2> 
            </div>
            <Parallax   bgImage={piedras} strength={1200}  bgClassName={classes.ParaImg} blur={0}>
                {pagesData && <Mosaic data={pagesData}/>}
            </Parallax>
            <div className={classes.home__banner}>
                <img src={banner} alt=""/>
            </div>
            {pagesData && <Banner data={pagesData}/>}
            <Link to="Blog" style={{ textDecoration: "none", color: "black" }}>
                <div className={classes.home__blog}>
                    <img src={blog} alt="blog" />
                    <p><strong>LAS PIEDRAS Y SU MAGIA:</strong> Cada piedra tiene
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