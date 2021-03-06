import React, {useState} from 'react';
import star from "../../../../assets/images/star.svg"
import classes from "./Rating.module.scss"

const  RatingComponent = ({rating})=> {
  const [value, setValue] = useState(5);
 //parseInt(rating)
  const renderStars = Array(value).fill().map(()=>(
    <img  alt="star" src={star}/>
  ))
  return (
    <div className={classes.rating__container}>
      {
      renderStars
      }
    </div>
  );
}

export default RatingComponent;


