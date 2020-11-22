import React, {Fragment, useState } from 'react';
import './App.css';
import { Router } from "@reach/router";
import Header from "./components/header/Header";
import SideDrawer from './components/layout/SideDrawer';
import Backdrop from "./components/layout/Backdrop";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home";
import Blog from "./components/pages/blog/Blog";
import BlogPost from "./components/pages/blog/BlogPost";
import Niño from "./components/pages/niño/Niño";
import SideDrawerTienda from "./components/pages/tienda/SideDrawerTienda";
import Kokedama from "./components/pages/kokedama/Kokedama";
import Mala from "./components/pages/mala/Mala";
import Hombre from "./components/pages/hombre/Hombre";
import Pulseras from "./components/pages/mujer/Pulseras";
import SideDrawerMujer from "./components/pages/tienda/SideDrawerMujer";
import Bolso from "./components/pages/mujer/Bolso";
import Colgantes from "./components/pages/mujer/Colgantes";
import Pendientes from "./components/pages/mujer/Pendientes";
import Conocenos from "./components/pages/footer_choices/Conocenos";

const App = ()=> {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [sideDrawerTiendaOpen, setSideDrawerTiendaOpen] = useState(false);
  const [sideDrawerMujerOpen, setSideDrawerMujerOpen] = useState(false);


  const sideDrawerOpenHandler = () =>{
    setSideDrawerOpen(true)
    setShowBackdrop(true)
  };

  const sideDrawerCloseHandler = () =>{
    setSideDrawerOpen(false)
    setShowBackdrop(false)
    setSideDrawerTiendaOpen(false)
    setSideDrawerMujerOpen(false)
  };

  const sideDrawerTiedaHandler = () =>{
    setSideDrawerTiendaOpen(true);
    setSideDrawerOpen(false);
  };

  const sideDrawerMujerHandler = ()=>{
    setSideDrawerTiendaOpen(false);
    setSideDrawerMujerOpen(true);
  }


  let sideDrawer;
  let backdrop;
  let sideDrawerTienda;
  let sideDrawerMujer;

  if(sideDrawerOpen){
    sideDrawer = <SideDrawer open={sideDrawerOpen} cerrar={sideDrawerTiedaHandler} close={sideDrawerCloseHandler} />
    backdrop = <Backdrop show={showBackdrop} close={sideDrawerCloseHandler}/>
  };

  if(sideDrawerTiendaOpen){
    sideDrawerTienda =  <SideDrawerTienda show={sideDrawerTiendaOpen} close={sideDrawerCloseHandler} showHandler={sideDrawerMujerHandler}/>
    backdrop = <Backdrop show={showBackdrop} close={sideDrawerCloseHandler}/>
  }

  if(sideDrawerMujerOpen){
    backdrop = <Backdrop show={showBackdrop} close={sideDrawerCloseHandler}/>
    sideDrawerMujer = <SideDrawerMujer show={sideDrawerMujerOpen} close={sideDrawerCloseHandler}/>
  }

  return (
    <Fragment>
      <div className="app">
          <Header 
          open={sideDrawerOpenHandler}
          />
          {sideDrawer}
          {backdrop}
          {sideDrawerTienda}
          {sideDrawerMujer}
          <div className="app__body">
            <Router>
              <Home path="/"/>
              <Niño path="/Nino"/>
              <Blog path="/Blog" />
              <BlogPost path="blog/:slug" />
              <Kokedama path="/Kokedamas"/>
              <Mala path="/Mala"/>
              <Hombre path="/Hombre"/>
              <Pulseras path="/Pulseras"/>
              <Bolso path="/Bolsos"/>
              <Colgantes path="/Colgantes"/>
              <Pendientes path="/Pendientes"/>
              <Conocenos path="/Conocenos"/>
            </Router>
          </div>
        <Footer/>
      </div>
    </Fragment> 
  );
}

export default App;
