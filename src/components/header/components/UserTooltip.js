import React from 'react'
import {Link} from "react-router-dom";

import classes from "./UserTooltip.module.scss"

const UserTooltip = ({isCloseToolTip, user, singOut}) => {
    
    return (
        <>
        {
            !user ?
            <div className={classes.tooltip__container} >
                <Link 
                to="/entrar" 
                style={{ textDecoration: "none"}}
                onClick={isCloseToolTip}
                >
                    <p className={classes.tooltip__button}>
                        entrar
                    </p>
                </Link>
                <p className={classes.tooltip__paragraph}>
                    Aun no tienes cuenta?
                </p>
                <Link
                to="/nuevo-usuario"
                style={{ textDecoration: "none"}}
                onClick={isCloseToolTip}
                >
                    <p className={classes.tooltip__button}>
                        Registrarse
                    </p> 
                </Link>
            </div>
            :
            <div className={classes.tooltip__container}>
                <Link 
                className={classes.tooltip__change__password}
                to="/olvido-contrasena"
                style={{ textDecoration: "none"}}
                onClick={isCloseToolTip}
                >
                <p>Cambiar contraseña</p>
                </Link>
                <button 
                className={classes.tooltip__button}
                onClick={singOut} >
                     salir
                </button>
                <Link 
                className={classes.tooltip__unsubscribe}
                to="/olvido-contrasena"
                style={{ textDecoration: "none"}}
                onClick={isCloseToolTip}
                >
                <p>Darme de baja</p>
                </Link>
            </div>
        }
        
        </>
    )
}

export default UserTooltip
