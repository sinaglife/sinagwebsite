import React, {useState} from 'react'
import ProductGallery from "./ProductGallery"
import FilterBar from "./FilterBar"
import classes from "./Store.module.scss";

const Store = ({data, logo}) => {
    const [filterValue, setFilterValue] = useState("")
    const param = (window.location.pathname).replace("/", "").toLowerCase().trim();
    let list = [];
    
    switch(param){
        case "mala":
            list = data.filter((page)=> page.parent === 5 && page.acf.product_showInMala);
            break;
        case "kokedamas":
            list = data.filter((page)=> page.parent === 5 && page.acf.product_showInkokedama);
            break;
        case "hombre":
            list = data.filter((page)=> page.parent === 5 && page.acf.product_showInHombre);
            break;
        case "ninos":
            list = data.filter((page)=> page.parent === 5 && page.acf.product_showInNiño);
            break;
        case "bolsos":
            list = data.filter((page) => page.parent === 5 && page.acf.product_showInBolso);
            break;
        case "colgantes" :
            list = data.filter((page) => page.parent === 5 && page.acf.product_showInColgantes);
            break;
        case "pendientes":
            list = data.filter((page) => page.parent === 5 && page.acf.product_showInPendientes);
            break;
        case "pulseras":
            list = data.filter((page) => page.parent === 5 && page.acf.product_showInPulseras);
            break;
        default:
            return null;
    }

    if(filterValue !== ""){
       
        list = list.filter((item)=>item.acf.product_title.toLowerCase().includes(filterValue.toLowerCase()))
    }

    return (
        <div>
            <FilterBar
            filterValue={filterValue}
            setFilterValue={setFilterValue}
            />
            {logo ? logo 
            :<h1 className={classes.store__title}>{param}</h1> 
            }
            <ProductGallery data={list} />
        </div>
    )
}

export default Store
