import { combineReducers } from 'redux';
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"
import {productReducer} from "./products/products.reducer"
import {basketReducer} from "./basket/basket.reducer"
import {userReducer} from "./user/user.reducer"

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["basket"]
}

const rootReducer = combineReducers({
    product: productReducer,
    basket: basketReducer,
    user: userReducer,
})

export default persistReducer(persistConfig, rootReducer);