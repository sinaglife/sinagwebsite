import React, {useState, useEffect, Fragment} from 'react'
import Button from "../UI/button/Button"
import FilterBySize from "./FilterBySize"
import Quantity from "./Quantity"
import RatingComponent from "./RatingComponent"
import { useParams } from "@reach/router"
import classes from "./Product.module.scss"

const Product = ({ data}) => {
    const [x , setX] = useState(0);
    const [product, setProduct] = useState()
    const [sizeChoice, setSizeChoice] = useState("")
    const [imagesArr, setImagesArr] = useState([])
    const title = product?.acf.product_title
    const description = product?.acf.product_description
    const price = product?.acf.product_price
    const param = useParams()
    const paramId = parseInt(param.id)



useEffect(() => {
    if(data && data.length > 0){
        let dataProduct = [];
        let imgBoxUrls = [];
        let sizeParam = "";
        dataProduct = data.find(element => element.id === paramId)
      if(dataProduct ){  
        if(dataProduct.acf["product_title"].includes("Colgante")){
            sizeParam = "colgante"
        }else if(dataProduct.acf["product_title"].includes("Anillo")){
            sizeParam = "anillo"
        }else if(dataProduct.acf["product_title"].includes("Pulsera")){
            sizeParam = "pulsera"
        }
      }
      
        setProduct(dataProduct)
        for(let key in dataProduct?.acf){
            if(key.includes("product_image") && dataProduct.acf[key]){
                imgBoxUrls.push(dataProduct.acf[key].url)
            }
        }
        setImagesArr(imgBoxUrls);
        setSizeChoice(sizeParam)
   
  } 
}, [data, paramId])



   const renderImages = imagesArr?.map((item, index)=>(              
    <img src={item} key={index} onClick={()=>getMainImg(index)} alt="imagen"/>
))

const getMainImg = (index)=> {
    setX(index)
}

const goLeft = ()=> {
    if(x === 0){
        setX(imagesArr.length - 1)
    }else{
        setX(x - 1)
    }
}

const goRight = ()=> {
    if(x === imagesArr.length - 1){
        setX(0)
    }else{
        setX(x +1)
    }  
}

    return (
            <Fragment>
            {
                product ?

                <div className={classes.product__main}>
                    <div className={classes.product__left}>
                        <div className={classes.product__left__imgs}>
               
                            {
                                imagesArr.length > 2 
                                ?
                                renderImages
                                :
                                <>
                                    <img src={imagesArr[0]} alt="" onClick={()=>getMainImg(0)}/>
                                    <img src={imagesArr[1]} alt="" onClick={()=>getMainImg(1)}/>
                                    <img src={imagesArr[0]} alt="" onClick={()=>getMainImg(0)}/>
                                </>
                            }
                    
                        </div>
                        <div className={classes.product__main__img}>
                            <button onClick={goLeft} className={classes.goLeft}>
                                <i className="fas fa-chevron-left"></i>
                            </button>  
                            <img src={imagesArr[x]} alt="#"/>
                            <button onClick={goRight}  className={classes.goRight}>
                                <i className="fas fa-chevron-right"></i>
                            </button>  
                        </div>
                    </div>
                    <div className={classes.product__right}>
                        <div className={classes.product__right__top}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                        <div className={classes.product__right__center}>
                            <div className={classes.product__info}>
                                <p>{price}$</p>
                                <div className={classes.info__buttons}>
                                    <Quantity/>
                                    {
                                        sizeChoice &&
                                        <FilterBySize sizeChoice={sizeChoice}/>
                                    }
                                </div>
                            </div>
                            <button className={classes.addToCart}>Agregar al carrito</button>
                        </div>
                        <div className={classes.product__right__bottom}>
                            <div className={classes.product__payment}>
                                <Button
                                    className={classes.visa}
                                    icon="visa"
                                    color="black"
                                    size="small"
                                    padding="noPadding"
                                />
                                <Button
                                    className={classes.masterCard}
                                    icon="masterCard"
                                    color="black"
                                    size="small"
                                    padding="noPadding"
                                />
                                <Button
                                    className={classes.payPal}
                                    icon="paypal"
                                    color="black"
                                    size="small"
                                    padding="noPadding"
                                />
                            </div>
                            <div className={classes.product__share}>
                                <div>
                                    <RatingComponent/>
                                </div>
                                <Button
                                    className={classes.shareButton}
                                    icon="share"
                                    color="black"
                                    size="medium"
                                    padding="noPadding"
                                />
                                <a href="http://localhost:3000/tallas"  >GUIA DE TALLAS</a>
                            </div>
                        </div>
                    </div>
                </div>
                : 
                <h3>Loading</h3>
            
            }
            
        </Fragment>
    )
}

export default Product
