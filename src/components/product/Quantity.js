import React, {useState} from 'react'

const styles = {
   
    input: {
        width: "40px",
        height: "25px",
        textAlign: "center",
        fontSize: "17px",
        border: "0.5px solid rgb(128, 128, 128)"
    },
    small: {
        width: "35px",
        height: "20px",
        textAlign: "center",
        fontSize: "13px",
        border: "0.5px solid rgb(128, 128, 128)"
    },
    medium:{
        width: "50px",
        height: "30px",
        textAlign: "center",
        fontSize: "15px",
        border: "0.5px solid rgb(128, 128, 128)"
    },
    big:{
        width: "70px",
        height: "35px",
        textAlign: "center",
        fontSize: "20px",
        border: "0.5px solid rgb(128, 128, 128)"
    }
}

const Quantity = ({productQuantity, quantity, setQuantity}) => {

    
    let value = productQuantity ? productQuantity : quantity
    let screenSize;
    const handleChange = (e)=> {
        let amount = parseInt(e.target.value)
        setQuantity(amount)
    }

    const handleQuantity = (e)=> {
        e.preventDefault();
        let amount = parseInt(e.target.value)
        setQuantity(amount)
    }


    if(window.innerWidth <= 400){
        screenSize = styles.small;
    }else if (window.innerWidth  >= 400 && window.innerWidth  <= 770){
        screenSize = styles.medium;
    } else if(window.innerWidth  >= 770 && window.innerWidth  <= 1300){
        screenSize = styles.big;
    }
    else{
        screenSize = styles.input;
    }

    return (
        <form  onSubmit={handleQuantity}>
            <input onChange={handleChange}
            id="quantity" name="quantity" type="number" 
            value={value} 
            style={screenSize} min="1" max="10"
            /> 
        </form>
    )
}

export default Quantity
