import  { basketTypes }  from "./basket.types" 
import {addItemToBasket, removeItemFromBasket} from "../../utils/basket.utils"

const initialState = {
    basketItems: [],
}

export const basketReducer = (state = initialState, action)=>{
    switch(action.type){
        case basketTypes.ADD_PRODUCT:
            const{product, qty, size} = action.payload
            return{
                ...state,
                basketItems:addItemToBasket(state.basketItems, product, qty, size)
            };
        case basketTypes.REMOVE_PRODUCT:
            return{
                ...state,
                basketItems: removeItemFromBasket(state.basketItems, action.payload)
            };
        case basketTypes.REMOVE_ALL:
            return {
                ...state,
                basketItems: [],
            };
        default:
            return state;
    }
}
