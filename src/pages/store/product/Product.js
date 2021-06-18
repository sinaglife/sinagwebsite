import React, {useState, useEffect} from 'react';
import {Link } from "react-router-dom";
import classes from "./Product.module.scss";

const Product = ({productData}) => {
    const [imgToShow, setImgToShow] = useState([])
    const imgArray = productData.images.map((item)=>(
        item.src
    ));
  
    const altImg = productData.images[0].alt

    useEffect(()=>{
        setImgToShow(productData.images[0].src)
    }, [productData])

    const getImgToShow = ()=> {
        if(imgArray.length > 1){
            if(imgArray[1]){
                if(imgToShow === imgArray[1]){
                    setImgToShow(imgArray[0])
                }else{
                    setImgToShow(imgArray[1])
                }
            }
        }
    }
    return (
        <Link style={{ textDecoration: "none", color: "black" }}  
        to={{
            pathname: `/productos/${productData.id}`,
            state: productData
        }} 
        >
            <div  className={classes.product__container} >
                <img onMouseEnter={getImgToShow}
                    onMouseLeave={getImgToShow}
                    src={imgToShow} alt={altImg} 
                />
                <div className={classes.card__body}>
                    <h2 className={classes.card__title}>{productData.name}</h2>
                    <p className={classes.card__price} >{productData.price}€</p>
                </div>
            </div>
        </Link>
    )
}

export default Product;

