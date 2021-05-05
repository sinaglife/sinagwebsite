import React, {useEffect, useState} from "react";
import classes from "./Toolbar.module.scss";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "@reach/router";
import Logo from "../../assets/images/LogoSinagSinV&D.jpeg";
import Button from "../UI/button/Button";
import UserTooltip from "./components/UserTooltip"
import { connect } from 'react-redux'
import {getBasketLength} from "../../utils/basket.utils"
import {singOut} from "../../utils/user.utils"

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
  const [coord, setCoord] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => { 
      setBasketLength(getBasketLength(basket.basketItems))
  }, [basket.basketItems])

  useEffect(()=> {
    if(coord.x >= window.innerWidth - 50 || coord.x <= 800 || coord.y >= 410 || coord.y <= 50) setIsTooltip(false)
  }, [coord])

  const isOpenToolTip = (e)=> setIsTooltip(true)

  const isCloseToolTip = (e)=>  setIsTooltip(false)
   
const hanldeMouseMove = (e)=> {
  //console.log(e.clientX, e.clientY)
  //console.log(window.innerWidth)
  setCoord({
    x: e.clientX,
    y: e.clientY
  })
}

return (
      <div className={classes.toolbar}  onMouseMove={hanldeMouseMove}>
        <div className={classes.toolbar__mainButton} onClick={props.open}>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </div>
        <LogoHeader/>
        <div className={classes.toolbar__rightContainer}>
         <div className={classes.toolbar__right__user}    
         onMouseMove={isOpenToolTip}
         >
            {
              window.innerWidth >= 1000 && user?.additionalUserInfo?.profile?.name && <span>{user.additionalUserInfo.profile.name}</span>
            }
            <Button
              icon="account"
              color="black"
              size="medium"
              padding="noPadding"
            />  
         </div>
          <div className={classes.toolbar__right__basket}>
            {
              window.innerWidth >= 1000 && <span>{basketLength}</span>
            }
            <Link to="/cesta">
              <Button
                icon="kart"
                color="black"
                size="medium"
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

const mapDispatchToProps = (dispatch)=>{
  return {
    singOut: ()=> dispatch(singOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);


  