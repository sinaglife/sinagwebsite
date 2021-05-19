import React from "react";
import classes from "./SideDrawer.module.scss";
import {Link} from "react-router-dom";
import Button from "./UI/button/Button";

const SideDrawer = (props) => {


  const drawerData = [
    {
      title: "Tienda",
      path: "/menu",
      icon: "store"
    },
    {
      title: "Malas",
      path: "/tienda/mala",
      icon: "om"
    },
    {
      title: "Kokedamas",
      path: "/tienda/kokedamas",
      icon: "kokedama"
    },
    {
      title: "Conócenos",
      path: "/conocenos",
      icon: "hands"
    },
    {
      title: "Blog",
      path: "/blog",
      icon: "blog"
    }
  ]

  const renderDrawer =  drawerData.map((item, index)=> (
    <Link
    to={item.path}
    style={{ textDecoration: "none"}}
    className={classes.sideDrawer__item}
    onClick={props.close}
    key={index}
    >
      <li  className={classes.sideDrawer__list} style={{borderTop: "none" }}>
        <Button icon={item.icon} color="white" size="xBig" />
        <p className={classes.sideDrawer__paragraph}>{item.title}</p>
      </li>
    </Link>      
  ))
  
  return (
    <nav className={`${classes.sideDrawer} ${props.open ? classes.open : ""}`}>
      <ul>
        {
         renderDrawer
        }
      </ul>
    </nav>
  );
};

export default SideDrawer;

