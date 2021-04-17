import React from "react";
import {WhatsappShareButton} from "react-share";
import Button from "../button/Button"
       
export default function SocialMediaButtons(props) {
   const url = window.location.href;
  
       return (
             <WhatsappShareButton 
                url={url}
                quote="Inspirados en crear desde el alma"
                hashtag="#sinaglife"
                >
                 <Button
                    icon="whatsapp"
                    color="black"
                    size="small"
                    padding="noPadding"
                /> 
              </WhatsappShareButton>
       );
}