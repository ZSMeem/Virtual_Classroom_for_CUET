import React, { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { Card, CardContent, Grid, TextField,Container,Button, Box, Typography, Autocomplete} from "@mui/material";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";


export default function EditInfo() {

  const updateUser= async(values) =>{
    const userDoc =doc(db, "users", localStorage.getItem("userID"));
    const newFields ={
    location:values.location,
    contact:values.contact,
    bio:values.bio
    };
    localStorage.setItem("userLocation",values.location);
    localStorage.setItem("userContact",values.contact);
    localStorage.setItem("userBio",values.bio);
    updateDoc(userDoc,newFields);
    alert('updated informations successfully!');
  };

  return (
    <Container>
      <Formik
        initialValues={{
          location:'',
          contact:'',
          bio:''
        }}
        onSubmit={(values) => {
          console.log(values);
          updateUser(values);
        }}
      >
        {({ values }) => (
        <Card sx={{p:3}}>
          <Form>
            <Grid container spacing={1}>
              
              <Grid xs={12} item>
                <Typography variant="subtitle2" component="h2">Location:</Typography>
                <Field
                  as={TextField}
                  id="outlined-size-small"
                  type="text"
                  name="location"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Typography variant="subtitle2" component="h2">Contact:</Typography>
                <Field
                  as={TextField}
                  id="outlined-size-small"
                  type="text"
                  name="contact"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Field
                  as={TextField}
                  label="Bio"
                  id="outlined-size-small"
                  type="text"
                  name="bio"
                  multiline
                  rows={4}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} fullWidth>
                <Button
                  variant="contained"
                  sx={{ mt: 2, ml: 1, display: 'flex', justifyContent: 'flex-end', float:'right'}}
                  type="submit"
                  >
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