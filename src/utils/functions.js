import axios from "axios";

export const getSliderData = async()=> {
  const api = "http://localhost:3001/data"
  try {
    let response = await axios.get(api)
    return await response.data
  } catch (error) {
    console.log(error)
  }
}

  export const getProductData = async() => {
    const api = "http://localhost:3001/products" 

    //const api = "https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=1";
    try {
      let response = await axios.post(api)
      return await response.data
    } catch (error) {
      console.log("there was an error with the products api")
    }
  }

  export const formatAmount = (amount)=> {
    let value = amount.toString();
console.log(value)
    if(value.indexOf(".") == -1){
      return value + ".00"
    }
    if(value.slice(value.indexOf("."), value.length).length === 1){
      return value + "0"
    }
  }

  //export const getProductsFromWord = async() => {
  //  const api1 = "https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=1";
  //  try {
  //      let result = await axios.post(api1)
  //       return await result.data
  //  } catch (error) {
  //       console.log("problema con los datos",error)
  //  }
  //
  //}
//export default  async function getProductData(){
//        let api1 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=1`;
//        //let api2 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=2`;
//        //let api3 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=3`;
//    
//        try {
//            //let result = await Promise.all([getData(api1), getData(api2), getData(api3)]);
//           let result = await getData(api1)
//            return result
//        } catch (error) {
//            console.log(error)
//        }
//}


/*
//let result = await Promise.all([getData(api1), getData(api2), getData(api3)]);
 axios.post("http://localhost:3001/products")
 let api1 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=1`;
        let api2 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=2`;
        let api3 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=3`;
    
        const promise1 = axios
          .get(api1)
          .then((res) => {
            return res.data;
          })
          .catch((err) => []);
        const promise2 = axios
          .get(api2)
          .then((res) => {
            return res.data;
          })
          .catch((err) => []);
        const promise3 = axios
          .get(api3)
          .then((res) => {
            return res.data;
          })
          .catch((err) => []);
    
        Promise.all([promise1, promise2, promise3]).then((results) => {
          const data = results[0].concat(results[1]).concat(results[2])
           setProductData(data)
        });  

 let api1 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=1`;
        let api2 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=2`;
        let api3 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=3`;
    
        const promise1 = axios
          .get(api1)
          .then((res) => {
            return res.data;
          })
          .catch((err) => []);
        const promise2 = axios
          .get(api2)
          .then((res) => {
            return res.data;
          })
          .catch((err) => []);
        const promise3 = axios
          .get(api3)
          .then((res) => {
            return res.data;
          })
          .catch((err) => []);
    
        Promise.all([promise1, promise2, promise3]).then((results) => {
          const data = results[0].concat(results[1])
           setProductData(data)
        });  



*/

