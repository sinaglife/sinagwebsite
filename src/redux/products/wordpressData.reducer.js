//import  { productTypes }  from "./products.types" 

//const initialState = {
//    loading: false,
//    data: [],
//    error: "",  
//}

//export const wordpressDataReducer = (state = initialState, action)=> {
//    console.log("funciona o no", action.type)
//    switch(action.type){
//        case productTypes.FETCH_DATA_REQUEST:
//            return {
//                ...state,
//                loading: true
//            }
//        case productTypes.FETCH_DATA_SUCCESS:
//            return {
//                ...state,
//                loading: false,
//                wordpressData: action.payload
//            }
//        case productTypes.FETCH_DATA_FAILURE:
//            return {
//                ...state,
//                loading: false,
//                wordpressData: [],
//                error: action.payload
//            }
//        default:
//            return state;
//    }
//}

