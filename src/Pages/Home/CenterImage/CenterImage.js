import React, { Component } from "react";

import { Link } from "@reach/router";

import "./CenterImage.css";

class CenterImage extends Component {
  render() {
    return (
      <div className="center">
        <div className="center2">
          <p className="paragraph1">Inspirados en crear desde el alma...</p>
          <div className="buttonToBlog">
          <Link to='Blog'>
            <button>Blog</button>
          </Link>
          </div>
          <div className="btnToBlog"></div>
        </div>
      </div>
    );
  }
}

export default CenterImage;
