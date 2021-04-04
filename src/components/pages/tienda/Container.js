import React, { useEffect} from 'react'
import Loading from "../../layout/Loading"
import {getProducts} from "../../../redux/products/products.actions"
import { connect } from 'react-redux'

const Container = ({render, products, getProducts}) => {

    useEffect(()=> {
         
         getProducts()
    }, [])
   

    return (
        <div>
            {
            products.products && products.products.length > 0 ? 
            render(products.products)
            : <Loading/>
            }
        </div>
    )
}
const mapStateToProps = state => {
    return{
        products: state.product
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        getProducts: ()=> dispatch(getProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
