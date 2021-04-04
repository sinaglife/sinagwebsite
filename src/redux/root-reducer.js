import { combineReducers } from 'redux';
import {productReducer} from "./products/products.reducer"
import {basketReducer} from "./basket/basket.reducer"
import {userReducer} from "./user/user.reducer"


const rootReducer = combineReducers({
    product: productReducer,
    basket: basketReducer,
    user: userReducer,
})

export default rootReducer;