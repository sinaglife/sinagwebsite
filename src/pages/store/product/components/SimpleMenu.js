import React  from 'react';
import classes from "./SimpleMenu.module.scss"

export default function SimpleMenu({navChoices, navigateTo, navigate}) {


  return (
    <div className={classes.simpleMenu}>
      <ul>
        {
          navChoices.map((item, index)=>(
            <li
            className={classes.simpleMenu}
            key={index} 
            onClick={()=>navigate(`${navigateTo(item)}`)}
            >
              {item}
            </li>
          ))
        }
      </ul>
    </div>
  );
}
