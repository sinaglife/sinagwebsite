import React from 'react';
import classes from "./SideDrawerMujer.module.scss";
import {Link} from  "@reach/router";

const SideDrawerMujer = (props) => {
    return (
        <nav className={`${classes.sidedrawer__nav} ${props.show ? classes.show : ""}`}>
          <ul>
            <Link to="/Pulseras" style={{ textDecoration: 'none' }} onClick={props.close}>
                <li className={classes.sidedrawer__list}>
                    <p className={classes.sidedrawer__title}>Pulsera</p>
                </li>
            </Link>
            <Link to="/Colgantes" style={{ textDecoration: 'none' }} onClick={props.close}>
                <li className={classes.sidedrawer__list}>
                    <p className={classes.sidedrawer__title}>Colgantes</p>
                </li>
            </Link>
            <Link to="/Pendientes" style={{ textDecoration: 'none' }} onClick={props.close}>
                <li className={classes.sidedrawer__list}>
                    <p className={classes.sidedrawer__title}>Pendientes</p>
                </li>
            </Link>
            <Link to="/Bolsos" style={{ textDecoration: 'none' }} onClick={props.close}>
                <li className={classes.sidedrawer__list}>
                    <p className={classes.sidedrawer__title}>Bolsos</p>
                </li>
            </Link>
          </ul>  
        </nav>
    )
}

export default SideDrawerMujer
