import React, {useEffect, useState} from "react";
import classes from "./Toolbar.module.scss";
import {Link} from "react-router-dom";
import Logo from "../../assets/images/LogoSinagSinV&D.jpeg";
import Button from "../UI/button/Button";
import UserTooltip from "./components/UserTooltip"
import { connect } from 'react-redux'
import {getBasketLength} from "../../utils/basket.utils"
import {singOutSuccess} from "../../redux/user/user.actions"

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

const Toolbar = ({basket, user, singOut, ...props}) =>{
  const [isTooltip, setIsTooltip] = useState(false)
  const [basketLength, setBasketLength] = useState()

  useEffect(() => { 
      setBasketLength(getBasketLength(basket.basketItems))
  }, [basket.basketItems])

  const isOpenToolTip = (e)=> setIsTooltip(true)

  const isCloseToolTip = (e)=>  setIsTooltip(false)
   


return (
      <div className={classes.toolbar} >
        <div className={classes.toolbar__mainButton} onClick={props.open}>
          <Button
            icon="menuBars"
            color="black"
            size="big"
            padding="noPadding"
          />
        </div>
        <LogoHeader/>
        <div className={classes.toolbar__rightContainer}>
          <div className={classes.toolbar__right__user}    
          onClick={()=> setIsTooltip(!isTooltip)}
          >
              {
                window.innerWidth >= 1000 &&
                 user?.name &&
                  <span className={classes.toolbar__basket__total}>{user?.name}</span>
              }
              <Button
                icon="account"
                color="black"
                size="big"
                padding="noPadding"
              />  
          </div>
          <div className={classes.toolbar__right__basket}>
            <span className={classes.basketBadge}>{basketLength}</span> 
            <Link to="/cesta">
              <Button
                icon="kart"
                color="black"
                size="big"
                padding="noPadding"
              />
            </Link>
          </div>
          {
            isTooltip &&
            <UserTooltip
            isCloseToolTip={isCloseToolTip}
            user={user}
            singOut={singOut}
            /> 
          }
        </div>
      </div>
  );
}

const mapStateToProps = state =>{
  return{
    basket: state.basket,
    user: state.user.user
  }
}

const mapDispachToProps = dispatch =>{
  return{
    singOut: () => dispatch(singOutSuccess())
  }
}



export default connect(mapStateToProps, mapDispachToProps)(Toolbar);


  