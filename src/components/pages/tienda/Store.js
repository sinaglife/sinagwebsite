import React from 'react'
import ProductGallery from "./ProductGallery"
import FilterBar from "./FilterBar"

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
    return (
        <div>
            <FilterBar/>
            {logo ? logo 
            :<h1>{param}</h1> 
            }
            <ProductGallery data={list} />
        </div>
    )
}

export default Store
