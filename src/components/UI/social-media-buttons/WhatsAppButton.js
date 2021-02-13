import React from "react";
import {WhatsappShareButton, WhatsappIcon} from "react-share";
import Button from "../button/Button"
       
export default function SocialMediaButtons(props) {
    const url = "https://www.sinaglife.com";
    const style = {
        icon: {
            borderRadius : "20",
            width: "50"
        } 
    }
       return (
             <WhatsappShareButton 
                title ="titulo"
                separator=""
                borderRadius={20}
                round={true}
                size={36}
                iconFillColor="black"
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