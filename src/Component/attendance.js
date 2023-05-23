import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Box, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import attendance from "./attendance";
import Attend from "./ct.json";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const my_styles = makeStyles({
  root: {
    height: 5,
    width: "100%",
    borderRadius: 5,
  },
  colorlow: {
    backgroundColor: "#E74C3C",
  },
  barColorlow: {
    backgroundColor: "#C70039",
  },
  colorlowHigh: {
    backgroundColor: "#FFC300",
  },
  barColorlowHigh: {
    backgroundColor: "#FF5733",
  },
  colorHighlow: {
    backgroundColor: "#48C9B0",
  },
  barColorHighlow: {
    backgroundColor: "#27AE60",
  },
  colorHigh: {
    backgroundColor: "#27AE60",
  },
  barColorHigh: {
    backgroundColor: "#196F3D",
  },
});

function Attendance() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = Attend.length;
  const classes = my_styles();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Paper sx={{ padding:2, maxWidth: 700, flexGrow: 1,backgroundColor:'#FFFBAC' }}>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {Attend.map((step, index) => (
          <div key={step.id}>
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Typography variant="body1" component="h2">
                {step.level}~{step.term}
              </Typography>
            </Paper>
            {Math.abs(activeStep - index) <= 8 ? (
              <Paper sx={{paddingLeft:2, paddingRight:2}}>
                {step.attendance.map((value) => (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ width: "100%", mr: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        classes={{
                          root: classes.root,
                          colorPrimary:
                            value < 25
                              ? classes.colorlow
                              : value < 50
                              ? classes.colorlowHigh
                              : value < 75
                              ? classes.colorHighlow
                              : classes.colorHigh,
                          barColorPrimary:
                            value < 25
                              ? classes.barColorlow
                              : value < 50
                              ? classes.barColorlowHigh
                              : value < 75
                              ? classes.barColorHighlow
                              : classes.barColorHigh,
                        }}
                        value={value}
                      />{" "}
                    </Box>
                    <Box sx={{ minWidth: 35 }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >{`${Math.round(value)}%`}</Typography>
                    </Box>
                  </Box>
                ))}
              </Paper>
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Paper>
  );
}

export default Attendance;
