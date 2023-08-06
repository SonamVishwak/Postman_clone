import React, { useState, useContext } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CreateTable from "./CreateTable";
import CreateJsonText from "./CreateJsonText";
import { DataContext } from "./context/DataProvider";
// componenet imported
const useStyles = makeStyles({
  componenet: {
    marginTop: 20,
  },
  tab:{
    textTransform:['none', "!important"]}
  }
);
function SelectTab() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const {paramsData, setParamData, headerData, setHeaderData}=useContext(DataContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className={classes.componenet}>
      <Tabs
        value={value}
        onChange={handleChange} 
        // textColor="none"
      >
        <Tab label="Params" className={classes.tab}/>
        <Tab label="Headers" className={classes.tab} />
        <Tab label="Body" className={classes.tab}/>
      </Tabs>
      <Box
        role="tabpanel"
        hidden={value !== 0}
        id={`simple-tabpanel-${0}`}
        aria-labelledby={`simple-tab-${0}`}
      >
        <CreateTable text={"Query Params"} 
        data={paramsData} setData = {setParamData}
        />
    
      </Box>
      <Box
        role="tabpanel"
        hidden={value !== 1}
        id={`simple-tabpanel-${1}`}
        aria-labelledby={`simple-tab-${1}`}
      >
        <CreateTable text={"Headers"}
        data={headerData} setData={setHeaderData}
        />
     
      </Box>
      <Box
        role="tabpanel"
        hidden={value !== 2}
        id={`simple-tabpanel-${2}`}
        aria-labelledby={`simple-tab-${2}`}
      >
       <CreateJsonText/>
      </Box>
    </Box>
  );
}

export default SelectTab;
