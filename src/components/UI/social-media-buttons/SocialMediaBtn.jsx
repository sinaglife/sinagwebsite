import React, {memo} from 'react'
import Button from "../button/Button"

const SocialMediaBtn = memo(
  function SocialMediaBtn({
    Component,
    url,
    quote,
    hashtag,
    icon,
    color,
    size,
    padding,
    onClick
  }) {


    return (
      <>
      {
        Component && 
        <Component
          url={url}
          quote={quote}
          hashtag={hashtag}
          className="icon">
          <Button
            icon={icon}
            color={color}
            size={size}
            padding={padding || "noPadding"}
            onClick={onClick || null}
          /> 
        </Component>
      }
      </>
    )
  })


export default SocialMediaBtn
