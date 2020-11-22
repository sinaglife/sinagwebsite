import React,{useState, useEffect, Fragment}  from 'react';
import classes from "./Niño.module.scss";
import axios from "axios";
import Product from "../tienda/Product";
import LightBox from "../../layout/LightBox";



const Niño = () => {
    const [productData, setProductData] = useState();
    const [showLightbox, setShowLightBox] = useState(false);
    const [lightImgsArr, setLightImgsArr] = useState([]);
    const [showBackdrop, setShowBackdrop] = useState(false);

    useEffect(()=>{
        axios
        .get(`https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100`)
        .then((res)=>{
            let dataArray = res.data.filter(
                (page)=> page.parent === 5 && page.acf.product_showInNiño
            );

            setProductData(dataArray);
            console.log(dataArray[1].acf);
        })
        .catch(err=>{
            console.log(`there was an error: ${err}`);
            return null;
        });
    }, []);

    const selectedImg = (i)=>{
        const productData_Acf = productData[i].acf;

        let lightBoxImgsArr = [];

        for(let key in productData_Acf){
            if(key.includes("product_image")){
                lightBoxImgsArr.push(productData_Acf[key].url);//&& koke_productAcf[key]
            }
        }
        setLightImgsArr(lightBoxImgsArr);
        setShowLightBox(true);
        setShowBackdrop(true);
    }

    const closeLightBox = ()=>{
        setShowLightBox(false);
        setShowBackdrop(false);
    };
    return (
        <Fragment>
            <h1 className={classes.main__title}>NIÑO</h1>
            <div className={classes.niño}>
                {
                productData ?
                productData.map((product, i)=>{
                    return (
                        <div className={classes.niñoProduct}>
                            <Product
                            key={i}
                            onClick={()=> selectedImg(i)}
                            title={product.acf.product_title}
                            desc={product.acf.product_description}
                            url={product.acf.product_image1.url}
                            price={product.acf.product_price}
                            /> 
                        </div>    
                    )
                })
                : null}
                {
                showLightbox ?  (
                <div>
                <LightBox 
                lightImgsArr={lightImgsArr}
                showLightbox={showLightbox}
                closeLightbox={() => closeLightBox()}
                show={showBackdrop}/>
                </div>
            ):null }
            </div>
        </Fragment>
    )
}


export default Niño;
