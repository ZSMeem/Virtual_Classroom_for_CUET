import React, { useState } from "react";
import { Card, CardContent, Grid, TextField,Container,Button, Box, Typography} from "@mui/material";
import { Formik, Form, Field} from "formik";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";


export default function EditPass() {
  
  const updateUser= async(values) =>{
    const userDoc =doc(db, "users", localStorage.getItem("userID"));
    if(localStorage.getItem("userPassword")!=values.oldPassword)
    {
      alert('Old password is incorrect!');
    }
    else
    {
      const newFields ={
        password:values.newPassword
        };
        localStorage.setItem("userPassword",values.newPassword);
        updateDoc(userDoc,newFields);
        alert('Password updated successfully!');
    }
    
  };
  return (
    <Container>
      <Formik
        initialValues={{
          oldPassword: "",
          newPassword: "",
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
              <Grid item xs={12}>
                <Typography variant="subtitle2" component="h2">Old Password:</Typography>
                <Field
                  as={TextField}
                  id="outlined-size-small"
                  type="password"
                  name="oldPassword"
                  size="small"
                  required
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <Typography variant="subtitle2" component="h2">New Password</Typography>
                <Field
                  as={TextField}
                  id="outlined-size-small"
                  type="password"
                  name="newPassword"
                  size="small"
                  required
                  fullWidth
                />
                <Typography variant="body2" component="body2" sx={{color: "grey"}}>Minimum 6 characters</Typography>

              </Grid>
              <Grid xs={12} fullWidth>
              <Button
                  variant="contained"
                  sx={{ mt: 2, ml: 1, display: 'flex', justifyContent: 'flex-end', float:'right' ,}}
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