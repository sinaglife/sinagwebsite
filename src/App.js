import React, { useState, lazy, Suspense } from 'react';
import { Router} from "@reach/router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Register from "./pages/registro_singIn/Register";
import SingIn from "./pages/registro_singIn/SingIn";
import ForgotPassword from "./pages/registro_singIn/ForgotPassword";
import StripeContainer from "./pages/checkout/payment/StripeContainer";

import './App.css';

const Container = lazy(()=>import("./pages/store/product/Container"))
const MainBasket = lazy(()=>import("./pages/basket/MainBasket"))
const Blog = lazy(()=> import("./pages/blog/Blog"))
const BlogPost = lazy(()=> import("./pages/blog/BlogPost"))
const Conocenos = lazy(()=> import("./pages/info-pages/Conocenos"))
const GuiaTallas = lazy(()=> import("./pages/GuiaTallas"))
const Backdrop = lazy(()=> import("./components/Backdrop"))
const SideDrawer = lazy(()=> import('./components/SideDrawer'))
const StoreRoutesContainer = lazy(()=>import("./pages/store/product/StoreRoutesContainer"))
const InfoRoutesContainer = lazy(()=> import("./pages/info-pages/InfoRoutesContainer"))
const Checkout = lazy(()=>import("./pages/checkout/Checkout"))


const App = ()=> {

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(true);

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
              <Conocenos path="/conocenos"/>
              <GuiaTallas path="/tallas"/>
              <Register path="/nuevo-usuario"/>
              <SingIn path="entrar"/>
              <ForgotPassword path="olvido-contrasena"/>
              <StripeContainer path="pago"/>
              <MainBasket path="/cesta"/>
              <Checkout path="/checkout"/>
            </Router>
            <InfoRoutesContainer/>
            <StoreRoutesContainer isMenu={isMenu}/>
          </div>
        <div className="app__footer">
        <Footer/>
        </div>
      </div>
    </Suspense>
  );
}

export default App;  