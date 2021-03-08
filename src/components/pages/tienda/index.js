import React from 'react'
import {Link} from '@reach/router'
import Mujer from '../../../assets/images/Tienda/Mujer.jpg'
import Hombre from '../../../assets/images/Tienda/Hombre.jpg'
import Ninos from '../../../assets/images/Tienda/Ninos.jpg'
import Cuidado from '../../../assets/images/Tienda/Cuidado.jpg'
import Complementos from '../../../assets/images/Tienda/Complementos.jpg'
import Espiritualidad from '../../../assets/images/Tienda/Espiritualidad.jpg'
import classes from './tienda.module.scss'
// import YellowLeaves from "../../../assets/images/Backgrounds/YellowLeaves.jpeg";

function Tienda  () {
  const menuArray = [
    {
      name: "MUJER",
      image: Mujer,
      alt: "MUJER"
    },
    {
      name: "HOMBRE",
      image: Hombre,
      alt: "HOMBRE"
    },
    {
      name: "NIÑOS",
      image: Ninos,
      alt: "NIÑOS"
    },
    {
      name: "CUIDADO DE TU SER",
      image: Cuidado,
      alt: "CUIDADO"
    },
    {
      name: "COMPLEMENTOS",
      image: Complementos,
      alt: "COMPLEMENTOS"
    },
    {
      name: "ESPIRITUALIDAD",
      image: Espiritualidad,
      alt: "ESPIRITUALIDAD"
    }
  ]
  return(
    <div>
      <div className={classes.tallas}>
        <p>Conoces tus tallas?: </p>
        <Link to="/Tallas" style={{ textDecoration: "none" }}>
          <h2>Guía de tallas</h2>
        </Link>
      </div>
      <div className={classes.menu}>
        {menuArray.map((item) => {
          return (
            <div className={classes.card}>
              <p>{item.name}</p>
              <div className={classes.button_image}>
                <img src={item.image} alt={item.alt}/>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tienda