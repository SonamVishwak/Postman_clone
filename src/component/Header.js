import React from 'react'
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
logo:{
    width:100,
    padding:5
}
})
function Header() {
    const classes = useStyles();
    const logo= "https://miro.medium.com/max/802/1*dLWPk_rziSpWhPx1UWONbQ@2x.png";
  return (
   <img src={logo} alt='logo' className={classes.logo}/>
  )
}

export default Header