import React from "react";
import classes from "./Toolbar.module.scss";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "@reach/router";
import Logo from "./logosinagvectoriced.png";
import Button from "../UI/button/Button";

const Toolbar = (props) => (
  <div className={classes.toolbar}>
    <div className={classes.toolbar__mainButton} onClick={props.open}>
      <IconButton>
        <MenuIcon />
      </IconButton>
    </div>
    <Link to="/" className={classes.toolbar__logo}>
      <img src={Logo} alt="SinagVibes&Designs" />
    </Link>
    <div className={classes.toolbar__rightContainer}>
      <Button icon="search" color="black" size="medium" padding="noPadding" />
      <Button icon="heart" color="black" size="medium" padding="noPadding" />
    </div>
  </div>
);

export default Toolbar;
