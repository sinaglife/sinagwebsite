import React, {useState, useEffect, Fragment} from 'react'
import Button from "../../../components/UI/button/Button"
import FilterBySize from "./components/FilterBySize"
import Quantity from "./components/Quantity"
import RatingComponent from "./components/RatingComponent"
import { useParams } from "@reach/router"
import {addProductToBasket} from "../../../redux/basket/basket.actions"
import { useDispatch} from "react-redux"
import visa from "../../../assets/images/visa.svg"
import mastercard from "../../../assets/images/mastercard.svg"
import paypal from "../../../assets/images/paypal.svg"
import classes from "./ProductDetails.module.scss"

const Product = ({data}) => {
  
    const [x , setX] = useState(0);
    const [product, setProduct] = useState()
    const [sizeChoice, setSizeChoice] = useState("")
    const [imagesArr, setImagesArr] = useState(
  
    )
    const [quantity, setQuantity] = useState(1)
    const title = product?.name
    const description = ""
    const price = product?.price
    const rating = product?.average_rating
    const param = useParams()
    const paramId = parseInt(param.id)
    const dispatch = useDispatch()

    const goToBasket = (basket, x)=>{
        dispatch(addProductToBasket(basket, x))
        setQuantity(1)
    }
    const handleQuantityChange = (e)=>{
        let amount = parseInt(e.target.value)
        setQuantity(amount)
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        //let amount = parseInt(e.target.value)
        //console.log(e.target.value)
        e.target.reset()
    }


useEffect(() => {
    if(data && data.length > 0){
        let productData = [];
        let imgBoxUrls = [];
        productData = data.find(element => element.id === paramId)
      if(productData ){ 
          setImagesArr( productData.images?.map((item)=>(
            item.src
        )))
         
      }

    setProduct(productData)
   
} 
}, [data, paramId])



   const renderImages = imagesArr?.map((item, index)=>{
       if(index < 3) {
        return(              
            <img src={item} key={index} onClick={()=>getMainImg(index)} alt="imagen"/>
        )
       }
   })

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
                            {renderImages}
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
                                   <div className={classes.quantity}>
                                        <span>Cant</span>
                                        <Quantity 
                                        id={param}
                                        quantity={quantity}
                                        handleChange={handleQuantityChange}
                                        handleSubmit={handleSubmit}
                                        />
                                   </div>
                                    {
                                        sizeChoice &&
                                        <div className={classes.sizePicker}>
                                            <span>Talla</span>
                                            <FilterBySize sizeChoice={sizeChoice}/>
                                        </div>
                                    }
                                </div>
                            </div>
                            <button onClick={()=>goToBasket(product, quantity)} className={classes.addToCart}>Agregar al carrito</button>
                        </div>
                        <div className={classes.product__right__bottom}>
                            <div className={classes.product__payment}>
                                <img  alt="star" src={visa}/>
                                <img alt="star" src={mastercard}/>
                                <img alt="star" src={paypal}/>
                            </div>
                            <div className={classes.product__share}>
                                <div>
                                    <RatingComponent rating={rating}/>
                                </div>
                                
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
