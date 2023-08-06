import React from 'react'
import {Box, Typography} from "@mui/material";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    error:{
width: "80%",
height:"auto",
margin: "auto",
objectPosition:"center 0%"
    }
})
function ErrorScreen() {
    const error = "https://i.stack.imgur.com/01tZQ.png"
    const classes = useStyles();
  return (
    <Box style={{display:"flex"}}>
    <Typography mt={2} md={2}>
        <Box><img src={error} alt="error" className={classes.error}/></Box>
    </Typography>
    </Box>
  )
}

export default ErrorScreen