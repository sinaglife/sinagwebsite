import React from 'react'
import loading from "../assets/images/loading.svg"

const style = {
    backgroundColor: "transparent",
    height: "80px",
    width: "80px",
    position: "absolute",
    top: "25%",
    left: "47%"

}
const Loading = () => {
    return (
        <div>
            <img style={style} src={loading} alt="loading"/>
        </div>
    )
}

export default Loading
