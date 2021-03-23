import React, {useState} from 'react'
import { Link } from "@reach/router";
import classes from "./UserTooltip.module.scss"



const UserTooltip = ({toolTipHandler, user}) => {
    

    return (
        <>
        {
            user ?
            <div className={classes.tooltip__container}>
                <button onCLick={toolTipHandler}>
                <Link  to="/entrar" >
                    <button >entrar</button>
                </Link>
                </button>
                <div className={classes.tooltip__remember}>
                    <input type="checkbox" name="remember"/>
                    <p>Recordar contraseña</p>
                </div>
                <Link to="nuevo-usuario"
                onCLick={toolTipHandler}
                className={classes.tooltip__register}>
                    <p>Registrarse</p>
                </Link>
            </div>
            :
            <div className={classes.tooltip__container__logout}>
                <button>salir</button>
            </div>
        }
        
        </>
    )
}

export default UserTooltip
