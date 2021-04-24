import React, {Fragment} from 'react'
import Product from "./Product"
import classes from "./Store.module.scss";

function ProductGalery({data}) {
    return (
        <Fragment>
          <div className={classes.product__gallery__container} >
            {
              data.length > 0 ?
              data.map((item, index)=> (
              <Product
                productData={item}
                key={index}
              />
              ))
              : <h1>No hay productos que coincidan</h1>
            }
            
          </div>
    </Fragment>
    )
}

export default ProductGalery;
