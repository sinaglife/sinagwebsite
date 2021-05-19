import {productTypes}  from "./products.types" 
import {getProductData} from "../../utils/functions"

export const getProducts = ()=> {
    return async(dispatch)=>{
        try {
            dispatch(getProductsRequest())
            let products = await getProductData()
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


