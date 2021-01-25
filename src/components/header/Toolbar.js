import React, {useEffect, useState} from "react";
import classes from "./Toolbar.module.scss";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "@reach/router";
import Logo from "./logosinagvectoriced.png";

const LogoHeader = () => {
  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 70 ||
            document.documentElement.scrollTop > 70)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 70 &&
          document.documentElement.scrollTop < 70
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <Link to="/" className={classes.toolbar__logo}>
      <img src={Logo} alt="SinagVibes&Designs" className={isShrunk ? classes.shrunk : null}/>
    </Link>
  )
};

const Toolbar = (props) => (
  <div className={classes.toolbar}>
    <div className={classes.toolbar__mainButton} onClick={props.open}>
      <IconButton>
        <MenuIcon />
      </IconButton>
    </div>
    <LogoHeader/>
    <div className={classes.toolbar__rightContainer}>
    <span>CA</span>
    <span>mu</span>
    </div>
  </div>
);

export default Toolbar;