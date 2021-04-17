import React from "react";
import {FacebookShareButton} from "react-share";
import Button from "../button/Button"
       
export default function SocialMediaButtons(props) {
  
    const url = window.location.href;
   
       return (
             <FacebookShareButton 
                url={url}
                quote="Inspirados en crear desde el alma"
                hashtag="#sinaglife"
                className="icon"
               >
               <Button
                  icon="facebook"
                  color="black"
                  size="small"
                  padding="noPadding"
               /> 
              </FacebookShareButton>
       );
}