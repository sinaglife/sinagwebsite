import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
const styles = {
    div: {
        width: "100%",
        backgroundColor: "#efecdf",
        padding: "0.5rem",
        display: "flex",
    },
    input:{
        borderRadius: "0 5px 5px 0",
        border: "none",
        padding: "0.2rem"
    },
    button:{
        border: "none",
        backgroundColor: "white",
        borderRadius: " 5px 0 0 5px ",
        padding: "0.15rem"
    }
}

const FilterBar = () => {
    return (
        <div style={styles.div}>
            <button style={styles.button}>
                <SearchIcon /> 
            </button>
            <input style={styles.input} placeholder="filtrar" />
        </div>
    )
}

export default FilterBar
