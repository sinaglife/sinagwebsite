import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";

function Slider() {
  const [sliderData, setSliderData] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [carousel, setCarousel] = useState(null);

  useEffect(() => {
    axios
      .get(`https://39570618.servicio-online.net/API/wp-json/wp/v2/pages`)
      .then((resp) => {
        const dataArray = resp.data.filter((page) => page.parent === 31);
        setSliderData(dataArray);
      });
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setCurrentImage(selectedIndex);
  };

  useEffect(() => {
    if (sliderData) {
      console.log(sliderData);

      let sortedData = sliderData.sort(function (a, b) {
        return (
          parseInt(a.slug[a.slug.length - 1]) -
          parseInt(b.slug[b.slug.length - 1])
        );
      });

      let carousel = (
        <Carousel
          activeIndex={currentImage}
          onSelect={handleSelect}
          interval={5000}
          wrap={true}
        >
          {sortedData.map((item, index) => {
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
                  <h3>{item.acf.slide_title}</h3>
                  <p>{item.acf.slide_description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      );

      setCarousel(carousel);
    }
  }, [currentImage, sliderData]);

  return <div>{carousel}</div>;
}

export default Slider;
