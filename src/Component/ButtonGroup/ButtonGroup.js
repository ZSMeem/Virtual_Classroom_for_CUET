import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";


const buttons = [
  <Button sx={{ fontSize: "20px", textTransform:"none"}} key="one">
    Course Details
  </Button>,

  <Button sx={{ fontSize: "20px" }} key="three">
    Create New Post
  </Button>,
  <Button sx={{ fontSize: "20px" }} key="four">
    Result Publish
  </Button>,
  <Button sx={{ fontSize: "20px" }} key="five">
    Show my results
  </Button>,
  <Button sx={{ fontSize: "20px" }} key="six">
  Attendence Taking
</Button>,
];

export default function GroupOrientation(props) {
  return (
    <Paper
      sx={{
        marginTop: "7rem",
        position:"sticky",
        top:"7rem",
        display: "flex",
        "& > *": {
          m: 4,
        },
        

        justifyContent: "center",
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {buttons}
      </ButtonGroup>
    </Paper>
  );
}
