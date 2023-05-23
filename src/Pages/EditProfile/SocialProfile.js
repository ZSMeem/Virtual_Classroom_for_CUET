import React, { useState } from "react";
import { Card, CardContent, Grid, TextField,Container,Button, Box, Typography} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Formik, Form, Field} from "formik";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function SocialProfile() {
  const updateUser= async(values) =>{
    const userDoc =doc(db, "users", localStorage.getItem("userID"));
    const newFields ={
      linkedin: values.linkedin,
      github: values.github,
      instagram: values.instagram,
      facebook: values.facebook
    };
    localStorage.setItem("linkedin",values.linkedin);
    localStorage.setItem("github",values.github);
    localStorage.setItem("instagram",values.instagram);
    localStorage.setItem("facebook",values.facebook);
    updateDoc(userDoc,newFields);
    alert('updated informations successfully!');
  };
  return (
    <Container>
      <Formik
          initialValues={{
          linkedin: "",
          github: "",
          instagram: "",
          facebook: ""
        }}
        onSubmit={(values) => {
          console.log(values);
          updateUser(values);
        }}
      >
        {({ values }) => (
        <Card  sx={{p:3}}>
          <Form>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Box sx={{display: 'flex', mt:2}}>
                <LinkedInIcon/>
                <Typography variant="subtitle2" component="h2">Linked In:</Typography>
                </Box>
                
                <Field
                  as={TextField}
                  id="outlined-size-small"
                  type="url"
                  name="linkedin"
                  size="small"
                  required
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <Box sx={{display: 'flex', mt:2}}>
                <GitHubIcon/>
                <Typography variant="subtitle2" component="h2">Github:</Typography>
                </Box>
                <Field
                  as={TextField}
                  id="outlined-size-small"
                  type="url"
                  name="github"
                  size="small"
                  required
                  fullWidth
                />

              </Grid>
              
              <Grid xs={12} item>
                <Box sx={{display: 'flex', mt:2}}>
                <InstagramIcon/>
                <Typography variant="subtitle2" component="h2">Instagram:</Typography>
                </Box>
                <Field
                  as={TextField}
                  id="outlined-size-small"
                  type="url"
                  name="instagram"
                  size="small"
                  required
                  fullWidth
                />

              </Grid>
              <Grid xs={12} item>
                <Box sx={{display: 'flex', mt:2}}>
                <FacebookIcon/>
                <Typography variant="subtitle2" component="h2">Facebook:</Typography>
                </Box>
                <Field
                  as={TextField}
                  id="outlined-size-small"
                  type="url"
                  name="facebook"
                  size="small"
                  required
                  fullWidth
                />

              </Grid>
              <Grid xs={12} fullWidth>
              <Button
                  variant="contained"
                  sx={{ mt: 2, ml: 1, display: 'flex', mt:2, justifyContent: 'flex-end', float:'right' ,}}
                  type="submit">
                  Submit
                  </Button>
              </Grid>
            </Grid>
            
          </Form>
        </Card>
        )}
      </Formik>
      
    </Container>
    
  );
}