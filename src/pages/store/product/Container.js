import React, { useEffect} from 'react'
import Loading from "../../../components/Loading"
import {getProducts} from "../../../redux/products/products.actions"
import { connect } from 'react-redux'
import axios from "axios"

const Container = ({render, products, getProducts}) => {
  const param = (window.location.pathname).replace("/", "").toLowerCase().trim();
  console.log(param)
    useEffect(()=> {
         //axios({
         // method: "get",
         // url: "https://39570618.servicio-online.net/API/wp-json/wc/v2/products/",
         // auth:{
         //   username: "ck_f80844a27bd42c0423659df39d3968c2908ca8f0",
         //   password: "cs_1f62d919eddc2913d6443098981bf1f41d1d089d"
         // },
         //}).then(response => console.log(response.data))
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
