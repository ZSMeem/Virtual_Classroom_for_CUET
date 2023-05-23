import React, { useState } from "react";
import { Stack, Container, Box, Paper, Grid, Typography, useScrollTrigger } from "@mui/material";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import CGPA from "../../Component/cgpa";
import CT from "../../Component/CTMarks";
import Attendance from "../../Component/attendance";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import NavBar from "../../Component/NavBar/App";
import Back from "../../Component/Back";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Profile() {
  const uniqueEmail = localStorage.getItem("uniqueEmail");
  if(uniqueEmail=="")
  {
    alert("You are not Logged in!")
  }
  
  return (
    <>
      <div>
        <NavBar/>
      </div>
      <Back/>
      <div>
          <Container>
            <Paper>
            <Box sx={{ flexGrow: 1, padding: 5 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item sx={{backgroundColor:'#EAE0DA'}}>
                        <Box sx={{height:200, display:'flex', justifyContent:'center', alignItems:'end' ,paddingBottom:1, paddingTop:3 }}>
                            <Stack direction="row" spacing={2}>
                                <Avatar  sx={{ width: 200, height: 200 }} alt={localStorage.getItem("userName")} src={localStorage.getItem("userDP")} />
                            </Stack>
                            <Box sx={{ml:5 , textAlign:'left'}}>
                                <Typography variant="h3" gutterBottom sx={{color:'black'}}>{localStorage.getItem("userName")}</Typography>
                                <Typography variant="h6" gutterBottom>{localStorage.getItem("userBio")}</Typography>
                            </Box>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={1}>
                    <Grid item sm={8}>
                      <Item sx={{backgroundColor:'#F7F5EB'}}>
                        <Box sx={{display:'flex', textAlign:'left'}}>
                        <Grid container>
                            <Grid iterm xs={12}>
                            <Typography variant="h6" component="h6" sx={{ml:3}}>{localStorage.getItem("userName")}</Typography>
                            </Grid>
                            
                            {
                              (!localStorage.getItem("userTeacher"))?
                              <>
                              <Grid iterm xs={12}>
                              <Typography variant="body1" component="h6" sx={{ml:3}}>{localStorage.getItem("userDepartment")}</Typography>
                              </Grid>
                              <Grid iterm xs={12}>
                              <Typography variant="body1" component="h6" sx={{ml:3}}>ID: {localStorage.getItem("userRoll")}</Typography>
                              </Grid>
                              </>
                              :
                              <>
                              <Grid iterm xs={12}>
                              <Typography variant="body1" component="h6" sx={{ml:3}}>{localStorage.getItem("userDesignation")}</Typography>
                              </Grid>
                              <Grid iterm xs={12}>
                              <Typography variant="body1" component="h6" sx={{ml:3}}>{localStorage.getItem("userDepartment")},CUET</Typography>
                              </Grid>
                              </>
                            }
                            
                            <Grid iterm xs={12}>
                            <Typography variant="body1" component="h6" sx={{ml:3}}>{localStorage.getItem("userEmail")}</Typography>
                            </Grid>
                            <Grid iterm xs={12}>
                            <Typography variant="body1" component="h6" sx={{ml:3}}>{localStorage.getItem("userLocation")}, {localStorage.getItem("userContact")}</Typography>
                            </Grid>
                        </Grid>
                        </Box>
                      </Item>
                    </Grid>

                    <Grid item sm={4}>
                      <Item sx={{backgroundColor:'#D7E9B9'}}>
                        <Grid container spacing={1.35} >
                            <Grid xs={12} fullwidth item  >
                                <Box sx={{display:'flex', justifyContent:'normal',float:'right', mr:3}}>
                                <a href={localStorage.getItem("linkedin")}>
                                    Linkedin
                                    </a>< LinkedInIcon sx={{ml:3}}/>
                                    
                                </Box>
                            </Grid>
                      
                            <Grid xs={12} fullwidth item >
                                <Box sx={{display:'flex', justifyContent:'flex-end',float:'right', mr:3}}>
                                <a href={localStorage.getItem("github")}>
                                    Gitgub
                                    </a><GitHubIcon sx={{ml:3}}/>
                                    
                                </Box>
                            </Grid>
                        
                            
                            <Grid xs={12} fullwidth item >
                                <Box sx={{display:'flex', justifyContent:'flex-end',float:'right', mr:3}}>
                                <a href={localStorage.getItem("facebook")}>
                                    Facebook
                                    </a> <FacebookIcon sx={{ml:3}}/>
                                    
                                </Box>
                            </Grid>
                            
                            <Grid xs={12} fullwidth item >
                                <Box sx={{display:'flex', justifyContent:'flex-end',float:'right', mr:3}}>
                                <a href={localStorage.getItem("instagram")}>
                                    Instagram
                                    </a> <InstagramIcon sx={{ml:3}}/>
                                    
                                </Box>
                            </Grid>
                        </Grid>
                      </Item>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Grid item xs={12}>
                        <Paper sx={{backgroundColor:'#FFD495'}}>
                        <Typography variant="h6" component="h6" sx={{mb:2, display:'flex', justifyContent:'center'}}> CGPA Calculation</Typography>
                        <CGPA/>
                        </Paper> 
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <Paper sx={{backgroundColor:'#FFD495'}}>
                        <Typography variant="h6" component="h6" sx={{mb:1,  display:'flex', justifyContent:'center'}}> CT Result</Typography>
                        <CT/>
                        </Paper>
                        </Grid>
                        <Grid item xs={12}>
                        <Paper sx={{backgroundColor:'#FFD495'}}>
                        <Typography variant="h6" component="h6" sx={{mb:1,  display:'flex', justifyContent:'center'}}> Attendance</Typography>
                        <Attendance/>
                        </Paper>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Paper>

          </Container>
      </div>
    </>
  );
}
export default Profile;
