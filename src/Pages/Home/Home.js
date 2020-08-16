import React, { useEffect } from "react";
// import Spinner from 'react-bootstrap/Spinner'+

import Slider from "./Slider/Slider";
import classes from "./Home.module.scss";
import Piedras from "./Piedras.jpeg";
import Taller from "./Taller.jpeg";
import Mosaic from "../../components/Mosaic/Mosaic";
import CenterImage from "./CenterImage/CenterImage";

const Body = (props) => {
  console.log("Are we Connected to netlify?", true);

  return (
    <div className={classes.Home}>
      <Slider />
      <CenterImage />
      <img alt={"Taller"} src={Taller} className={classes.ImgSec3} />

      <Mosaic
        clickMosaic={props.clickMosaic}
        showingBackdrop={props.showingBackdrop}
      />
      <div className={classes.ImgDiv}>
        <img alt={"Piedras"} src={Piedras} className={classes.ImgSec3} />
      </div>
    </div>
  );
};
export default Body;
