import React  from 'react'
import classes from "./Quantity.module.scss"

const Quantity = React.memo(function Quantity(
    {
        quantity,
        id,
        handleChange,
        handleSubmit,
        title
    }) {
    
    
        return (
            <form className={classes.quantity}  onSubmit={handleSubmit}>
                <span>{title}</span>
                <input onChange={handleChange}
                id={id} name={id} type="number" 
                value={quantity} 
                min="1" max="10"
                /> 
            </form>
        )
    }
)

export default Quantity
