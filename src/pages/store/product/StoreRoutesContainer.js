import React  from 'react'
import Store from "./Store"
import Products from "./ProductDetails"
import Index from "./index"
import {
    Switch,
    Route
  } from "react-router-dom";

const StoreRoutesContainer = ({isMenu}) => {

    return (
        <div>
            <Switch>
                <Route  component={Store} path="/mala"/>
                <Route  component={Store} path="/kokedamas"/>
                <Route  component={Store} path="/colgantes"/>
                <Route  component={Store} path="/hombre"/>
                <Route  component={Store} path="/ninos"/>
                <Route  component={Store} path="/pendientes"/>
                <Route  component={Store} path="/pulseras"/>
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



export default StoreRoutesContainer

/*
 <Route render={(data)=> <Products  data={data}/>} path="/:x/productos/:id"/>

*/