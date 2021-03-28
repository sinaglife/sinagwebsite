import React, {useState, useEffect} from 'react'
//import axios from "axios";
import Loading from "../../layout/Loading"
import getProductsData from "../../../utils/functions"
import {getProducts} from "../../../redux/products/products.actions"
import { connect } from 'react-redux'

const Container = ({render, products, getProducts}) => {

    //const [productData, setProductData] = useState([])

    useEffect(()=> {
         //getProductsData().then(data => setProductData(data) )
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

/*
 let api1 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=1`;
        let api2 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=2`;
        let api3 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=3`;
    
        const promise1 = axios
          .get(api1)
          .then((res) => {
            return res.data;
          })
          .catch((err) => []);
        const promise2 = axios
          .get(api2)
          .then((res) => {
            return res.data;
          })
          .catch((err) => []);
        const promise3 = axios
          .get(api3)
          .then((res) => {
            return res.data;
          })
          .catch((err) => []);
    
        Promise.all([promise1, promise2, promise3]).then((results) => {
          const data = results[0].concat(results[1]).concat(results[2])
           setProductData(data)
        });  

 let api1 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=1`;
        let api2 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=2`;
        let api3 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=3`;
    
        const promise1 = axios
          .get(api1)
          .then((res) => {
            return res.data;
          })
          .catch((err) => []);
        const promise2 = axios
          .get(api2)
          .then((res) => {
            return res.data;
          })
          .catch((err) => []);
        const promise3 = axios
          .get(api3)
          .then((res) => {
            return res.data;
          })
          .catch((err) => []);
    
        Promise.all([promise1, promise2, promise3]).then((results) => {
          const data = results[0].concat(results[1])
           setProductData(data)
        });  



*/