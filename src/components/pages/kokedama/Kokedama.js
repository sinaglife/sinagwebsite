import React,{useState, useEffect, Fragment} from 'react';
import classes from "./Kokedama.module.scss";
import axios from "axios";
import Product from "../tienda/Product";
import LightBox from '../../layout/LightBox';


const Kokedama = ()=> {

    const [kokeData, setKokeData] = useState();
    const [showLightbox, setShowLightBox] = useState(false);
    const [lightImgsArr, setLightImgsArr] = useState([]);
    const [showBackdrop, setShowBackdrop] = useState(false);

  
    useEffect(()=>{
        axios
        .get(`https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100`)
        .then((resp)=>{
            
            let dataArray = resp.data.filter(
                (page) =>  page.parent === 5 && page.acf.product_showInkokedama
            );
            setKokeData(dataArray);
            console.log(dataArray);
        })
        .catch(err=>{
            console.log(`there was an error: ${err}`);
            return null;
        });
    }, []);

    const selectedImg = (i)=>{
        const koke_productAcf = kokeData[i].acf;

        let lightBoxImgsArr = [];

        for(let key in koke_productAcf){
            if(key.includes("product_image")){
                lightBoxImgsArr.push(koke_productAcf[key].url);//&& koke_productAcf[key]
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
            <h1 className={classes.main__title}>KOKEDAMA</h1>
            <div className={classes.kokedama}>
            {
            kokeData ?
            kokeData.map((product, i)=>{
                return(
                    <div className={classes.kokedamaProduct}>
                        <Product
                            key={i}
                            onClick={()=> selectedImg(i)}
                            title={product.acf.product_title}
                            desc={product.acf.product_description}
                            url={product.acf.product_image1.url}
                            price={product.acf.product_price}/>
                    </div>
                )
            })
            :null}
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

export default Kokedama
