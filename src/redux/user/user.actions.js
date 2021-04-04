import {userTypes} from "./user.types"


export const singInStart = ()=>{
    return {
        type: userTypes.SING_IN_START
    }        
}


export const singInSuccess = (user)=>{
    return {
        type: userTypes.SING_IN_SUCCESS,
        payload: user
    }
}


export const singInFailure = (error)=>{
    return{
        type: userTypes.SING_IN_FAILURE,
        payload: error
    }
}

export const registerUserStart = ()=>{
    return{
        type: userTypes.REGISTER_START
    }
}

export const registerUserSuccess = (user)=>{
    return{
        type: userTypes.REGISTER_SUCCESS,
        payload: user
    }
}

export const registerUserFailure = (error)=>{
    return{
        type: userTypes.REGISTER_FAILURE,
        payload: error
    }
}
export const singOutStart = ()=>{
    return {
        type: userTypes.SING_OUT_START
    }
}


export const singOutSuccess = ()=>{
    return {
        type: userTypes.SING_OUT_SUCCESS
    }
}


export const singOutFailure = (error)=>{
    return {
        type: userTypes.SING_OUT_FAILURE,
        payload: error
    }
}


