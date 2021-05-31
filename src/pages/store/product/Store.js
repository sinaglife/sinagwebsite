import React, {useEffect, useState} from 'react'
import ProductGallery from "./ProductGallery"
import FilterBar from "./components/FilterBar"
import kokeLogo from "../../../assets/images/koketropic-logo.jpeg";
import {useParams} from "react-router-dom";
//import Loading from "../../../components/Loading"

import classes from "./Store.module.scss";

const Store = ({
    data,
    loading
}) => {

    const [filterValue, setFilterValue] = useState("")
    const [productList, setProductList] = useState([])
    const {param} = useParams()
    const title = param.includes("-") ? param?.replace(/-/gi, " ") : param
console.log(param, title)
    useEffect(()=>{
        if(data && data.length > 0){
            setProductList(data?.filter((item)=>(
                item?.categories?.includes(title)
              )))
            
        }if(productList) console.log("store productss",productList, param)
    }, [data, param])
    
    return (
        <div>
            <FilterBar
            filterValue={filterValue}
            setFilterValue={setFilterValue}
            />
            {param === "kokedamas" ? <img className="koketropic__logo" alt="koketropic-logo" src={kokeLogo}/>
            :<h1 className={classes.store__title}>{title}</h1> 
            }
            {productList && <ProductGallery data={productList}/>}
        </div>
    )
}

export default Store

 
 