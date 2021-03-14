import React, {Fragment} from 'react'
import Product from "./Product"

function ProductGalery({data}) {

  console.log(data)
    return (
        <Fragment>
          <div >
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
