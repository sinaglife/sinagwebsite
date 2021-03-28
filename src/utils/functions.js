import axios from "axios";
   
    const getData = async(path) =>{
        let response = await axios.get(path)
        return await response.data
    }

export default  async function getProductData(){
        let api1 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=1`;
        //let api2 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=2`;
        //let api3 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=3`;
    
        try {
            //let result = await Promise.all([getData(api1), getData(api2), getData(api3)]);
           let result = await getData(api1)
            return result
        } catch (error) {
            console.log(error)
        }
    }

//export const products = getProducts();

