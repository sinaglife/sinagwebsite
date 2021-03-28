import React from 'react'
import loading from "../../assets/images/loading.svg"

const style = {
    backgroundColor: "transparent",
    height: "100px",
    width: "100px",
    position: "absolute",
    top: "30%",
    left: "45%"

}
const Loading = () => {
    return (
        <div>
            <img style={style} src={loading} alt="loading"/>
        </div>
    )
}

export default Loading
