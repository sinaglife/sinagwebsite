import React from 'react'
import ProductGallery from "./ProductGallery"
import FilterBar from "./FilterBar"
import classes from "./Store.module.scss";

const Store = ({data, logo}) => {

    const param = (window.location.pathname).replace("/", "").toLowerCase().trim();
    let list;
    if(param === "mala" && data.length > 0){
        list = data.filter((page)=> page.parent === 5 && page.acf.product_showInMala);
    }
   
    if(param === "kokedamas" && data.length > 0){
        list = data.filter((page)=> page.parent === 5 && page.acf.product_showInkokedama);
    }
    if(param === "hombre" && data.length > 0){
        list = data.filter((page)=> page.parent === 5 && page.acf.product_showInHombre);
    }
    if(param === "niño" && data.length > 0){
        list = data.filter((page)=> page.parent === 5 && page.acf.product_showInNiño);
    }
    if(param === "bolsos" && data.length > 0){
        list = data.filter((page) => page.parent === 5 && page.acf.product_showInBolso);
    }
    if(param === "colgantes" && data.length > 0){
        list = data.filter((page) => page.parent === 5 && page.acf.product_showInColgantes);
    }
    if(param === "pendientes" && data.length > 0){
        list = data.filter( (page) => page.parent === 5 && page.acf.product_showInPendientes);
    }
    if(param === "pulseras" && data.length > 0){
        list = data.filter( (page) => page.parent === 5 && page.acf.product_showInPulseras);
    }
    
    return (
        <div>
            <FilterBar/>
            {logo ? logo 
            :<h1 className={classes.store__title}>{param}</h1> 
            }
            <ProductGallery data={list} />
        </div>
    )
}

export default Store
