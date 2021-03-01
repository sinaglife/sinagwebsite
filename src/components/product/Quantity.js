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
    inputMobile: {
        width: "80px",
        height: "40px",
        textAlign: "center",
        fontSize: "20px",
    }
    
}

const Quantity = () => {

    const [quantity, setQuantity] = useState(1)
    const mobile = window.innerWidth <= 1300;

    const handleChange = (e)=> {
        let amount = parseInt(e.target.value)
        if(amount === 0){
            setQuantity(1)
        }else{
            setQuantity(amount)
        }
    }

    const plus = ()=> {
        console.log("hello funciona")
        if(quantity >= 1){
            setQuantity(quantity + 1);
            console.log(quantity)
        }
        
    }
    const minus = ()=> {
        if(quantity !== 1){
            setQuantity(quantity - 1);
            console.log(quantity)
        }
    }
    return (
        <form style={styles.form}>
            <Button
                style={styles.button}
                icon="minus"
                color="black"
                size="small"
                padding="noPadding"
                onClick={minus}
            /> 
            <input onChange={handleChange} type="number" value={quantity} style={mobile ? styles.inputMobile : styles.input} min="0" max="10"/>
            
            <Button
                icon="plus"
                color="black"
                size="small"
                padding="noPadding"
                onCLick={plus}
            />   
        </form>
    )
}

export default Quantity
