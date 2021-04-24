import {userTypes} from "./user.types"


const initialState = {
    user: null,
    loading: false,
    error: ""
}

export const userReducer = (state = initialState, action)=>{
    console.log(action.payload)
        switch(action.type){
            case userTypes.SING_IN_START:
                return {
                    ...state,
                    loading: true
                }
            case userTypes.SING_IN_SUCCESS:
                //localStorage.setItem("user", JSON.stringify(action.payload.user))
                return{
                    ...state,
                    loading: false,
                    user: action.payload
                }
            case userTypes.SING_IN_FAILURE: 
                return{
                    ...state,
                    loading: false,
                    error: action.payload
                }
            case userTypes.SING_OUT_START:
                return{
                    ...state,
                    loading: true,
                }
            case userTypes.SING_OUT_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    user: null
                }
            case userTypes.SING_OUT_FAILURE:
                return{
                    ...state,
                    loading: false,
                    error: action.payload
                }
            case userTypes.REGISTER_START:
                return{
                    ...state,
                    loading: true,
                }
            case userTypes.REGISTER_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    user: action.payload
                }
            case userTypes.REGISTER_FAILURE:
                return{
                    ...state,
                    error: action.payload
                }
            default:
                return state;
        }

}