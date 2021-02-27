import React, {useState} from 'react'
import Button from "../UI/button/Button"


const styles = {
    form: {
        display: "flex",
    },
    input: {
        width: "40px",
        height: "25px",
        textAlign: "center"
    },
    
}

const Quantity = () => {

    const [quantity, setQuantity] = useState(0)


    const handleChange = (e)=> {
        //let amount = e.target.value
        //if(typeof amount === "number"){
        //    console.log("es un numero")
        //}else {
        //    console.log("es otra mierda") 
        //}
        console.log(typeof e.target.value)
        //}else {
    }
    return (
        <form style={styles.form}>
            <Button
                style={styles.button}
                icon="minus"
                color="black"
                size="small"
                padding="noPadding"
            /> 
            <input onChange={handleChange} type="number" placeholder="10" style={styles.input} min="0" max="10"/>
            
            <Button
                icon="plus"
                color="black"
                size="small"
                padding="noPadding"
            />   
        </form>
    )
}

export default Quantity
