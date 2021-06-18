import axios from "axios";


  export const getData = async (url, method, auth, data) => {

    const methods = ["get", "post"];

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
        console.log(url, error)
      }
    }
   
  }