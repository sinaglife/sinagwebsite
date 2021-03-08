import React, {useState} from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import classes from "./Rating.module.scss"


const style={
  container: {
    fontSize: "auto",
  }
}

const  RatingComponent = ()=> {
  const [value, setValue] = useState(0);
 
  return (
    <div>
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
      
    </div>
  );
}

export default RatingComponent;

