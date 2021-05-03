import React from 'react'
import { navigate } from "@reach/router";
import SearchIcon from '@material-ui/icons/Search';
//import Button from "../../../../components/UI/button/Button"

import classes from "./FilterBar.module.scss";


const FilterBar = ({filterValue, setFilterValue}) => {

const navChoices = [
    "Hombre",
    "Niños",
    "Cuidado-de-tu-ser",
    "Complementos",
    "Espiritualidad",
    "Pulseras",
    "Anillos",
    "Colgantes",
    "Pendientes"
]

const mobileNavChoices = ["Mujer", "Hombre", "Niño", "Tienda"]

const navigateTo = (param)=> {
  
    if(param.includes("ñ")){
       return param.replace("ñ", "n").toLowerCase()
    }if(param.includes("%20")){
        console.log("probando")
        return param.replace("%20", "-").toLowerCase()
    }
    return param.toLowerCase().trim()
}

const handleChange = (e)=>{
    setFilterValue(e.target.value)
}

const handleSubmit = (e)=>{
   e.preventDefault()
   setFilterValue("")
}


const renderNavChoices = navChoices.map((item, index)=>{
    let word;
    word = item.includes("-") ? item.replace(/-/gi, " ") : item
    return(
        <a 
        key={index} 
        onClick={()=>navigate(`${navigateTo(item)}`)}
        >
        {word}
        </a>
    )
})

const renderMobileNavChoices = mobileNavChoices.map((item, index)=>(
    <a 
    key={index} 
    onClick={()=>navigate(`${navigateTo(item)}`)}
    >
    {item}
    </a>
))

    return (
        <>
            <div className={classes.filterBar}>
            {
                window.innerWidth > 1025 ?
                <div className={classes.filterBar}>
                <form  onSubmit={handleSubmit}>
                <button type="submit" >
                    <SearchIcon /> 
                </button >
                <input 
                onChange={handleChange}
                placeholder="filtrar"
                value={filterValue}
                name="filter" 
                id="filter"
                />
                </form>  
                <div className={classes.navChoices}>
                    {renderNavChoices}
                </div>
                </div>
                
                : 
                <div className={classes.filterBar__responsive}>
                   
                    {renderMobileNavChoices}  
                </div>
            } 
            </div>
        </>
    )
}

export default FilterBar

/*
 <div style={{display: "flex", alignItems: "center"}}>
                        <Button  icon="leftArrow" color="arena" size="small" />
                        <Button noPadding icon="rightArrow" color="arena" size="small" />
                    </div>
*/