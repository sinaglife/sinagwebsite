import React, {useState} from 'react'
import { navigate } from "@reach/router";
import SearchIcon from '@material-ui/icons/Search';
import SimpleMenu from "./SimpleMenu"
import classes from "./FilterBar.module.scss";


const FilterBar = ({filterValue, setFilterValue}) => {
const [isStoreMenu, setIsStoreMenu] = useState(false)

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

const navigateTo = (param)=> {
    let regEx = /%20/gi;
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
    return (
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
            {
                window.innerWidth < 900 ?
                !isStoreMenu ?
                <button className={classes.showMenu__button} onClick={()=> setIsStoreMenu(true)}>
                    Menu
                </button> 
                :      
                <div className={classes.filterBar__navButton}>
                    <SimpleMenu 
                    navChoices={navChoices}
                    navigateTo={navigateTo}
                    navigate={navigate}
                    />  
                </div>
                :
                <div className={classes.navChoices}>
                {navChoices.map((item, index)=>{
                     let word;
                     word = item.includes("-") ? item.replace(/-/gi, " ") : item
                     return(
                        <a 
                        id={index} 
                        onClick={()=>navigate(`${navigateTo(item)}`)}
                        >
                        {word}
                        </a>
                     )
                })}
            </div>
            }
        </div>
    )
}

export default FilterBar

/*

*/