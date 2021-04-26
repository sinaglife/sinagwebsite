import React from 'react'
import {Link} from '@reach/router'
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


import classes from './tienda.module.scss'


function Tienda  ({isMenu, bottomMenu}) {
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
      alt: "NINOS"
    },
    {
      name: "CUIDADO DE TU SER",
      image: Cuidado,
      alt: "CUIDADO DE TU SER"
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

  const subMenuArray = [
    {
      name: "PULSERAS",
      image: Pulseras,
      alt: "PULSERAS"
    },
    {
      name: "ANILLOS",
      image: anillos,
      alt: "ANILLOS"
    },
    {
      name: "COLGANTES",
      image: Colgantes,
      alt: "COLGANTES"
    },
    {
      name: "PENDIENTES",
      image: Pendientes,
      alt: "PENDIENTES"
    }
  ]

  const renderTienda = menuArray.map((item, index) => {
    return (
      <Link key={index} to={`/${item.alt.toLocaleLowerCase()}`}> 
        <div className={classes.card}>
          <p>{item.name}</p>
          <div className={classes.button_image}>
            <img src={item.image} alt={item.alt}/>
          </div>
        </div>
     </Link>
    )
  })

  const renderMujer = subMenuArray.map((item, index) => {
    return (
      <Link key={index} to={`/${item.name.toLocaleLowerCase()}`}> 
        <div className={classes.card}>
          <p>{item.name}</p>
          <div className={classes.button_image}>
            <img src={item.image} alt={item.alt}/>
          </div>
        </div>
     </Link>
    )
  })

  

  return(

    <div className={classes.tienda__container}>
      <div className={classes.menu}>
        {
          isMenu ? 
          renderMujer
          :
          renderTienda
        }
      </div>
      { !isMenu && bottomMenu}
    </div>
  )
}

export default Tienda

