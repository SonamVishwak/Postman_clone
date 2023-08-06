import React from "react";
import { Box, Select, MenuItem, TextField, Button} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import { DataContext } from "./context/DataProvider";
const useStyles = makeStyles({
  select: {
    width: 150,
    height:40
  },
  textfield:{
    width:"100%",
    background:"#F6F6F6"
  },
  component:{
    display:"flex",
    alignItems:"center", 
    justifyContent: "space-between"
  }, 
  button:{
    width:100,
    height:40, 
    marginLeft:[5, "!important"]
  }
});
function Form() {
  const classes = useStyles();
  const {formData, setFormData} = useContext(DataContext);
  const handleChange = (e)=>{
setFormData({...formData, type: e.target.value})
// console.log(formData)
  }
  const onUrlChange = (e) =>{
    setFormData({...formData, url: e.target.value});
    // console.log(formData)
  }
  return (
    <Box className={classes.component}>
      <Select
        value={formData.type}
        onChange={(e)=>handleChange(e)}
        className={classes.select}
        label="POST"
      >
        <MenuItem value={"POST"} >
          POST
        </MenuItem>
        <MenuItem value={"GET"} >
          GET
        </MenuItem>
      </Select>
       <TextField size="small" className={classes.textfield} onChange={(e)=> onUrlChange(e)}/>
       <Button className={classes.button} variant="contained">Send</Button>
    </Box>
  );
}

export default Form;
