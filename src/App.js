import React, { useState, lazy, Suspense } from 'react';
import { Router, Link } from "@reach/router";
import Header from "./components/header/Header";
import SideDrawer from './components/layout/SideDrawer';
import Backdrop from "./components/layout/Backdrop";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home";
import Blog from "./components/pages/blog/Blog";
import BlogPost from "./components/pages/blog/BlogPost";
import Conocenos from "./components/pages/info-pages/Conocenos";
import GuiaTallas from "./components/pages/GuiaTallas";
import TramitacionEnvios from "./components/pages/info-pages/TramitacionEnvios";
import PoliticaCookies from './components/pages/info-pages/PoliticaCookies';
import PreguntasFrecuentes from './components/pages/info-pages/PreguntasFrecuentes';
import PoliticasPrivacidad from './components/pages/info-pages/PoliticasPrivacidad';
import PoliticasDevoluciones from './components/pages/info-pages/PoliticasDevoluciones';
import Products from "./components/product/Product";
import Store from "./components/pages/tienda/Store";
import kokeLogo from "./assets/images/koketropic-logo.jpeg";
import Index from "./components/pages/tienda/index";
import Register from "./components/pages/registro_singIn/Register";
import SingIn from "./components/pages/registro_singIn/SingIn";
import ForgotPassword from "./components/pages/registro_singIn/ForgotPassword";
import StripeContainer from "./components/payment/StripeContainer"

import './App.css';

const Container = lazy(()=>import("./components/pages/tienda/Container"))
const MainBasket = lazy(()=>import("./components/basket/MainBasket"))
const App = ()=> {

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  const isMenu = true;


  const sideDrawerOpenHandler = () =>{
    setSideDrawerOpen(true)
    setShowBackdrop(true)
  };

  const sideDrawerCloseHandler = () =>{
    setSideDrawerOpen(false)
    setShowBackdrop(false)
  };


  let sideDrawer;
  let backdrop;
  

  if(sideDrawerOpen){
    sideDrawer = <SideDrawer open={sideDrawerOpen}  close={sideDrawerCloseHandler} />
    backdrop = <Backdrop show={showBackdrop} close={sideDrawerCloseHandler}/>
  };

 
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className="app">
        <div className="app__header">
          <Header 
          open={sideDrawerOpenHandler}
          />
        </div>
          {sideDrawer}
          {backdrop}
          <div className="app__body" >
            <Router>
              <Blog path="/blog" />
              <BlogPost path="blog/:slug" />
              <Container render={(data)=> <Home  data={data}/>} path="/"/>
              <Container render={(data)=> <Store data={data}/>} path="/colgantes"/>
              <Container render={(data)=> <Store  data={data}/>} path="/bolsos"/>
              <Container render={(data)=> <Store data={data}/>} path="/hombre"/>
              <Container render={(data)=> <Store  data={data}/>} path="/mala"/>
              <Container render={
                (data)=> <Store 
                logo={
                <img className="koketropic__logo" alt="koketropic-logo" src={kokeLogo}/>
                } data={data}/>} path="/kokedamas"
              />
              <Container render={(data)=> <Store data={data}/>} path="/ninos"/>
              <Container render={(data)=> <Store data={data}/>} path="/pendientes"/>
              <Container render={(data)=> <Store data={data}/>} path="/pulseras"/>
              <Index path="/tienda" bottomMenu={
                <div className="tallas">
                <p>Conoces tú talla? </p>
                <Link to="/tallas" style={{ textDecoration: "none" }}>
                  <h2>Guía de tallas</h2>
                </Link>
              </div>
              }/>
              <Index path="/mujer" isMenu={isMenu}/>
              <MainBasket path="/cesta"/>
              <Conocenos path="/conocenos"/>
              <TramitacionEnvios path="/tramitacion-envios"/>
              <GuiaTallas path="/tallas"/>
              <PoliticaCookies  path="/politica-cookies"/>
              <PoliticasDevoluciones  path="/politica-de-devoluciones"/>
              <PoliticasPrivacidad  path="/politicas-de-privacidad"/>
              <PreguntasFrecuentes  path="/preguntas-frecuentes"/>
              <Container render={(data)=> <Products  data={data}/>} path="/:x/productos/:id"/>
              <Register path="/nuevo-usuario"/>
              <SingIn path="entrar"/>
              <ForgotPassword path="olvido-contrasena"/>
              <StripeContainer path="pago"/>
            </Router>
          </div>
        <div className="app__footer">
        <Footer/>
        </div>
      </div>
    </Suspense>
  );
}

export default App;  