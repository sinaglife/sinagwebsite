import React from 'react'
import classes from "./FormComponent.module.scss"


export const InputRow = ({
    label,
    name,
    type,
    value,
    onChange,
    error,
    style,
    checked
    })=>{

    return(
        <div className={style || classes.inputRow}>
            <label>{label}</label>
            <input name={name} type={type} checked={checked} value={value}  onChange={onChange}/>
            {
                error && <p>{error}</p>
            }
        </div>
       
    )
};



export const FormComponent = ({
    title, 
    onSubmit, 
    children,
}) => {
    return (
        <div className={classes.formComponent}>
            <h3>{title}</h3>
            <form onSubmit={onSubmit}>
                {children}
            </form>
        </div>
    )
}


