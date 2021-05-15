import React, {useState} from 'react'
import ProductGallery from "./ProductGallery"
import FilterBar from "./components/FilterBar"
import kokeLogo from "../../../assets/images/koketropic-logo.jpeg";
import Loading from "../../../components/Loading"

import classes from "./Store.module.scss";

const Store = ({data}) => {

    const [filterValue, setFilterValue] = useState("")
    const param = (window.location.pathname).replace("/", "").toLowerCase().trim();
    console.log(param)
    let list;
    const title = param.includes("-") ? param.replace(/-/gi, " ") : param

    const getProductsByCategory = (data)=> {
        let itemsByCategorie;
        
       itemsByCategorie = data?.filter((item)=>{
           return item.categories.some((product)=> (
            product.name.toLowerCase().includes(title)
            ))
        })
        if(filterValue !== "")
        return itemsByCategorie.filter((item)=>item.name.toLowerCase().includes(filterValue.toLowerCase()))
        else return itemsByCategorie
    }
    
    if(data && data.length > 0) list = getProductsByCategory(data)

    return (
        <div>
            <FilterBar
            filterValue={filterValue}
            setFilterValue={setFilterValue}
            />
            {param === "kokedamas" ? <img className="koketropic__logo" alt="koketropic-logo" src={kokeLogo}/>
            :<h1 className={classes.store__title}>{title}</h1> 
            }
            {list && <ProductGallery data={list} />}
        </div>
    )
}

export default Store

 
 