import React, {useEffect, useState} from "react";
import classes from "./Toolbar.module.scss";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "@reach/router";
import Logo from "../../assets/images/LogoSinagSinV&D.jpeg";
import Button from "../UI/button/Button";

const LogoHeader = () => {
  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 0 ||
            document.documentElement.scrollTop > 0)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop <= 0 &&
          document.documentElement.scrollTop <= 0
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
    <Button
      icon="kart"
      color="black"
      size="medium"
      padding="noPadding"
    />
    <Button
      icon="account"
      color="black"
      size="medium"
      padding="noPadding"
    />
    </div>
  </div>
);

export default Toolbar;