import {basketTypes}  from "./basket.types" 

export const addProductToBasket = (product, qty)=>({
    type: basketTypes.ADD_PRODUCT,
    payload:{
        product,
        qty
    } 
})

export const removeProductFromBasket = (product)=>({
    type: basketTypes.REMOVE_PRODUCT,
    payload:product 
})

export const removeAllFromBasket = ()=>({
    type: basketTypes.REMOVE_ALL
})