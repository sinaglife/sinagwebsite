import React from 'react';

import classes from './Backdrop.module.css';
import Button from "../UI/button/index";
import Auxi from '../../hoc/Auxi'

const  backdrop = props => (
    <Auxi>
<div className ={classes.backdrop} onClick={props.click}>
    </div>
    <div className={classes.closeIcon} onClick={props.click}>
        <Button  icon="close" color="white"/>
    </div>
    </Auxi>
);

export default backdrop;