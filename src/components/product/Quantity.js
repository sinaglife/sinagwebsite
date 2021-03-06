import React, {useState} from 'react'

const styles = {
    form: {
        display: "flex",
    },
    input: {
        width: "60px",
        height: "25px",
        textAlign: "center",
        fontSize: "20px",
        marginLeft: "20px",
        marginRight: "30px"
    },
    small: {
        width: "40px",
        height: "20px",
        textAlign: "center",
        fontSize: "15px",
    },
    medium:{
        width: "70px",
        height: "30px",
        textAlign: "center",
        fontSize: "25px",
        marginLeft: "15px",
    },
    big:{
        width: "80px",
        height: "40px",
        textAlign: "center",
        fontSize: "30px",
        marginLeft: "20px",
        marginRight: "50px"
    }
}

const Quantity = () => {

    const [quantity, setQuantity] = useState(1)

    let screenSize;
    const handleChange = (e)=> {
        let amount = parseInt(e.target.value)
        console.log(amount)
            setQuantity(amount)
    }

    const handleQuantity = (e)=> {
        e.preventDefault();
        console.log("cantidad", quantity)
       
    }

    if(window.innerWidth <= 400){
        screenSize = styles.small;
    }else if (window.innerWidth  <= 769){
        screenSize = styles.medium;
    } else if(window.innerWidth  <= 1300){
        screenSize = styles.big;
    }
    else{
        screenSize = styles.input;
    }

    //const plus = ()=> {
    //    console.log("hello funciona")
    //    if(quantity >= 1){
    //        setQuantity(quantity + 1);
    //        console.log(quantity)
    //    }
    //    
    //}
    //const minus = ()=> {
    //    if(quantity !== 1){
    //        setQuantity(quantity - 1);
    //        console.log(quantity)
    //    }
    //}
    //style={mobile ? styles.inputMobile : styles.input} min="0" max="10"/>
    return (
        <form style={styles.form} onSubmit={handleQuantity}>
            <input onChange={handleChange}
            id="quantity" name="quantity" type="number" 
            value={quantity} 
            style={screenSize} min="1" max="10"
            /> 
        </form>
    )
}

export default Quantity
