import React from 'react'
import { Link } from "@reach/router";
import classes from "./UserTooltip.module.scss"

const UserTooltip = ({isCloseToolTip, user, singOut}) => {
    
    return (
        <>
        {
            !user ?
            <div className={classes.tooltip__container} onMouseLeave={isCloseToolTip}>
                <button >
                <Link style={{color: "rgb(0, 0, 0)", textDecoration: "none"}}
                  to="/entrar" 
                  onClick={isCloseToolTip}>
                    entrar
                </Link>
                </button>
                <div className={classes.tooltip__remember}>
                    <p>Aun no tienes cuenta?</p>
                </div>
                <button style={{border: "none", backgroundColor: "transparent"}}>
                    <Link to="nuevo-usuario"
                    onClick={isCloseToolTip}
                    className={classes.tooltip__register}>
                        <p>Registrarse</p>
                    </Link>
                </button>
            </div>
            :
            <div className={classes.tooltip__container__logout}>
                <button onClick={singOut}>salir</button>
            </div>
        }
        
        </>
    )
}

export default UserTooltip
