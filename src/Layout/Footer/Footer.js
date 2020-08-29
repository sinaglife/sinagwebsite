import React from "react";
import { Link } from "@reach/router";

import Button from "../../components/UI/button/index";
import classes from "./Footer.module.scss";

const bottom = () => (
  <footer className={classes.Bottom}>
    <div className={classes.FooterSection1}>
      <p className={classes.FooterTitle}>Menú</p>
      <Link to="Tienda">
        <nav>Tienda</nav>
      </Link>
      <Link to="Japamalas">
        <nav>Japamalas</nav>
      </Link>
      <Link to="Kokedamas">
        <nav>Kokedamas</nav>
      </Link>
      <Link to="Blog">
        <nav>Blog</nav>
      </Link>
    </div>
    <div className={classes.FooterSection2}>
      <p className={classes.FooterTitle}>Sinag</p>
      <Link to="">
      <nav>Conócenos</nav>
      </Link>
      <Link to="">
      <nav>Tramitación de Envíos</nav>
      </Link>
      <Link to="">
      <nav>Política de Devoluciones</nav>
      </Link>
    </div>
    <div className={classes.FooterSection3}>
      <p className={classes.FooterTitle}>Contáctanos</p>
      <a
        href="https://api.whatsapp.com/send?phone=34641606832&text=Hola!!"
        target="blank"
      >
        <nav className={classes.IconWithText}>
          <Button
            className={classes.Whatsapp}
            icon="whatsapp"
            color="black"
            size="medium"
            padding="noPadding"
          />
          +34 690484893
        </nav>
      </a>
      <a href="mailto:sinaglife@gmail.com?Subject=Interesado%20en%20sus%20artes">
        <nav className={classes.IconWithText}>
          <Button icon="mail" color="black" size="medium" padding="noPadding" />
          sinaglife@gmail.com
        </nav>
      </a>

      <nav className={classes.IconWithText}>
        <a href="https://www.facebook.com/sinaglife" target="blank">
          <Button
            icon="facebooks"
            color="black"
            size="medium"
            padding="noPadding"
          />
        </a>
        <a href="https://www.instagram.com/accesoriossinaglife/" target="blank">
          <Button
            icon="insta"
            color="black"
            size="medium"
            padding="noPadding"
          />
        </a>
        {/* <Button
         icon="twit" color="black" size="medium" padding="noPadding" 
        /> */}
      </nav>
    </div>
  </footer>
);

export default bottom;
