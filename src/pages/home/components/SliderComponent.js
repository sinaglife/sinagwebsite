import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Loading from "../../../components/Loading"
import classes from "./Slider.module.scss";

const SliderComponent = ({datoToSlider}) => {

  const [currentImage, setCurrentImage] = useState(0);
  const [visibleControls, setVisibleControls] = useState(true);
  const [sliderData, setSliderData] = useState(datoToSlider)

  const handleSelectImage = (selectedIndex, e) => {
    setCurrentImage(selectedIndex);
  };

  useEffect(()=>{
    if (window.innerWidth <= 767.98) {
        setVisibleControls(false)
    }
}, [visibleControls])


  let carousel =   (
    <Carousel
      activeIndex={currentImage}
      onSelect={handleSelectImage}
      interval={5000}
      wrap={true}
      controls={visibleControls}
    >
      {sliderData &&
      sliderData?.map((item, index) => {
        return (
          <Carousel.Item key={index}>
            <div
              style={{
                display: window.innerWidth >= 992 ? "block" : "none",
              }}
            >
              <img
                className="d-block w-100"
                src={item.bigImg}
                alt={item.title}
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
                src={item.mediumImg}
                alt={item.title}
              />
            </div>
            <div
              style={{
                display: window.innerWidth < 576 ? "block" : "none",
              }}
            >
              <img
                className="d-block w-100"
                src={item.smallImg}
                alt={item.title}
              />
            </div>
            <Carousel.Caption>
              <h3 className={classes.sliderTitle}>
                {item.title}
              </h3>
              <p className={classes.sliderSubTitle}>
                {item.subTitle}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  )
 
  return (
    <div>
      {
      !sliderData || sliderData?.length === 0 ? 
      <Loading/> :
      carousel 
      }
    </div>
  )
};

export default SliderComponent;
