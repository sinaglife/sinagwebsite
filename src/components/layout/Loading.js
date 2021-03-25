import React from 'react'
import loading from "../../assets/images/loading.svg"

const Loading = () => {
    return (
        <div>
            <img style={{backgroundColor: "transparent"}} src={loading} alt="loading"/>
        </div>
    )
}

export default Loading
