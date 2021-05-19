import React, { Fragment, useState } from "react";
import classes from "./Mosaic.module.scss";
import ProductCard from "../../store/product/components/ProductCard";
import ProductLigthBox from "../../store/product/components/ProductLigthBox";

const Mosaic = ({data}) => {

  const [lightImgsArr, setLightImgsArr] = useState([]);
  const [showLightbox, setShowLightBox] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [productData, setProductData] = useState([])
//const productImage = data?.images[0].src

  const selectedImg = (i) => {

    setProductData(data[i])
    setLightImgsArr(data[i].images.map((item)=>(
      item.src
    )))

    setShowLightBox(true);
    setShowBackdrop(true);
    
  }

  const closeLightBox = () => {
   
    setShowLightBox(false);
    setShowBackdrop(false);
  };

  const renderMosaicProducts =
      data?.map((product, i) => {
        if(i < 12){
          return (
            <div key={i} className={classes.mosaic__product}>
              <ProductCard
                key={i}
                data={product}
                selectedImg={() => selectedImg(i)}
                />
            </div>
          );
        }
       
      })

  return (
    <Fragment>
      <div className={classes.mosaic}>
        {renderMosaicProducts}
      </div>
      {showLightbox && (
        <ProductLigthBox
          show={showBackdrop}
          close={closeLightBox}
          productData={productData}
        />
      ) }
    </Fragment>
  );
};

export default Mosaic;
