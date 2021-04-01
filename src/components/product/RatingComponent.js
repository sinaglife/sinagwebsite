import React, {useState} from 'react';
import star from "../../assets/images/star.svg"
import classes from "./Rating.module.scss"

const  RatingComponent = ()=> {
  const [value, setValue] = useState(3);
 
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



/*

    <Box component="fieldset" mb={3} borderColor="transparent" >
        <Rating
          className={classes.rating__container}
          size="large"
          style={style.container}
          name="rating"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        
        />
      </Box>

*/