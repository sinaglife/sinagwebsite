import React, {memo, useState} from 'react';
import star from "../../../../assets/images/star.svg"
import classes from "./Rating.module.scss"

const  RatingComponent = memo(function RatingComponent({rating}){

  const [value, setValue] = useState(5);
 //parseInt(rating)
  const renderStars = Array(value).fill().map((item, index)=>(
    <img key={index} alt="star" src={star}/>
  ))
  return (
    <div className={classes.rating__container}>
      {
      renderStars
      }
    </div>
  );
})

export default RatingComponent;


