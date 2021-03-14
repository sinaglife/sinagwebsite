import React from 'react'
import AnilloMovil from '../../../assets/images/GuiaTallas/AnilloMovil.jpeg'
import AnilloPC from '../../../assets/images/GuiaTallas/AnilloPC.jpeg'
import ColgantesMovil from '../../../assets/images/GuiaTallas/ColgantesMovil.jpeg'
import ColgantesPC from '../../../assets/images/GuiaTallas/ColgantesPC.jpeg'
import MunecahMovil from '../../../assets/images/GuiaTallas/MunecahMovil.jpeg'
import MunecahPC from '../../../assets/images/GuiaTallas/MunecahPC.jpeg'
import MunecamMovil from '../../../assets/images/GuiaTallas/MunecamMovil.jpeg'
import MunecamPC from '../../../assets/images/GuiaTallas/MunecamPC.jpeg'
import MunecaMovil from '../../../assets/images/GuiaTallas/MunecaMovil.jpeg'
import MunecaPC from '../../../assets/images/GuiaTallas/MunecaPC.jpeg'
import TobillerasMovil from '../../../assets/images/GuiaTallas/TobillerasMovil.jpeg'
import TobillerasPC from '../../../assets/images/GuiaTallas/TobillerasPC.jpeg'

const GuiaTallas = () => {

  const pcImages = [ColgantesPC, AnilloPC, MunecahPC, MunecamPC, MunecaPC, TobillerasPC]
  const movilImages = [ColgantesMovil, AnilloMovil, MunecahMovil, MunecamMovil, MunecaMovil, TobillerasMovil ]

  let imagesToShow;
  if (window.innerWidth < 576) {
    imagesToShow = movilImages
  } else {
    imagesToShow = pcImages
  }

  return (
    <div>
      {imagesToShow.map((image, index)=>{
        return (
          <img alt={`Tallas${index}`} src={image} style={{width: "90%", margin: "5%"}}/>
        )
      })}
    </div>
  )
}

export default GuiaTallas