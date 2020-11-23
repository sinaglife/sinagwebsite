import React, {Fragment, useState, useEffect} from 'react';
import classes from "./Mosaic.module.scss";
import axios from "axios";
import LightBox from "./LightBox";

const Mosaic = (props) => {

    const [mosaicData, setMosaicData] = useState(null);

    const [lightImgsArr, setLightImgsArr] = useState([]);

    const [showLightbox, setShowLightBox] = useState(false);

    const [showBackdrop, setShowBackdrop] = useState(false);


    useEffect(()=>{
        axios
        .get(`https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100`)
        .then((resp)=>{
            let dataArray = resp.data.filter(
                (page) => page.parent === 5 && page.acf.product_showInMosaic
            );
            setMosaicData(dataArray);
            console.log(dataArray);
        });
    }, []);

    const selectedImg = (i) =>{
        const productAcf = mosaicData[i].acf;

        let lightBoxUrls = [];

        for(let key in productAcf){
            if(key.includes("product_image") && productAcf[key]) {
                lightBoxUrls.push(productAcf[key].url);
            }
        }
        setLightImgsArr(lightBoxUrls);
        setShowLightBox(true);
        setShowBackdrop(true);
    };

    const closeLightBox = ()=>{
        setShowLightBox(false);
        setShowBackdrop(false);
    };

    return (
        <Fragment>
            <div className={classes.mosaic}>
            {mosaicData ?
             mosaicData.map((product, i) => {
                return (
                    <div key={i} className={classes.image}>
                        <img
                        src={product.acf.product_image1.url}
                        onClick={()=> selectedImg(i)}
                        alt={product.acf.product_image1.alt}
                         />
                    </div>
                );
            }) : null}
            </div>
            {showLightbox ? (
                <LightBox 
                lightImgsArr={lightImgsArr}
                showLightbox={showLightbox}
                closeLightbox={() => closeLightBox()}
                show={showBackdrop}
                />
            ) : null}
        </Fragment>
    );
};

export default Mosaic
