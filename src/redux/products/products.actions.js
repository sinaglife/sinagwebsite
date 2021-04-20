import {productTypes}  from "./products.types" 
import {getProductData} from "../../utils/functions"

//export const getProducts = ()=>{
//    return (dispatch)=>{
//       try {
//            dispatch(getProductsRequest())
//            getProductData().then(data => dispatch(getProductsSuccess(data)))
//       } catch (error) {
//           dispatch(getProductsFailure(error.message))
//       }
//        
//    }
//}
//export const getFromWordpress = ()=>{
//    return async(dispatch) => {
//        try {
//            dispatch(getDataRequest())
//            let data = await getProductsFromWord()
//            dispatch(getDataSuccess(data))
//        } catch (error) {
//            dispatch(getDataFailure(error.message))
//        }
//    }
//}
//

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

export const getDataRequest = () => {
    return {
        type: productTypes.FETCH_DATA_REQUEST
    }
}

export const getDataSuccess = data => {
    return {
        type: productTypes.FETCH_DATA_SUCCESS,
        payload: data
    }
}

export const getDataFailure = error => {
    return {
        type: productTypes.FETCH_DATA_FAILURE,
        payload: error
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


