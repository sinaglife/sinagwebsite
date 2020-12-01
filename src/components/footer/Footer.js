import React from "react";
import classes from "./Footer.module.scss";
import { Link } from "@reach/router";
import Button from "../UI/button/Button";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__leftSection}>
        <p className={classes.footer__title}>Menu</p>
        <Link to="Tienda" style={{ textDecoration: "none" }}>
          <nav>Tienda</nav>
        </Link>
        <Link to="Japamalas" style={{ textDecoration: "none" }}>
          <nav>Japamalas</nav>
        </Link>
        <Link to="Kokedamas" style={{ textDecoration: "none" }}>
          <nav>Kokedamas</nav>
        </Link>
        <Link to="Blog" style={{ textDecoration: "none" }}>
          <nav>Blog</nav>
        </Link>
      </div>
      <div className={classes.footer__centerSection}>
        <p className={classes.footer__title}>Sinag</p>
        <Link to="Conocenos" style={{ textDecoration: "none" }}>
          <nav>Conócenos</nav>
        </Link>
        <Link to="" style={{ textDecoration: "none" }}>
          <nav>Tramitación de Envíos</nav>
        </Link>
        <Link to="" style={{ textDecoration: "none" }}>
          <nav>Política de Privacidad</nav>
        </Link>
        <Link to="" style={{ textDecoration: "none" }}>
          <nav>Preguntas Frecuentes</nav>
        </Link>
      </div>
      <div className={classes.footer__rightSection}>
        <p className={classes.footer__title}>Contáctanos</p>
        <a
          href="https://api.whatsapp.com/send?phone=34641606832&text=Hola!!"
          target="blank"
        >
          <nav className={classes.icon}>
            <Button
              className={classes.whatsapp}
              icon="whatsapp"
              color="black"
              size="medium"
              padding="noPadding"
            />
            +34 645681265
          </nav>
        </a>
        <a href="mailto:sinaglife@gmail.com?Subject=Interesado%20en%20sus%20artes">
          <nav className={classes.icon}>
            <Button
              icon="mail"
              color="black"
              size="medium"
              padding="noPadding"
            />
            sinaglife@gmail.com
          </nav>
        </a>

        <nav className={classes.icon}>
          <a href="https://www.facebook.com/sinaglife" target="blank">
            <Button
              icon="facebook"
              color="black"
              size="medium"
              padding="noPadding"
            />
          </a>
          <a
            href="https://www.instagram.com/sinaglife_/?igshid=y8rc6un63ezh"
            target="blank"
          >
            <Button
              icon="insta"
              color="black"
              size="medium"
              padding="noPadding"
            />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
