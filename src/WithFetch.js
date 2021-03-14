import React, {useState, useEffect} from "react"
import axios from "axios";

const WithFetch = (Component)=>{
    const NewComponent = (...props) =>{
        const [x, setX] = useState("hello")
        const [koke, setKoke] = useState([]);
        const [mala, setMala] = useState([]);
        const [hombre, setHombre] = useState([]);
        const [niño, setNiño] = useState([]);
        const [cuidado, setCuidado] = useState([]);
        const [espiritud, setEspiritud] = useState([]);
        const [complementos, setComplementos] = useState([]);
        const [data, setData] = useState([])

        useEffect(()=> {
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
              //const data = results[0].concat(results[1])
                setData(results[0].concat(results[1]))
              
              
            });
        }, [])

        return <Component
         {...props}
        data={data}
          //koke={koke}
          //mala={mala}
          //niño={niño}
          //hombre={hombre}
           x={x} y="guay"/>
    };
    
    return NewComponent;
  
};

export default WithFetch;