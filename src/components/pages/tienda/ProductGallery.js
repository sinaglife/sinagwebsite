import React, {Fragment} from 'react'
import Product from "./Product"
import classes from "./Store.module.scss";

function ProductGalery({data}) {

  console.log(data)
    return (
        <Fragment>
          <div className={classes.product__container} >
            {
              data.map((item, index)=> (
              <Product
                url={item.acf.product_image1.url}
                key={index}
                title={item.acf.product_title}
                price={item.acf.product_price}
              />
              ))
            }
            
          </div>
    </Fragment>
    )
}

export default ProductGalery
