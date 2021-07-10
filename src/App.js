import React, {
   useState, 
   useEffect, 
   lazy, 
   Suspense
  } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {getData} from "./utils/functions"
import Loading from "./components/Loading"
import uri from "./utils/uri.utils"
import './App.css';
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary"

const MainBasket = lazy(()=>import("./pages/basket/MainBasket"))
const Blog = lazy(()=> import("./pages/blog/Blog"))
const BlogPost = lazy(()=> import("./pages/blog/BlogPost"))
const Conocenos = lazy(()=> import("./pages/info-pages/Conocenos"))
const GuiaTallas = lazy(()=> import("./pages/GuiaTallas"))
const Backdrop = lazy(()=> import("./components/Backdrop"))
const StoreRoutesContainer = lazy(()=>import("./pages/store/product/StoreRoutesContainer"))
const InfoRoutesContainer = lazy(()=> import("./pages/info-pages/InfoRoutesContainer"))
const Checkout = lazy(()=>import("./pages/checkout/Checkout"))
const Home = lazy(()=> import("./pages/home/Home"))
const Register = lazy(()=> import("./pages/registro_singIn/Register"))
const SingIn = lazy(()=> import("./pages/registro_singIn/SingIn"))
const ForgotPassword = lazy(()=> import("./pages/registro_singIn/ForgotPassword"))
const NewPassword = lazy(()=> import("./pages/registro_singIn/NewPassword"))
const UpdatePassword = lazy(()=> import("./pages/registro_singIn/UpdatePassword"))
const DropOut = lazy(()=> import("./pages/registro_singIn/DropOut"))
const StripeContainer = lazy(()=> import("./pages/checkout/payment/StripeContainer"))
const SideDrawer = lazy(()=> import('./components/SideDrawer'))
const Workshop = lazy(() => import("./pages/workshop/Workshop"))

const App = ()=> {

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(true);
  const [sliderData, setSliderData] = useState([])
  const [mosaicData, setMosaicData] = useState([])



  useEffect(()=>{
    getData(
      `${uri.basePath}${uri.slider}`, 
      "get"
      ).then((res)=> {
        setSliderData(res.data)
      })  
  }, [])

  useEffect(()=> {
    getData(
      `${uri.basePath}${uri.mosaic}`,
      "post",
      null,
      {
        categorie: "mosaico"
      }
    )
   .then((res)=> {
      setMosaicData(res.data)
    })
    
}, [])


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
    <Suspense fallback={<Loading/>}>
      <div className="app" >
        <div className="app__header">
          <Header
          open={sideDrawerOpenHandler}
          />
        </div>
          {sideDrawer}
          {backdrop}
          <ErrorBoundary>
            <div className="app__body" >
              <Switch>
                {
                  mosaicData && sliderData && 
                  <Home 
                  dataToMosaic={mosaicData.length > 0 && mosaicData} 
                  datoToSlider={sliderData.length > 0 && sliderData}  
                  exact path="/"
                  />
                }
                
                <Route exact path="/blog/:slug">
                  <BlogPost/>
                </Route>
                <Route exact  path="/blog" >
                  <Blog/>
                </Route>
                <Route exact path="/conocenos">
                  <Conocenos/>
                </Route>
              
                <Route exact path="/tallas">
                  <GuiaTallas />
                </Route>
                <Route exact path="/taller">
                  <Workshop />
                </Route>
                <Route exact path="/nuevo-usuario">
                  <Register/>
                </Route>
                <Route exact path="/entrar">
                  <SingIn />
                </Route>
                <Route exact path="/cambiar-contrasena/:token">
                  <UpdatePassword />
                </Route>
                <Route exact path="/olvido-contrasena">
                  <ForgotPassword />
                </Route>
                <Route exact path="/nueva-contrasena/:token">
                  <NewPassword />
                </Route>
                <Route exact path="/darme-de-baja">
                  <DropOut />
                </Route>
                <Route exact path="/pago">
                  <StripeContainer/>
                </Route>
                <Route exact  path="/cesta">
                  <MainBasket  />
                </Route>
                <Route exact path="/checkout">
                  <Checkout />
                </Route>  
              </Switch>
              <InfoRoutesContainer/>
              <StoreRoutesContainer />
            
            </div>
          </ErrorBoundary>
        <div className="app__footer">
        <Footer/>
        </div>
      </div>
    </Suspense>
  );
}

export default App;  