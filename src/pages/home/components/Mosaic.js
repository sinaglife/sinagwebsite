import React, { Fragment, useState } from "react";
import classes from "./Mosaic.module.scss";
import ProductCard from "../../store/product/components/ProductCard";
import ProductLigthBox from "../../store/product/components/ProductLigthBox";

const Mosaic = (props) => {

  const [lightImgsArr, setLightImgsArr] = useState([]);
  const [showLightbox, setShowLightBox] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [productData, setProductData] = useState([])

  const selectedImg = (i) => {
    const productAcf = mosaicData[i]?.acf;
   
    let lightBoxUrls = [];
    
    setProductData(mosaicData[i])

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
              data={product}
              selectedImg={() => selectedImg(i)}
              />
          </>
          );
        })}
      </div>
      {showLightbox ? (
        <ProductLigthBox
          lightImgsArr={lightImgsArr}
          show={showBackdrop}
          close={closeLightBox}
          productData={productData}
        />
      ) : null}
    </Fragment>
  );
};

export default Mosaic;
