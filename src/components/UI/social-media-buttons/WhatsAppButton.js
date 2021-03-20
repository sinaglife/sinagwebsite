import React from "react";
import {WhatsappShareButton} from "react-share";
import Button from "../button/Button"
       
export default function SocialMediaButtons(props) {
    const url = "https://www.sinaglife.com";
  
       return (
             <WhatsappShareButton 
                url={url}
                quote={"CampersTribe - World is yours to explore"}
                hashtag="#probando"
                >
                 <Button
                    icon="whatsapp"
                    color="black"
                    size="medium"
                    padding="noPadding"
                /> 
              </WhatsappShareButton>
       );
}