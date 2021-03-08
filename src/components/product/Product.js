import React, {useState, useEffect} from 'react'
import Button from "../UI/button/Button"
import FilterBySize from "./FilterBySize"
import Quantity from "./Quantity"
import RatingComponent from "./RatingComponent"
import classes from "./Product.module.scss"

const Product = ({location}) => {
  
   const [x , setX] = useState(0);
   const [sizeChoice, setSizeChoice] = useState("")
   const data = location.state.productData;
   const imagesArr = location.state.lightImgsArr;


   useEffect(() => {
    if(data.title.includes("Colgante"))
    setSizeChoice("colgante")
    else if(data.title.includes("Anillo"))
    setSizeChoice("anillo")
    else if(data.title.includes("Pulsera"))
    setSizeChoice("pulsera")
    else 
    setSizeChoice("")
}, [data.title])

   const renderImages = imagesArr.map((item, index)=>(              
    <img src={item} key={index} onClick={()=>getMainImg(index)} alt="imagen"/>
))

const getMainImg = (index)=> {
    setX(index)
}

const goLeft = ()=> {
    if(x === 0){
        setX(imagesArr.length-1)
    }else{
        setX(x - 1)
    }
}

const goRight = ()=> {
    if(x === imagesArr.length-1){
        setX(0)
    }else{
        setX(x +1)
    }  
}

    return (
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
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                </div>
                <div className={classes.product__right__center}>
                    <div className={classes.product__info}>
                        <p>{data.price}$</p>
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
                        <a href="http://localhost:3000/productos/1"  >GUIA DE TALLAS</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
