import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import {getSliderData} from "../../../utils/functions"
import Loading from "../../../components/Loading"
import classes from "./Slider.module.scss";

const SliderComponent = ({datoToSlider}) => {

  const [currentImage, setCurrentImage] = useState(0);
  const [visibleControls, setVisibleControls] = useState(true);
  const [sliderData, setSliderData] = useState([])

  const handleSelectImage = (selectedIndex, e) => {
    setCurrentImage(selectedIndex);
  };

  useEffect(()=>{
    if (window.innerWidth <= 767.98) {
        setVisibleControls(false)
    }
}, [visibleControls])


  useEffect(() => {    
      setSliderData( datoToSlider?.sort((a, b) => {
        return (
          parseInt(a.slug[a.slug.length - 1]) -
          parseInt(b.slug[b.slug.length - 1])
        );
      }))
      
  }, [sliderData, currentImage])

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
                src={item.acf.slide_image_big.url}
                alt={item.acf.slide_title}
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
                src={item.acf.slide_image_medium.url}
                alt={item.acf.slide_title}
              />
            </div>
            <div
              style={{
                display: window.innerWidth < 576 ? "block" : "none",
              }}
            >
              <img
                className="d-block w-100"
                src={item.acf.slide_image_small.url}
                alt={item.acf.slide_title}
              />
            </div>
            <Carousel.Caption>
              <h3 className={classes.sliderTitle}>
                {item.acf.slide_title}
              </h3>
              <p className={classes.sliderSubTitle}>
                {item.acf.slide_description}
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
      !sliderData || sliderData.length === 0 ? 
      <Loading/> :
      carousel 
      }
    </div>
  )
};

export default SliderComponent;
