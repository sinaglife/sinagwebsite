import React from "react";

import classes from "./Header.module.css";
import Top from "./Top/Top";
import Toolbar from "./Toolbar/Toolbar";

const Header = (props) => (
  <header className={classes.Header}>
    <Top />
    <Toolbar click={props.clickDrawerButton} />
  </header>
);

export default Header;
