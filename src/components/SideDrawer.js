import React from "react";
import classes from "./SideDrawer.module.scss";
import { Link } from "@reach/router";
import IconButton from "@material-ui/core/IconButton";
import Button from "./UI/button/Button";

const SideDrawer = (props) => {
  return (
    <nav className={`${classes.sideDrawer} ${props.open ? classes.open : ""}`}>
      <ul>
        <IconButton onClick={props.close}>
          <Link
            to="/tienda"
            style={{ textDecoration: "none"}}
            className={classes.sideDrawer__item}
          >
            <li className={classes.sideDrawer__list} style={{borderTop: "none" }}>
              <Button icon="store" color="white" size="big" />
              <p className={classes.sideDrawer__paragraph}>Tienda</p>
            </li>
          </Link>
        </IconButton>
        <IconButton onClick={props.close}>
          <Link
            to="mala"
            style={{ textDecoration: "none" }}
            className={classes.sideDrawer__item}
          >
            <li className={classes.sideDrawer__list}>
              <Button icon="om" color="white" size="big" />
              <p className={classes.sideDrawer__paragraph}>Malas</p>
            </li>
          </Link>
        </IconButton>
        <IconButton onClick={props.close}>
          <Link
            to="kokedamas"
            style={{ textDecoration: "none" }}
            className={classes.sideDrawer__item}
          >
            <li className={classes.sideDrawer__list}>
              <Button icon="kokedama" color="white" size="big" />
              <p className={classes.sideDrawer__paragraph}>Kokedamas</p>
            </li>
          </Link>
        </IconButton>
        <IconButton  onClick={props.close}>
          <Link
            to="conocenos"
            style={{ textDecoration: "none" }}
            className={classes.sideDrawer__item}
          >
            <li className={classes.sideDrawer__list}>
              <Button icon="hands" color="white" size="big" />
              <p className={classes.sideDrawer__paragraph}>Conócenos</p>
            </li>
          </Link>
        </IconButton>
        <IconButton onClick={props.close}>
          <Link
            to="blog"
            style={{ textDecoration: "none" }}
            className={classes.sideDrawer__item} 
          >
            <li className={classes.sideDrawer__list}>
              <Button icon="blog" color="white" size="big" />
              <p className={classes.sideDrawer__paragraph}>Blog</p>
            </li>
          </Link>
        </IconButton>
      </ul>
    </nav>
  );
};

export default SideDrawer;
