import React from 'react'
import classes from "./Workshop.module.scss"
import {Link} from "react-router-dom";


const Wordkshop = () => {
  return (
    <div className={classes.workshop}>
      <img src="" alt=""/>
      <h1>Pagina en construccion</h1>
      <Link to="/menu" >Ir a tienda</Link>
    </div>
  )
}

export default Wordkshop
