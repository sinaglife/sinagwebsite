import React from 'react';
import classes from "./SideDrawerTienda.module.scss";
import { Link } from "@reach/router";


const SideDrawerTienda = (props) => {

   

    return (
       <nav className={`${classes.sideDrawerTienda} ${props.show ? classes.show : ""}`}>
           <ul>
            <Link to="/" style={{ textDecoration: 'none' }} className={classes.sideDrawerTiendaItem} onClick={props.showHandler}>
                <li>
                   <p>Mujer</p>
               </li>
            </Link>
            <Link to="/Hombre" style={{ textDecoration: 'none' }} className={classes.sideDrawerTiendaItem} onClick={props.close}>
                <li>
                   <p>Hombre</p>
               </li>
            </Link>
            <Link to="/Nino" style={{ textDecoration: 'none' }} className={classes.sideDrawerTiendaItem} onClick={props.close} >
                <li>
                   <p>Niño</p>
               </li>
            </Link>
           </ul>
       </nav>
    )
}

export default SideDrawerTienda;


