import { combineReducers } from 'redux';
import {productReducer} from "./products/products.reducer"
import {basketReducer} from "./basket/basket.reducer"


const rootReducer = combineReducers({
    product: productReducer,
    basket: basketReducer,
})

export default rootReducer;