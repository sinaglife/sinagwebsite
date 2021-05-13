import React from "react";
import classes from "./SideDrawer.module.scss";
import {Link} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Button from "./UI/button/Button";

const SideDrawer = (props) => {
  return (
    <nav className={`${classes.sideDrawer} ${props.open ? classes.open : ""}`}>
      <ul>
        <Link
          to="/tienda"
          style={{ textDecoration: "none"}}
          className={classes.sideDrawer__item}
          onClick={props.close}
        >
          <li className={classes.sideDrawer__list} style={{borderTop: "none" }}>
            <Button icon="store" color="white" size="xBig" />
            <p className={classes.sideDrawer__paragraph}>Tienda</p>
          </li>
        </Link>      
        <Link
          to="/mala"
          style={{ textDecoration: "none" }}
          className={classes.sideDrawer__item}
          onClick={props.close}
        >
          <li className={classes.sideDrawer__list}>
            <Button icon="om" color="white" size="xBig" />
            <p className={classes.sideDrawer__paragraph}>Malas</p>
          </li>
        </Link>

        <Link
          to="/kokedamas"
          style={{ textDecoration: "none" }}
          className={classes.sideDrawer__item}
          onClick={props.close}
        >
          <li className={classes.sideDrawer__list}>
            <Button icon="kokedama" color="white" size="xBig" />
            <p className={classes.sideDrawer__paragraph}>Kokedamas</p>
          </li>
        </Link>
        <Link
          to="/conocenos"
          style={{ textDecoration: "none" }}
          className={classes.sideDrawer__item}
          onClick={props.close}
        >
          <li className={classes.sideDrawer__list}>
            <Button icon="hands" color="white" size="xBig" />
            <p className={classes.sideDrawer__paragraph}>Conócenos</p>
          </li>
        </Link>
        <Link
          to="/blog"
          style={{ textDecoration: "none" }}
          className={classes.sideDrawer__item} 
          onClick={props.close}
        >
          <li className={classes.sideDrawer__list}>
            <Button icon="blog" color="white" size="xBig" />
            <p className={classes.sideDrawer__paragraph}>Blog</p>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default SideDrawer;
