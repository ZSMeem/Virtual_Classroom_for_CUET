import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Grid,
  Button,
  Typography,
  FormControl,
  Avatar,
  MenuItem,
} from "@mui/material";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { v4 as uuidv4 } from "uuid";
import Back from "../../Component/Back";
import NavBar from "../../Component/NavBar/App";

function student_item(props) {
  return (
    <MenuItem value={props.id} sx={{ paddingLeft: "20%", gap: "6px" }}>
      <Box sx={{ display: "flex", gap: "6px" }}>
        <Box>
          <Avatar sx={{ bgcolor: "red", height: "50px" }} variant="rounded">
            {props.name[0]}
          </Avatar>
        </Box>
        <Box sx={{}}>
          <Box>
            <Typography>{props.name}</Typography>
            <Typography>{props.id} </Typography>
          </Box>
        </Box>
      </Box>
    </MenuItem>
  );
}
const gradelist = [
  { grade: "A+", cg: "4" },
  { grade: "A", cg: "3.75" },
  { grade: "A-", cg: "3.5" },
  { grade: "B+", cg: "3.25" },
  { grade: "B", cg: "3" },
  { grade: "B-", cg: "2.75" },
  { grade: "C+", cg: "2.5" },
  { grade: "C", cg: "2.25" },
  { grade: "D", cg: "2" },
  { grade: "F", cg: "0" },
];
export default function BasicTextFields() {
  const [student, setStudent] = React.useState("");

  const [results, setResults] = React.useState({
    ct1: "",
    ct2: "",
    ct3: "",
    ct4: "",
    main_res: "",
  });

  const [studentlist, setStudentlist] = React.useState([
    { name: "Ashfaqur Rahman", id: "1804055" },
    { name: "Ashfaqur karin", id: "1804056" },
    { name: "Ashfaqur Saima", id: "1804057" },
  ]);
  const [error, setError] = React.useState(false);

  useEffect(()=>{

    //get the useState studentlist who are enrolled in this class

  },[])
  useEffect(()=>{

    // student useState has the id of the selected student try to get the previous result or have them all null
  },[student])
  

  const handleStudent = (e) => {
    setStudent(e.target.value);
  };
  const handleResults = (e) => {
    const p = {};

    p[e.target.name] = e.target.value;
    setResults({ ...results, ...p });
  };
  const handleForm = () => {
    if (!student) {
      setError(true);
    } else {
      setError(false);

      const p={...results}
      p['id']=student;
      // p['course_code'] from localStorage or by props
      console.log(p)
        //try to upload this p
      //upload the student result from useState student and result to the database
    }
  };
  return (
    <>
    <NavBar/>
    <Back/>
      <Box sx={{ width: "100%", height: "100vh", backgroundColor: "#fefaef" }}>
        
        <Box sx={{}}>
          <Typography sx={{ fontSize: "3rem", textAlign: "center" }}>
            Publish Result
          </Typography>
        </Box>
        <Grid container sx={{ marginTop: "50px", gap: "20px" }}>
          <Grid item xs={5} sx={{}}>
            <Typography
              textAlign="center"
              fontSize={"2rem"}
              sx={{ marginBottom: "10px" }}
            >
              {" "}
              People
            </Typography>
            <TextField
              label="Select Student"
              select
              sx={{ width: "60%", float: "right" }}
              value={student}
              onChange={handleStudent}
              helperText={
                error ? "Please select a student before submitting" : ""
              }
            >
              {studentlist.map((student) => {
                return student_item(student);
              })}
            </TextField>
          </Grid>
          <Grid item xs={5}>
            <Typography
              textAlign="center"
              fontSize={"2rem"}
              sx={{ marginBottom: "10px" }}
            >
              {" "}
              Result Assign
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <FormControl sx={{ gap: "10px", width: "40%" }}>
                <TextField
                  label="Ct Result 1"
                  name="ct1"
                  value={results.ct1}
                  onChange={handleResults}
                ></TextField>
                <TextField
                  label="Ct Result 2"
                  name="ct2"
                  value={results.ct2}
                  onChange={handleResults}
                ></TextField>
                <TextField
                  label="Ct Result 3"
                  name="ct3"
                  value={results.ct3}
                  onChange={handleResults}
                ></TextField>
                <TextField
                  label="Ct Result 4"
                  name="ct4"
                  value={results.ct4}
                  onChange={handleResults}
                ></TextField>
                <TextField
                  label="Select Grade"
                  select
                  fullWidth
                  value={results.main_res}
                  name="main_res"
                  onChange={handleResults}
                >
                  {gradelist.map((grade) => {
                    return (
                      <MenuItem key={uuidv4()} value={grade.cg}>
                        {grade.grade}
                      </MenuItem>
                    );
                  })}
                </TextField>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ paddingLeft: "57%", marginTop: "10px" }}>
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={handleForm}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}
