import React from 'react'
import classes from "./Button.module.scss"

const Button = ({title, style, type, ...props}) => {
    return (
        <button className={classes.button__main__container || style}
        type={type}
        >
            {title}
        </button>
    )
}

export default Button
