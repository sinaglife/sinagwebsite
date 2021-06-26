import {productTypes}  from "./products.types" 
import { getData} from "../../utils/functions"
import uri from "../../utils/uri.utils"

export const getProducts = ()=> {
    return async(dispatch)=>{
        try {
            dispatch(getProductsRequest())
            let products = await getData(
                `${uri.basePath}${uri.products}`,
                "post",
            )
            dispatch(getProductsSuccess(products))
        } catch (error) {
            dispatch(getProductsFailure(error.message))
        }
    }
}

export const getProductsRequest = ()=>{
    return {
        type: productTypes.FETCH_PRODUCTS_REQUEST
    }
}

export const getProductsSuccess = products =>{
    return {
        type: productTypes.FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const getProductsFailure = error =>{
    return {
        type: productTypes.FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}


