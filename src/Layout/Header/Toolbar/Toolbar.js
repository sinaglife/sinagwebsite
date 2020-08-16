import React from "react";
import { Link } from "@reach/router";


import classes from "./Toolbar.module.scss";
import Logo from "./logosinagvectoriced.png";
import Button from "../../../components/UI/button/index";

const toolbar = (props) => (
  <div className={classes.Toolbar}>
    <div className={classes.primaryButtonMenu}>
      <Button
        icon="menuBars"
        color="black"
        size="medium"
        onClick={props.click}
      />
    </div>
    <Link to="/" className={classes.Toolbar_Logo}><img alt='SinagVibes&Designs' src={Logo} /></Link>

    <div className={classes.secondaryButtonMenu}>
      <Button icon="search" color="black" size="medium" />
      <Button icon="heart" color="black" size="medium" />
    </div>
  </div>
);

export default toolbar;
