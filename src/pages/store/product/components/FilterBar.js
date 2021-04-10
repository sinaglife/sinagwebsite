import React from 'react'
//import { useFormik } from 'formik';
import SearchIcon from '@material-ui/icons/Search';
const styles = {
    div: {
        width: "100%",
        backgroundColor: "#efecdf",
        padding: "0.5rem",
        display: "flex",
        marginTop: "0.5rem",
    },
    form:{
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

const FilterBar = ({filterValue, setFilterValue}) => {

   
const handleChange = (e)=>{
    setFilterValue(e.target.value)
}

const handleSubmit = (e)=>{
   e.preventDefault()
   setFilterValue("")
}
    return (
        <div style={styles.div}>
            <form style={styles.form} onSubmit={handleSubmit}>
            <button type="submit" style={styles.button}>
                <SearchIcon /> 
            </button >
            <input 
            style={styles.input}
            onChange={handleChange}
            placeholder="filtrar"
            value={filterValue}
            name="filter" 
            id="filter"
            />
            </form>
        </div>
    )
}

export default FilterBar
