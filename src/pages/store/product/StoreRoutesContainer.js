import React, {useState, useEffect}  from 'react'
import Store from "./Store"
import {getProducts} from "../../../redux/products/products.actions"
import Products from "./ProductDetails"
import Index from "./index"
import { connect } from 'react-redux'
import {
    Switch,
    Route
  } from "react-router-dom";

const StoreRoutesContainer = ({isMenu, products, getProducts}) => {

    useEffect(()=> {
        getProducts()   
   }, [])

    return (
        <div>
            <Switch> 
                <Route path="/mala">
                    <Store />    
                </Route>
                <Route  path="/kokedamas">
                    <Store />
                </Route>
                {
                    products && products.length > 0 &&
                    <Route path="/:x/productos/:id">
                        <Products  data={products}/>
                    </Route>
                    
                }
                    
                    
                <Route  component={Store} path="/colgantes"/>
                <Route  component={Store} path="/hombre"/>
                <Route  component={Store} path="/ninos"/>
                <Route  component={Store} path="/pendientes"/>
                <Route  component={Store} path="/pulseras">
                    <Store data={products}/>
                </Route>
                <Route  component={Store} path="/anillos"/>
                <Route  component={Store} path="/complementos"/>
                <Route  component={Store} path="/cuidado-de-tu-ser"/>
                <Route  component={Store} path="/espiritualidad"/>
                <Route component={Index} path="/tienda" />
                <Route render={()=> <Index isMenu={isMenu}/>} path="/mujer" />
            </Switch>
            
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


export default connect(mapStateToProps, mapDispatchToProps)(StoreRoutesContainer)

/*
 <Route render={(data)=> <Products  data={data}/>} path="/:x/productos/:id"/>

*/