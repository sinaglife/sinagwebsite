import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import classes from "./Slider.module.scss";

const Slider = () => {
  const [sliderData, setSliderData] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [carousel, setCarousel] = useState(null);

  useEffect(() => {
    let api1 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=1`;
    let api2 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=2`;
    let api3 = `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=3`;

    const promise1 = axios
      .get(api1)
      .then((res) => {
        return res.data;
      })
      .catch((err) => []);
    const promise2 = axios
      .get(api2)
      .then((res) => {
        return res.data;
      })
      .catch((err) => []);
    const promise3 = axios
      .get(api3)
      .then((res) => {
        return res.data;
      })
      .catch((err) => []);

    Promise.all([promise1, promise2, promise3]).then((results) => {
      const data = results[0].concat(results[1]);
      data.concat(results[2]);
      setSliderData(data.filter((page) => page.parent === 134));
    });
  }, []);

  const wordpressRequest = (pageNumber, data) => {
    axios
      .get(
        `https://39570618.servicio-online.net/API/wp-json/wp/v2/pages/?per_page=100&page=${pageNumber}`
      )
      .then((res) => {
        console.log(res.data.concat(wordpressRequest(pageNumber + 1)));
        return res.data.concat(wordpressRequest(pageNumber + 1));
      })
      .catch((error) => {
        return false;
      });
  };

  const handleSelectImage = (selectedIndex, e) => {
    setCurrentImage(selectedIndex);
  };

  useEffect(() => {
    if (sliderData) {
      let sortedData = sliderData.sort((a, b) => {
        return (
          parseInt(a.slug[a.slug.length - 1]) -
          parseInt(b.slug[b.slug.length - 1])
        );
      });

      let carousel = (
        <Carousel
          activeIndex={currentImage}
          onSelect={handleSelectImage}
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
      );

      setCarousel(carousel);
    }
  }, [currentImage, sliderData]);
  return <div>{carousel}</div>;
};

export default Slider;
