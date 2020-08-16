import React from "react";
import { Link } from "@reach/router";

import classes from "./SideDrawer.module.scss";
import Button from "../../components/UI/button/index";

const SideDrawer = (props) => {
  return (
    <nav className={`${classes.SideDrawer} ${props.show ? classes.open : ""}`}>
      <ul>
        <Link to='Tienda' className={classes.item} onClick={props.closeSideDrawer}>
          <li className={classes.TextBox}>
            <Button icon="store" color="white" size="big" />
            <p className={classes.itemText}>
              Tienda
            </p>
          </li>
        </Link>
        <Link to='Japamalas' className={classes.item} onClick={props.closeSideDrawer}>
          <li className={classes.TextBox}>
            <Button icon="om" color="white" size="big" />
            <p className={classes.itemText} >
              Japamalas
            </p>
          </li>
        </Link>
        <Link to='Kokedamas' className={classes.item} onClick={props.closeSideDrawer}>
          <li className={classes.TextBox}>
            <Button icon="kokedama" color="white" size="big" />
            <p className={classes.itemText} >
              Kokedamas
            </p>
          </li>
        </Link>
        <Link to='Blog' className={classes.item} onClick={props.closeSideDrawer}>
          <li className={classes.TextBox}>
            <Button icon="blog" color="white" size="big" />
            <p className={classes.itemText}>
              Blog
            </p>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default SideDrawer;
