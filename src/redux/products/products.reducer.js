import  { productTypes }  from "./products.types" 

const initialState = {
    loading: false,
    products: [],
    error: "",  
}


export const productReducer = (state = initialState, action)=> {
    console.log(action.payload, action.type);
    switch(action.type){
        case productTypes.FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case productTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                error: ""
            }
        case productTypes.FETCH_PRODUCTS_FAILURE:
            return{
                loading: false,
                products: [],
                error: action.payload
            }
       
        default:
            return state;
    }
}
