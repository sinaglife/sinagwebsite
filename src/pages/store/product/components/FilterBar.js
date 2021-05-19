import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import {Link} from "react-router-dom";

import classes from "./FilterBar.module.scss";


const FilterBar = ({filterValue, setFilterValue}) => {

const storeLinks = [
    {
        path: "/tienda/hombre",
        title: "Hombre"
    },
    {
        path: "/tienda/ninos",
        title: "Niños"
    },
    {
        path: "/tienda/cuidado-de-tu-ser",
        title: "Cuidado de tu ser"
    },
    {
        path: "/tienda/complementos",
        title: "Complementos"
    },
    {
        path: "/tienda/espiritualidad",
        title: "Espiritualidad"
    },
    {
        path: "/tienda/pulseras",
        title: "Pulseras"
    },
    {
        path: "/tienda/anillos",
        title: "Anillos"
    },
    {
        path: "/tienda/colgantes",
        title: "Colgantes"
    },
    {
        path: "/tienda/pendientes",
        title: "Pendientes"
    },
]

const mobileStoreLinks = [ {
    path: "/menu/mujer",
    title: "Mujer"
},
{
    path: "/tienda/hombre",
    title: "Hombre"
},
{
    path: "/tienda/ninos",
    title: "Niños"
},
{
    path: "/menu",
    title: "Tienda"
}]

const handleChange = (e)=>{
    setFilterValue(e.target.value)
}

const handleSubmit = (e)=>{
   e.preventDefault()
   setFilterValue("")
}


const renderStoreLinks = storeLinks.map((item, index)=>(
        <Link 
        to={item.path}
        key={index} 
        >
        {item.title}
        </Link>
    )
)

const renderMobileStoreLinks = mobileStoreLinks.map((item, index)=>(
    <Link 
    to={item.path}
    key={index} 
    >
    {item.title}
    </Link>
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
                    {renderStoreLinks}
                </div>
                </div>
                
                : 
                <div className={classes.filterBar__responsive}>
                   
                    {renderMobileStoreLinks}  
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