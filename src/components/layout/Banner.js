import React from 'react'
import { Link } from "@reach/router";
import imagenTaller from "../../assets/images/taller-imagen1.jpg"
import classes from "./Banner.module.scss"



function Banner (props) {


  //const bannerData = props.data.filter(
  //  (page) => page.parent === 1869 && page.slug === "taller-banner"
  //)[0];

  return (
    <div style={{ position: "relative"}}>

      <img
        className={classes.banner__image}
        src={imagenTaller}
        alt="imagen taller"
      />
      <Link to="taller">
        <button className={classes.banner__button}>Diseña Aquí</button>
      </Link>
    </div>
  )
}

export default Banner;


/**
 bannerData.acf.banner_image_big.url
      <div
        style={{
          display: window.innerWidth >= 992 ? "block" : "none",
        }}
      >
        <img
          style={style.image.desktop}
          src={bannerData.acf.banner_image_big.url}
          alt={bannerData.acf.banner_title}
        />
      </div>
      <div
        style={{
          display:
            window.innerWidth >= 576 && window.innerWidth < 992
              ? "block"
              : "none",
        }}
      >
        <img
          className={classes.banner__image}
          src={bannerData.acf.banner_image_big.url}
          alt={bannerData.acf.banner_title}
        />
      </div>
      <div
        style={{
          display: window.innerWidth < 576 ? "block" : "none",
        }}
      >
        
      </div>

 */