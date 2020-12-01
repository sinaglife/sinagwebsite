import React, { useState, useEffect, Fragment } from "react";
import classes from "./Pulseras.module.scss";
import axios from "axios";
import Product from "../tienda/Product";
import LightBox from "../../layout/LightBox";

const Pulseras = () => {
  const [productData, setProductData] = useState();
  const [showLightbox, setShowLightBox] = useState(false);
  const [lightImgsArr, setLightImgsArr] = useState([]);
  const [showBackdrop, setShowBackdrop] = useState(false);

  useEffect(() => {
    let api1 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=1`;
    let api2 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=2`;
    let api3 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=3`;

    const promise1 = axios
      .get(api1)
      .then((res) => {
        return res.data;
      })
      .catch((err) => []);
    const promise2 = axios
      .get(api2)
      .then((res) => {
        return res.data;
      })
      .catch((err) => []);
    const promise3 = axios
      .get(api3)
      .then((res) => {
        return res.data;
      })
      .catch((err) => []);

    Promise.all([promise1, promise2, promise3]).then((results) => {
      const data = results[0].concat(results[1]);
      data.concat(results[2]);
      setProductData(
        data.filter(
          (page) => page.parent === 5 && page.acf.product_showInPulseras
        )
      );
    });
  }, []);

  const selectedImg = (i) => {
    const productData_Acf = productData[i].acf;

    let lightBoxImgsArr = [];

    for (let key in productData_Acf) {
      if (key.includes("product_image") && productData_Acf[key]) {
        lightBoxImgsArr.push(productData_Acf[key].url); 
      }
    }
    setLightImgsArr(lightBoxImgsArr);
    setShowLightBox(true);
    setShowBackdrop(true);
  };

  const closeLightBox = () => {
    setShowLightBox(false);
    setShowBackdrop(false);
  };
  return (
    <Fragment>
      <h1 className={classes.main__title}>PULSERAS</h1>
      <div className={classes.pulseras}>
        {productData
          ? productData.map((product, i) => {
              return (
                <div className={classes.pulserasProduct}>
                  <Product
                    key={i}
                    onClick={() => selectedImg(i)}
                    title={product.acf.product_title}
                    desc={product.acf.product_description}
                    url={product.acf.product_image1.url}
                    price={product.acf.product_price}
                  />
                </div>
              );
            })
          : null}
        {showLightbox ? (
          <div>
            <LightBox
              lightImgsArr={lightImgsArr}
              showLightbox={showLightbox}
              closeLightbox={() => closeLightBox()}
              show={showBackdrop}
            />
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default Pulseras;