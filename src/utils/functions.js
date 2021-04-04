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


/*
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

