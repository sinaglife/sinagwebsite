import {auth, provider} from "../firebase.config"

import {
    singInStart,
    singInSuccess,
    singInFailure,
    singOutStart,
    singOutSuccess,
    singOutFailure,
    registerUserStart,
    registerUserSuccess,
    registerUserFailure,
} from "../redux/user/user.actions"

const logInWithGoogle =  () =>{
       return async (dispatch)=>{
        try {
            dispatch(singInStart())
            const user = await auth
                .signInWithPopup(provider);
                dispatch(singInSuccess(user))
          
        } catch (error) {
            dispatch(singInFailure(error))
        } 
       }
}

const logWithEmailAndPassword = (email, password)=>{
    
        return async (dispatch)=>{
            try {
                dispatch(singInStart())
                const user = await auth
                .signInWithEmailAndPassword(email, password);
                dispatch(singInSuccess(user))
          
            } catch (error) {
                dispatch(singInFailure(error))
                console.log(error)
            }
        }
    
}

const registerWithEmailAndPassword = (email, password)=>{
   
  return async(dispatch)=>{
    try {
        dispatch(registerUserStart())
        const user = await auth.createUserWithEmailAndPassword(email, password)
        dispatch(registerUserSuccess(user))
        
    } catch (error) {
        dispatch(registerUserFailure(error))
        console.log(error.message)
      }
  }
}

const passwordReset = (emailAddress)=>{
   try {
    auth.sendPasswordResetEmail(emailAddress).then(function() {
      })
   } catch (error) {
    console.log(error)
   }
}

const singOut = ()=>{
   return (dispatch)=>{
    try {
        dispatch(singOutStart())
        auth.signOut().then(() => {
            dispatch(singOutSuccess())
        })
    } catch (error) {
        dispatch(singOutFailure())
    }
   }
   
}

export {
    logInWithGoogle,
    logWithEmailAndPassword,
    registerWithEmailAndPassword,
    passwordReset,
    singOut
}