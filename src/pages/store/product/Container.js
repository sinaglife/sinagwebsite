import React, { useEffect} from 'react'
import Loading from "../../../components/Loading"
import {getProducts} from "../../../redux/products/products.actions"
import { connect } from 'react-redux'

const Container = ({render, products, getProducts}) => {
  const param = (window.location.pathname).replace("/", "").toLowerCase().trim();
  console.log(param)
    useEffect(()=> {
         //axios({
         // method: "get",
         // url: "https://39570618.servicio-online.net/API/wp-json/wc/v2/products/",
         // auth:{
         //   username: "ck_7cc58d40d7ff38e74f65ea6438212722b128d309",
         //   password: "cs_88bf9e04f299532d2c81440bdfa279b409e478ff"
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
