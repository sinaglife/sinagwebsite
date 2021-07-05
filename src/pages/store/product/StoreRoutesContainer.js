import React, {useEffect}  from 'react'
import Store from "./Store"
import {getProducts} from "../../../redux/products/products.actions"
import Products from "./ProductDetails"
import Index from "./index"
import Loading from "../../../components/Loading"
import { connect } from 'react-redux'
import {
    Switch,
    Route,
  } from "react-router-dom";
import ErrorBoundary from "../../../components/errorBoundary/ErrorBoundary"


  const StoreRoutesContainer = ({isMenu, products, loading, getProducts}) => {

    useEffect(()=> {
        getProducts() 
       
   }, [getProducts])

    return (
        <ErrorBoundary>
            {
            loading || !products ?
            <Loading /> : products && products.length > 0 &&
            <Switch> 
                <Route exact path="/productos/:id">
                    <Products/>
                </Route>
          
                <Route exact path="/tienda/:param">
                    <Store />
                </Route>  
                <Route exact  path="/menu">
                    <Index/>   
                </Route>
                <Route  render={()=> <Index isMenu={isMenu}/>} exact path="/menu/mujer" />
            </Switch>
            }  
        </ErrorBoundary>
    )
}

const mapStateToProps = state => {
    return{
        products: state.product.products.data,
        loading: state.product.loading
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        getProducts: ()=> dispatch(getProducts()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StoreRoutesContainer)
