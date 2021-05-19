import axios from "axios";

export const getSliderData = async()=> {
  const api = " https://sinag-api-2021.herokuapp.com/data"
  try {
    let response = await axios.get(api)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

  export const getProductData = async() => {
    const api = " https://sinag-api-2021.herokuapp.com/products" 

    //const api = "https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=1";
    try {
      let response = await axios.post(api)
      return  response.data
    } catch (error) {
      console.log("there was an error with the products api")
    }
  }

