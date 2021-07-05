import React from 'react'
import {Link} from "react-router-dom";
import Mujer from '../../../assets/images/Tienda/Mujer.jpg'
import Hombre from '../../../assets/images/Tienda/Hombre.jpg'
import Ninos from '../../../assets/images/Tienda/Ninos.jpg'
import Cuidado from '../../../assets/images/Tienda/Cuidado.jpg'
import Complementos from '../../../assets/images/Tienda/Complementos.jpg'
import Espiritualidad from '../../../assets/images/Tienda/Espiritualidad.jpg'
import Pulseras from '../../../assets/images/Tienda/Pulseras.jpg'
import Colgantes from '../../../assets/images/Tienda/Colgantes.jpg'
import Pendientes from '../../../assets/images/Tienda/Pendientes.jpg'
import anillos from '../../../assets/images/Tienda/anillos-sinag.jpg'
import ErrorBoundary from "../../../components/errorBoundary/ErrorBoundary"
import classes from './tienda.module.scss'


function Tienda  ({isMenu}) {
  const menuArray = [
    {
      name: "MUJER",
      image: Mujer,
      path: "/menu/mujer"
    },
    {
      name: "HOMBRE",
      image: Hombre,
      path: "/tienda/hombre"
    },
    {
      name: "NIÑOS",
      image: Ninos,
      path: "/tienda/ninos"
    },
    {
      name: "CUIDADO DE TU SER",
      image: Cuidado,
      path: "/tienda/cuidado-de-tu-ser"
    },
    {
      name: "COMPLEMENTOS",
      image: Complementos,
      path: "/tienda/complementos"
    },
    {
      name: "ESPIRITUALIDAD",
      image: Espiritualidad,
      path: "/tienda/espiritualidad"
    }
  ]

  const subMenuArray = [
    {
      name: "PULSERAS",
      image: Pulseras,
      path: "/tienda/pulseras"
    },
    {
      name: "ANILLOS",
      image: anillos,
      path: "/tienda/anillos"
    },
    {
      name: "COLGANTES",
      image: Colgantes,
      path: "/tienda/colgantes"
    },
    {
      name: "PENDIENTES",
      image: Pendientes,
      path: "/tienda/pendientes"
    }
  ]

  const renderTienda = menuArray.map((item, index) => {
    return (
      <Link key={index} to={item.path}> 
        <div className={classes.tienda__card}>
          <p>{item.name}</p>
          <div className={classes.card__image}>
            <img src={item.image} alt={item.name}/>
          </div>
        </div>
     </Link>
    )
  })

  const renderMujer = subMenuArray.map((item, index) => {
    return (
      <Link key={index}  to={item.path}> 
        <div className={classes.isMenu__card}>
          <p>{item.name}</p>
          <div className={classes.card__image}>
            <img src={item.image} alt={item.name}/>
          </div>
        </div>
     </Link>
    )
  })

  

  return(
  <ErrorBoundary>
    <div className={classes.tienda__container}>
      <div className={classes.tienda__content}>
        {
          isMenu ? 
          <>
            {renderMujer}
           
          </>
          :
          <>
            {renderTienda}
            <div className={classes.tallas}>
              <p>¿Conóces tú talla?</p>
              <Link to="/tallas" style={{ textDecoration: "none" }}>
                <h2>Guía de tallas</h2>
              </Link>
            </div>
          </>
        }
      </div>
      
    </div>
  </ErrorBoundary>
  )
}

export default Tienda

