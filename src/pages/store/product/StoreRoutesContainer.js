import React  from 'react'
import Container from "./Container"
import Store from "./Store"
import Products from "./ProductDetails"
import Index from "./index"
import { Router} from "@reach/router";

const StoreRoutesContainer = ({isMenu}) => {

    return (
        <div>
            <Router>
                <Container render={(data)=> <Store  data={data}/>} path="/mala"/>
                <Container render={(data)=> <Store data={data}/>} path="/kokedamas"/>
                <Container render={(data)=> <Store data={data}/>} path="/colgantes"/>
                <Container render={(data)=> <Store  data={data}/>} path="/bolsos"/>
                <Container render={(data)=> <Store data={data}/>} path="/hombre"/>
                <Container render={(data)=> <Store data={data}/>} path="/ninos"/>
                <Container render={(data)=> <Store data={data}/>} path="/pendientes"/>
                <Container render={(data)=> <Store data={data}/>} path="/pulseras"/>
                <Index path="/tienda" />
                <Index path="/mujer" isMenu={isMenu}/>
                <Container render={(data)=> <Products  data={data}/>} path="/:x/productos/:id"/>
            </Router>
            
        </div>
    )
}



export default StoreRoutesContainer

