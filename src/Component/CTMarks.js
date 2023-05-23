import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import styles from "../my_style.module.css";
import { Grid, Box, Paper, Typography } from "@mui/material";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import ct from "./ct.json";

function CT() {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedTerm, setSelectedTerm] = useState("");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        sx={{
          padding: 2,
          display: "flex",
          justifyContent: "start",
          backgroundColor:'#FFFBAC'
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Level</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={selectedLevel}
                  label="Level"
                  onChange={(e) => setSelectedLevel(e.target.value)}
                >
                  <MenuItem value="Level-I">Level-I</MenuItem>
                  <MenuItem value="Level-II">Level-II</MenuItem>
                  <MenuItem value="Level-III">Level-III</MenuItem>
                  <MenuItem value="Level-IV">Level-IV</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Term</InputLabel>
                <Select
                  placeholder="Term"
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={selectedTerm}
                  label="Term"
                  onChange={(e) => setSelectedTerm(e.target.value)}
                >
                  <MenuItem value="Term-I">Term-I</MenuItem>
                  <MenuItem value="Term-II">Term-II</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              {selectedLevel && selectedTerm && (
                <>
                  <Typography variant="body1" component="h2" sx={{ mt: 2, mb: 2, display:'flex', justifyContent:'center' }}>
                    {" "}
                    You have selected {selectedLevel} ~ {selectedTerm}.
                  </Typography>
                  <Paper>
                    {ct.map((step) => (
                      <div key={step.id}>
                        {step.level == selectedLevel &&
                        step.term == selectedTerm ? (
                          <TableContainer component={Paper}>
                            <Table
                              sx={{ minWidth: 650 }}
                              size="small"
                              aria-label="a dense table"
                            >
                              <TableHead>
                                <TableRow>
                                  <TableCell>Course Code</TableCell>
                                  <TableCell align="right">CT-1</TableCell>
                                  <TableCell align="right">CT-2</TableCell>
                                  <TableCell align="right">CT-3</TableCell>
                                  <TableCell align="right">CT-4</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {step.sub.map((course) => (
                                  <TableRow
                                    key={course.course}
                                    sx={{
                                      "&:last-child td, &:last-child th": {
                                        border: 0,
                                      },
                                    }}
                                  >
                                    <TableCell component="th" scope="row">
                                      {course.course}
                                    </TableCell>
                                    {course.mark.map((mark) => (
                                      <TableCell align="right">
                                        {mark}
                                      </TableCell>
                                    ))}
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        ) : null}
                      </div>
                    ))}
                  </Paper>
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default CT;
