import React  from 'react';
import classes from "./Home.module.scss";
import Slider from "../../layout/Slider";
import sand from "./manchones.jpg";
import banner from "./sinagBanner.jpg";
import {Parallax} from "react-parallax";
import Mosaic from "../../layout/Mosaic";

const Home = (props)=> {

    return (
        <div className={classes.home}>
            <Slider/>
            <div className={classes.home__slogan}>
                <h2>"Inspirados En Crear Desde El Alma."</h2>
                
            </div>
            <Parallax  bgImage={sand} strength={10}  bgClassName={classes.ParaImg} blur={0}>
                <Mosaic
                clickMosaic={props.clickMosaic}
                />
            </Parallax>   
            <div className={classes.home__banner}>
                <img src={banner} alt=""/>
            </div>
        </div>
    )
}

export default Home;