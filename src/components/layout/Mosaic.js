import React, { Fragment, useState } from "react";
import classes from "./Mosaic.module.scss";
import ProductCard from "../product/ProductCard";
import ProductLigthBox from "../product/ProductLigthBox";

const Mosaic = (props) => {

  const [lightImgsArr, setLightImgsArr] = useState([]);
  const [showLightbox, setShowLightBox] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [productData, setProductData] = useState({
    title:"",
    price:0,
    alt:"",
    description:"",
  })

  const selectedImg = (i) => {
    const productAcf = props.data[i]?.acf;
    let lightBoxUrls = [];

    setProductData({
      title: productAcf["product_title"],
      price:  productAcf["product_price"],
      description:  productAcf["product_description"],
      alt:  productAcf["product_title"]
    })

    for(let key in productAcf){
      if(key.includes("product_image") && productAcf[key]){
        lightBoxUrls.push(productAcf[key].url);
      }
    
    }
    setLightImgsArr(lightBoxUrls);
    setShowLightBox(true);
    setShowBackdrop(true);
  }

  const closeLightBox = () => {
   
    setShowLightBox(false);
    setShowBackdrop(false);
  };

  const mosaicData = props.data.filter(
    (page) => page.parent === 5 && page.acf.product_showInMosaic
  )

  return (
    <Fragment>
      <div className={classes.mosaic}>
        {mosaicData.map((product, i) => {
          return (
          <>
            <ProductCard
              key={i}
              src={product.acf.product_image1.url}
              alt={product.acf.product_image1.alt}
              title={product.acf.product_title}
              price={product.acf.product_price}
              selectedImg={() => selectedImg(i)}
              />
          </>
          );
        })}
      </div>
      {showLightbox ? (
        <ProductLigthBox
          lightImgsArr={lightImgsArr}
          title={productData.title}
          description={productData.description}
          price={productData.price}
          show={showBackdrop}
          close={closeLightBox}
        />
      ) : null}
    </Fragment>
  );
};

export default Mosaic;
