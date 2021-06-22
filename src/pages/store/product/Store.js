import React, {useEffect, useState} from 'react'
import ProductGallery from "./ProductGallery"
import FilterBar from "./components/FilterBar"
import kokeLogo from "../../../assets/images/koketropic-logo.jpg";
import {useParams} from "react-router-dom";
import { connect } from 'react-redux'


import classes from "./Store.module.scss";

const Store = ({
    products
}) => {

    const {param} = useParams()
    const title = param.includes("-") ? param?.replace(/-/gi, " ") : param
    const [filterValue, setFilterValue] = useState("")
    const [productList, setProductList] = useState([])

    useEffect(()=>{
       setProductList(products?.filter((item)=>(
        item?.categories?.includes(title)
       )))

       if(filterValue !== "")
        setProductList(productList?.filter(item => (
        item?.name.toLowerCase().trim().includes(filterValue)
        )))
          if(filterValue !== "") console.log("store productss",productList, param, filterValue)
       
    }, [ param, filterValue])

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

const mapStateToProps = state => {
    return{
        products: state.product.products.data,
        loading: state.product.loading
    }
}


export default connect(mapStateToProps, null)(Store)

 
 