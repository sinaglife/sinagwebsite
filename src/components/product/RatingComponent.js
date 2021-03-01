import React, {useState} from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import classes from "./Product.module.scss"

const styles = {
  iconHover:{
    color: "black"
  }
}
const  RatingComponent = ()=> {
  const [value, setValue] = useState(0);
 
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          className={classes.rating}
          name="rating"
          value={value}
          classes={styles.iconHover}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        
        />
      </Box>
      
    </div>
  );
}

export default RatingComponent;