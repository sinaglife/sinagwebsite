import React, {useState} from 'react'

let screenSize =  window.innerWidth;
const style = {
    select: {
        width: "50px",
        fontSize: "15px" 
    },
    smallScreen:{
        width: "20px",
        fontSize: "10px",
        
    }  
}
function FilterSize({sizeChoice}) {

    let ringArray = [6,7,8,9,10];
    let necklaceArray = [35,42,45,50,55,60,70,80];
    let braceletArray = ["s", "m", "l", "xl"];

    const ringFilter = ()=> (
        ringArray.map((item, index)=> (
            <option key={index} value={item}>{item}</option>
        ))
    )

    const braceleteFilter = ()=>(
        braceletArray.map((item, index)=> (
            <option key={index} value={item}>{item}</option>
        ))
    )

    const necklaceFilter = ()=>(
        necklaceArray.map((item, index)=> (
            <option key={index} value={item}>{item}</option>
        ))
    )
    
    const sizePicker = sizeChoice == "anillo" ? 
    ringFilter()
    : sizeChoice == "colgante" ? 
    necklaceFilter()
    : sizeChoice == "pulsera" ? braceleteFilter()
    : null

    return (
        <div style={ screenSize >=  900 ? style.select : style.smallScreen}>
            <select style={ screenSize >=  900 ? style.select : style.smallScreen} id="size" name="size">
                {
                   sizePicker
                }
            </select> 
        </div>
    )
}

export default FilterSize
