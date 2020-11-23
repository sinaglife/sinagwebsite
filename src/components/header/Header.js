import React from 'react';
import classes from "./Header.module.scss";
import Top from "./Top";
import Toolbar from "./Toolbar";

function Header(props) {
    return (
        <header className={classes.header}>
            <Top/>
            <Toolbar
             open={props.open}
             />
        </header>
    )
}

export default Header;
