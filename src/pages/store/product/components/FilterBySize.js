import React, {memo} from 'react'
import PropTypes from "prop-types";
import classes from "./FilterBySize.module.scss"

const FilterSize = memo(function FilterSize({
    sizeParam,
    handleChange
}) {

    let ringArray = [6,7,8,9,10];
    let necklaceArray = ["35cm","42cm","45cm","50cm","55cm","60cm","70cm","80cm"];
    let braceletArray = ["s", "m", "l", "xl"];

    const ringFilter = ()=> (
        ringArray.map((item, index)=> (
            <option  name={item}  key={index} value={item}>{item}</option>
        ))
    )

    const braceleteFilter = ()=>(
        braceletArray.map((item, index)=> (
            <option name={item}  key={index} value={item}>{item}</option>
        ))
    )

    const necklaceFilter = ()=>(
        necklaceArray.map((item, index)=> (
            <option name={item}  key={index} value={item}>{item}</option>
        ))
    )
    
    const sizePicker = sizeParam === "anillos" ? 
    ringFilter()
    : sizeParam === "colgantes" ? 
    necklaceFilter()
    : sizeParam === "pulseras" ? braceleteFilter()
    : null


    return (
        <form id="">
            <select onChange={handleChange} id="size" name="size"  className={classes.filter__select}>
                <option></option>
                {
                    sizePicker
                }
            </select> 
        </form>
    )
})

FilterSize.propTypes = {
    sizeChoice: PropTypes.string.isRequired
}

export default FilterSize

