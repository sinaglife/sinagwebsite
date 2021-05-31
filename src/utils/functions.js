import axios from "axios";
import endpoints from "./endpoints"

export const getSliderData = async()=> {
 
  try {
    let response = await axios.get(`${endpoints.devBasePath}${endpoints.slider}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

  export const getProductData = async(param) => {
  
    try {
      let response = await axios.post(`${endpoints.devBasePath}${endpoints.products}`, {
        filerParam: param
      })
      return  response.data
    } catch (error) {
      console.log("there was an error with the products api")
    }
  }

  export const getMosaicData = async () => {
    try {
      let result = await axios.post("http://localhost:4003/api/products")

      return result.data.data.filter((item) => (
        item.categories.some((product)=> (
          product.name.toLowerCase().includes("mosaico")
        ))
      ))

    } catch (error) {
      console.log(error)
    }
  
  }   

   
  export const getData = async (url, method, auth) => {

    const methods = ["get", "post"];

    if(methods.includes(method)){
      try {
        let response = await axios({
          method: method,
          url: url,
          auth: auth ? auth : null,
        })

        return response.data;
      
      } catch (error) {
        console.log(url, error)
      }
    }
   
  }