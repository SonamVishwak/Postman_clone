import React from "react";
import Header from "./Header";
import Form from "./Form";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import SelectTab from "./SelectTab";
import Response from "./Responses";
import Responses from "./Responses";
import ErrorScreen from "./ErrorScreen";
const useStyles = makeStyles({
  component: {
    width:"50%", 
    margin: "20px auto 0 auto"
  }
});
function Home() {
  const classses = useStyles();
  return (
    <div>
      <Header />
      <Box className={classses.component}>
        <Form />
        <SelectTab/>
        {/* <Responses/> */}
        <ErrorScreen/>
      </Box>
    </div>
  );
}

export default Home;
