import React from "react";
import { Link } from "@reach/router";

import classes from "./SideDrawer.module.scss";
import IconButton from '@material-ui/core/IconButton';
import Button from "../../components/UI/button/index";

const SideDrawer = (props) => {
  return (
    <nav className={`${classes.SideDrawer} ${props.show ? classes.open : ""}`}>
      <ul>
        <IconButton>
        <Link to='Tienda' className={classes.item} onClick={props.closeSideDrawer}>
          <li className={classes.TextBox}>
            <Button icon="store" color="white" size="big" />
            <p className={classes.itemText}>
              Tienda
            </p>
          </li>
        </Link>
        </IconButton>
        <IconButton>
        <Link to='Japamalas' className={classes.item} onClick={props.closeSideDrawer}>
          <li className={classes.TextBox}>
            <Button icon="om" color="white" size="big" />
            <p className={classes.itemText} >
              Japamalas
            </p>
          </li>
        </Link>
        </IconButton>
        <IconButton>
        <Link to='Kokedamas' className={classes.item} onClick={props.closeSideDrawer}>
          <li className={classes.TextBox}>
            <Button icon="kokedama" color="white" size="big" />
            <p className={classes.itemText} >
              Kokedamas
            </p>
          </li>
        </Link>
        </IconButton>
        <IconButton>
        <Link to='Blog' className={classes.item} onClick={props.closeSideDrawer}>
          <li className={classes.TextBox}>
            <Button icon="blog" color="white" size="big" />
            <p className={classes.itemText}>
              Blog
            </p>
          </li>
        </Link>
        </IconButton>
      </ul>
    </nav>
  );
};

export default SideDrawer;
