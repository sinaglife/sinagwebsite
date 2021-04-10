import React from 'react'
import PropTypes from "prop-types";
import classes from "./FilterBySize.module.scss"

function FilterSize({sizeChoice}) {

    let ringArray = [6,7,8,9,10];
    let necklaceArray = [35,42,45,50,55,60,70,80];
    let braceletArray = ["s", "m", "l", "xl"];

    const ringFilter = ()=> (
        ringArray.map((item, index)=> (
            <option  key={index} value={item}>{item}</option>
        ))
    )

    const braceleteFilter = ()=>(
        braceletArray.map((item, index)=> (
            <option  key={index} value={item}>{item}</option>
        ))
    )

    const necklaceFilter = ()=>(
        necklaceArray.map((item, index)=> (
            <option  key={index} value={item}>{item}cm</option>
        ))
    )
    
    const sizePicker = sizeChoice === "anillo" ? 
    ringFilter()
    : sizeChoice === "colgante" ? 
    necklaceFilter()
    : sizeChoice === "pulsera" ? braceleteFilter()
    : null

    return (
        <div>
            <select id="size" name="size" className={classes.filter__select}>
                <option></option>
                {
                    sizePicker
                }
            </select> 
        </div>
    )
}

FilterSize.propTypes = {
    sizeChoice: PropTypes.string.isRequired
}

export default FilterSize

