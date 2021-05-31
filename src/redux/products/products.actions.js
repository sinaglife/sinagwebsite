import {productTypes}  from "./products.types" 
import {getProductData, getData} from "../../utils/functions"
import endpoints from "../../utils/endpoints"

export const getProducts = ()=> {
    return async(dispatch)=>{
        try {
            dispatch(getProductsRequest())
            let products = await getData(
                `${endpoints.devBasePath}${endpoints.products}`,
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


