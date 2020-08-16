import React, { Component } from "react";
// import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import { Router } from "@reach/router";

import "./App.css";
import Aux from "./hoc/Auxi";
import Header from "./components/Header/Header";
import WordpressMosaic from "./components/WordpressMosaic/WordpressMosaic";
import WordpressSlider from "./components/WordpressSlider/WordpressSlider";
import WordpressBlog from "./components/WordpressBlog/WordpressBlog";
import WordpressPost from "./components/WordpressBlog/WordpressPost/WordpressPost";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Tienda from "./Pages/Tienda/Tienda";
import Japamalas from "./Pages/Japamalas/Japamalas";
import Kokedamas from "./Pages/Kokedamas/Kokedamas";
import Blog from "./Pages/Blog/Blog";
import SideDrawer from "./components/Header/Toolbar/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    imgMosaicOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  mosaicImgDisplayClickHandler = () => {
    this.setState((prevState) => {
      return { imgMosaicOpen: !prevState.imgMosaicOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
    this.setState({ imgMosaicOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    if (this.state.imgMosaicOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <Aux>
        <div>
          <Header clickDrawerButton={this.drawerToggleClickHandler} />
          <SideDrawer
            show={this.state.sideDrawerOpen}
            closeSideDrawer={this.backdropClickHandler}
          />
          {backdrop}

          <div className="contentBox">
            <Router>
              <Home
                path="/"
                showingBackdrop={!this.state.imgMosaicOpen}
                clickMosaic={this.mosaicImgDisplayClickHandler}
              />
              <Tienda path="/Tienda" />
              <Japamalas path="/Japamalas" />
              <Kokedamas path="/Kokedamas" />
              <Blog path="/Blog" />
              <WordpressMosaic path="/wordpressmosaic" />
              <WordpressSlider path="/wordpressslider" />
              <WordpressBlog path="/wordpressblog" />
              <WordpressPost path="/blog/:slug" />
            </Router>
          </div>

          <Footer />
        </div>
      </Aux>
    );
  }
}

export default App;
