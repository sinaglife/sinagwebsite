import React, {useState, useEffect} from 'react';
import classes from "./Header.module.scss";
import Top from "./Top";
import Toolbar from "./Toolbar";

function Header(props) {

    const [isScroll, setIsScroll] = useState(false)

    useEffect(() => {
        window.onscroll = () => handleScroll();
    }, [])

const handleScroll = () => {
    let scroll_y = window.scrollY;
    if(scroll_y > 0){
        setIsScroll(true)
    }else{
        setIsScroll(false)
    }
}


    return (
        <header className={`${isScroll ? classes.header__scrolled : classes.header}`}>
            <Top/>
            <Toolbar
             open={props.open}
             />
        </header>
    )
}

export default Header;
