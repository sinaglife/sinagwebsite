import React from 'react'

function Banner (props) {
  const bannerData = props.data.filter(
    (page) => page.parent === 1869 && page.slug === "taller-banner"
  )[0];

  const clickHandler = () => {
    console.log("click") // Llevar a la pag de taller
  }

  return (
    <div onClick={()=>clickHandler()} style={{cursor: "pointer"}}>
      <div
        style={{
          display: window.innerWidth >= 992 ? "block" : "none",
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
    </div>
  )
}

export default Banner;