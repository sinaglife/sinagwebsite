import React, {useState} from 'react';
import { Link} from "@reach/router";
import classes from "./Product.module.scss";

const Product = ({productData}) => {
    const [imgToShow,setImgToShow] = useState(productData.images[0].src)
    const imgArray = productData.images.map((item)=>(
        item.src
    ));

    const getImgToShow = ()=> {
        console.log("hover", imgArray[0])
        if(imgArray[1]){
            if(imgToShow === imgArray[1]){
                setImgToShow(imgArray[1])
            }else{
                setImgToShow(imgArray[0])
            }
        }
    }
    return (
        <Link style={{ textDecoration: "none", color: "black" }}  to={`productos/${productData.id}`} >
            <div  className={classes.product__container} >
                <img onMouseEnter={getImgToShow}
                    onMouseLeave={getImgToShow}
                    src={imgArray[2]} alt="" 
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

