import axios from "axios";
import moment from 'moment';


  export const getData = async (url, method, auth, data) => {

    const methods = ["get", "post", "put"];

    if(methods.includes(method)){
      try {
        let response = await axios({
          method: method,
          url: url,
          auth: auth ? auth : null,
          data: data && data
        })

        return response.data;
      
      } catch (error) {
        throw new Error()
      }
    }
   
  }


export const getUserAge = (birthDate) => {
  const today = moment();
  const userAge = today.diff(birthDate, "years")
  return userAge
}