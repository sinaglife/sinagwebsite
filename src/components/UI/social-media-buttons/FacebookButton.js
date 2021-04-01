import React from "react";
import {FacebookShareButton} from "react-share";
import Button from "../button/Button"
       
export default function SocialMediaButtons(props) {
    const url = "https://www.sinaglife.com";
       return (
             <FacebookShareButton 
                url={url}
                quote={"CampersTribe - World is yours to explore"}
                hashtag="#probando"
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