import React from "react";
import { Parallax } from 'react-parallax';
import Slider from "./Slider/Slider";
import classes from "./Home.module.scss";
import Piedras from "./Piedras.jpeg";
import Taller from "./Taller.jpeg";
import Sand from "./Sand.jpeg";
import Mosaic from "../../components/Mosaic/Mosaic";
import CenterImage from "./CenterImage/CenterImage";

const Body = (props) => {
  console.log("Are we Connected to netlify?", true);
  console.log("Are we Connected to github?", true);

  return (
    <div className={classes.Home}>
      <Slider />
      <CenterImage />
      <Parallax bgImage={Taller} strength={500}>
        <div style={{height: 500}}>
          <button className={classes.tallerButton}>Taller</button>
        </div>
      </Parallax>
      <Parallax bgImage={Sand} strength={1000} bgClassName={classes.ParaImg} blur={0}>
      <Mosaic
        clickMosaic={props.clickMosaic}
        showingBackdrop={props.showingBackdrop}
      />
      </Parallax>
      <div className={classes.ImgDiv}>
        <img alt={"Piedras"} src={Piedras} className={classes.ImgSec3} />
      </div>
    </div>
  );
};
export default Body;
