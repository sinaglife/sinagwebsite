import React,{useState} from 'react'
import { useFormik } from 'formik';
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

const FilterBar = () => {

    const [filterValue, setFilterValue] = useState()

    const formik = useFormik({
        initialValues: {
            filter: "",
        },
        onSubmit: values =>{
            
            setFilterValue({
                ...filterValue,
                filter: values.filter
            })
            formik.resetForm()
        },
        
        validate: values =>{}
    })
    //const handleChange = (e)=>{
    //    console.log(e.target.value)
    //}
    return (
        <div style={styles.div}>
            <form style={styles.form} onSubmit={formik.handleSubmit}>
            <button type="submit" style={styles.button}>
                <SearchIcon /> 
            </button >
            <input 
            style={styles.input}
            onChange={formik.handleChange}
            placeholder="filtrar"
            value={formik.values.filter}
            name="filter" 
            id="filter"
            />
            </form>
        </div>
    )
}

export default FilterBar
