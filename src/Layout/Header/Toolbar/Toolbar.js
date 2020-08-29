import React from "react";
import { Link } from "@reach/router";

import classes from "./Toolbar.module.scss";
import Logo from "./logosinagvectoriced.png";
import Button from "../../../components/UI/button/index";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const toolbar = (props) => (
  <div className={classes.Toolbar}>
    <div className={classes.primaryButtonMenu}>
      <IconButton
        onClick={props.click}
      >
        <MenuIcon />
      </IconButton>
    </div>
    <Link to="/" className={classes.Toolbar_Logo}>
      <img alt="SinagVibes&Designs" src={Logo} />
    </Link>

    <div className={classes.secondaryButtonMenu}>
      <Button icon="search" color="black" size="medium" padding="noPadding" />
      <Button icon="heart" color="black" size="medium" padding="noPadding" />
    </div>
  </div>
);

export default toolbar;
