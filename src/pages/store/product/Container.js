import React, { useEffect} from 'react'
import Loading from "../../../components/Loading"
import {getProducts} from "../../../redux/products/products.actions"
import { connect } from 'react-redux'

const Container = ({render, products, getProducts}) => {
  //const param = (window.location.pathname).replace("/", "").toLowerCase().trim();

    useEffect(()=> {
         getProducts()    
    }, [])
  
    return (
        <div>
            {
            products && products.length > 0 ? 
             render(products)
            : <Loading/>
            }
        </div>
    )
}
const mapStateToProps = state => {
    return{
        products: state.product.products.data
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        getProducts: ()=> dispatch(getProducts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
