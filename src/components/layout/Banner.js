import { StylesProvider } from '@material-ui/styles';
import React from 'react'
import { Link } from "@reach/router";


const style = {
  image:{
    small:{
      width: "500px"
    },
    desktop:{
      width: "100%",
      height: "400px",
      objectFit: "cover"
    }
  },
  button: {
    position:"absolute",
    bottom: "0",
    left:"570px",
    width: "15%",
    backgroundColor:"rgb(212, 212, 212)",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    textTransform: "uppercase",
    color: "black",
    border: "2.5px solid gray",
    cursor: "pointer",
    fontSize: "1rem",
  }
}
function Banner (props) {


  const bannerData = props.data.filter(
    (page) => page.parent === 1869 && page.slug === "taller-banner"
  )[0];

  return (
    <div style={{ position: "relative"}}>
      <div
        style={{
          display: window.innerWidth >= 992 ? "block" : "none",
        }}
      >
        <img
          style={style.image.desktop}
          src={bannerData.acf.banner_image_big.url}
          alt={bannerData.acf.banner_title}
        />
      </div>
      <div
        style={{
          display:
            window.innerWidth >= 576 && window.innerWidth < 992
              ? "block"
              : "none",
        }}
      >
        <img
          className="d-block w-100"
          src={bannerData.acf.banner_image_big.url}
          alt={bannerData.acf.banner_title}
        />
      </div>
      <div
        style={{
          display: window.innerWidth < 576 ? "block" : "none",
        }}
      >
        <img
          className="d-block w-100"
          src={bannerData.acf.banner_image_small.url}
          alt={bannerData.acf.banner_title}
        />
      </div>
      <Link to="taller">
        <h5 style={style.button}>Diseña Aqui</h5>
      </Link>
    </div>
  )
}

export default Banner;