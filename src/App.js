import React, { useState } from 'react';
import YellowLeaves from "./assets/images/Backgrounds/YellowLeaves.jpeg";
import { Router } from "@reach/router";
import Header from "./components/header/Header";
import SideDrawer from './components/layout/SideDrawer';
import Backdrop from "./components/layout/Backdrop";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home";
import Blog from "./components/pages/blog/Blog";
import BlogPost from "./components/pages/blog/BlogPost";
import Conocenos from "./components/pages/footer_choices/Conocenos";
import GuiaTallas from "./components/pages/GuiaTallas";
import TramitacionEnvios from "./components/pages/footer_choices/TramitacionEnvios";
import PoliticaCookies from './components/pages/footer_choices/PoliticaCookies';
import PreguntasFrecuentes from './components/pages/footer_choices/PreguntasFrecuentes';
import PoliticasPrivacidad from './components/pages/footer_choices/PoliticasPrivacidad';
import PoliticasDevoluciones from './components/pages/footer_choices/PoliticasDevoluciones';
import Products from "./components/product/Product"
import Store from "./components/pages/tienda/Store"
import Container from "./components/pages/tienda/Container"
import kokeLogo from "./assets/images/koketropic-logo.jpeg"
import Index from "./components/pages/tienda/index"
import './App.css';

const App = ()=> {

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

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
            <Conocenos path="/conocenos"/>
            <Home path="/"/>
            <Container render={(data)=> <Store  data={data}/>} path="/colgantes"/>
            <Container render={(data)=> <Store  data={data}/>} path="/bolsos"/>
            <Container render={(data)=> <Store  data={data}/>} path="/hombre"/>
            <Container render={(data)=> <Store  data={data}/>} path="/mala"/>
            <Container render={
              (data)=> <Store 
              logo={
              <img className="koketropic__logo" alt="koketropic-logo" src={kokeLogo}/>
              } data={data}/>} path="/kokedamas"
            />
            <Container render={(data)=> <Store  data={data}/>} path="/niño"/>
            <Container render={(data)=> <Store  data={data}/>} path="/pendientes"/>
            <Container render={(data)=> <Store  data={data}/>} path="/pulseras"/>
            <Index path="/tienda"/>
            <GuiaTallas path="/tallas"/>
            <PoliticaCookies  path="/politica-cookies"/>
            <PoliticasDevoluciones  path="/politica-de-devoluciones"/>
            <PoliticasPrivacidad  path="/politicas-de-privacidad"/>
            <PreguntasFrecuentes  path="/preguntas-frecuentes"/>
            <Products path="/productos/:id" />
            <TramitacionEnvios path="/tramitacion-envios"/>
          </Router>
        </div>
      <div className="app__footer">
      <Footer/>
      </div>
    </div>
  );
}

export default App;  