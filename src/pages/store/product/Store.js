import React, {useState, useEffect} from 'react'
import ProductGallery from "./ProductGallery"
import FilterBar from "./components/FilterBar"
import classes from "./Store.module.scss";

const Store = ({data, logo}) => {

    const [filterValue, setFilterValue] = useState("")
    const param = (window.location.pathname).replace("/", "").toLowerCase().trim();
    console.log(param)
    let list;
    
    const getProductsByCategory = (data)=> {
        let itemsByCategorie;
        
       itemsByCategorie = data?.filter((item)=>{
           return item.categories.some((product)=> (
            product.name.toLowerCase().includes(param)
            ))
        })
        return itemsByCategorie
    }
    

    list = getProductsByCategory(data)
   
    useEffect(()=>{
        list = getProductsByCategory()
        
        if(list)console.log("funciona",list)
    }, [list, param])

    //if(filterValue !== ""){
    //    list = list.filter((item)=>item.acf.product_title.toLowerCase().includes(filterValue.toLowerCase()))
    //}

    return (
        <div>
            <FilterBar
            filterValue={filterValue}
            setFilterValue={setFilterValue}
            />
            {logo ? logo 
            :<h1 className={classes.store__title}>{param}</h1> 
            }
            {list && <ProductGallery data={list} />}
        </div>
    )
}

export default Store

 
 