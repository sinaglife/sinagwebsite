import React, {useState} from 'react';
import star from "../../assets/images/star.svg"


const  RatingComponent = ()=> {
  const [value, setValue] = useState(3);
 
  const renderStars = Array(value).fill().map(()=>(
    <img style={{width: "30px"}} alt="star" src={star}/>
  ))
  return (
    <div>
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