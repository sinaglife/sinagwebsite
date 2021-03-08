import React from "react";
import classes from "./Footer.module.scss";
import { Link } from "@reach/router";
import Button from "../UI/button/Button";
import cometa from "./cometa.png"

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__leftSection}>
        <img src={cometa} alt="" />
        <p>
          En Sinag estamos comprometidos en
          cuidar el planeta tierra, el embalaje
          que acompaña a nuestras piezas es
          100% reciclado, respetando el medio
          ambiente.
        </p>
      </div>
      <div className={classes.footer__rightSection}>
        <div className={classes.footer__rightInfo}>
          <p className={classes.footer__title}>Información</p>
          <Link to="Conocenos" style={{ textDecoration: "none" }}>
            <nav>Conócenos</nav>
          </Link>
          <Link to="Tallas" style={{ textDecoration: "none" }}>
            <nav>Guía de tallas</nav>
          </Link>
          <Link to="TramitacionEnvios" style={{ textDecoration: "none" }}>
            <nav>Tramitación de Envíos</nav>
          </Link>
          <Link to="PreguntasFrecuentes" style={{ textDecoration: "none" }}>
            <nav>Preguntas Frecuentes</nav>
          </Link>
          <Link to="PoliticasPrivacidad" style={{ textDecoration: "none" }}>
            <nav>Política de Privacidad</nav>
          </Link>
          <Link to="politicaDeDevoluciones" style={{ textDecoration: "none" }}>
            <nav>Política de devoluciones</nav>
          </Link>  
          <Link to="PoliticaCookies" style={{ textDecoration: "none" }}>
            <nav>Política de cookies</nav>
          </Link>
        </div>
        
        <div className={classes.footer__rightInfo}>
          <p className={classes.footer__title}>Contáctanos</p>
          <a style={{ textDecoration: "none" }}
            href="https://api.whatsapp.com/send?phone=34625572710&text=¡Hola! Quisiera orientación con:"
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
              +34 625 57 27 10
            </nav>
          </a>
          <a style={{ textDecoration: "none" }} 
          href="mailto:sinaglife@gmail.com?Subject=Interesado%20en%20sus%20artes"
          >
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
            <a style={{ textDecoration: "none" }}
            href="https://www.facebook.com/sinaglife" target="blank"
            >
              <nav className={classes.icon}>
                <Button
                  icon="facebook"
                  color="black"
                  size="medium"
                  padding="noPadding"
                />
                @sinaglife
              </nav>
            </a>
            <a style={{ textDecoration: "none" }}
              href="https://instagram.com/sinaglife?igshid=16k76b9ah91xo"
              target="blank"
            >
              <nav className={classes.icon}>
                <Button
                  icon="insta"
                  color="black"
                  size="medium"
                  padding="noPadding"
                />
                @sinaglife 
              </nav>
            </a>
            <a style={{ textDecoration: "none" }}
              href="https://www.google.es/maps/place/Sinag+Life/@40.4169335,-3.7083759,16z/data=!3m1!4b1!4m5!3m4!1s0xd4227b3d4b9dbfb:0xd7bb3a32270f36d7!8m2!3d40.4169336!4d-3.7039985?hl=es&authuser=0"
              target="blank"
            >
              <nav className={classes.icon}>
                <Button
                  icon="marker"
                  color="black"
                  size="medium"
                  padding="noPadding"
                />
                Madrid,España 
              </nav>
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
