
import React, { useEffect, useState } from "react";
import { Card, CardContent, Grid, TextField,Container,Button, Box, Typography, Paper} from "@mui/material";
import { Formik, Form, Field} from "formik";
import NavBar from "../../Component/NavBar/App";
import Back from "../../Component/Back";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import styles from '../../my_style.module.css'
import { useNavigate } from "react-router-dom";

const JoinClass = () => {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");
    useEffect(() => {
      const getUser = async()=>{
          const data = await getDocs(usersCollectionRef);
          setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
      }
      getUser();
      
    },[users]);
    const nevigate=useNavigate();
    const handleClassCode= async(values, user) =>{
        console.log("user = ",user)
        const userDoc =doc(db, "users", user.id);
        let key = `classCode${user.addedClasses}`;
        const newFields ={[key]:values.classCode ,addedClasses: user.addedClasses+1};
        updateDoc(userDoc,newFields);
        alert("code added successfully!");
        nevigate('/Dashboard');
    };
    const uniqueEmail=localStorage.getItem("uniqueEmail");
    
    return (
    <>
    <NavBar/>
    <Back/>
    <Container>
    {users.map((user)=>{
          return(
            (user.email==uniqueEmail)?
            <div style={{padding:100}}>
                <Paper className={styles.Join}>
                    <Box className={styles.JoinWrapper}>
                        <div>
                        <Typography variant="subtitle1" gutterBottom color={"grey"}>
                            You are currently signed in as
                        </Typography>
                        </div>
                        <div className={styles.JoinTop}>
                        <img className={styles.JoinProfileImg} src={user.dp} alt="" />
                        <div style={{marginLeft:10}}>
                        <Typography variant="button" display="block" gutterBottom>
                           {user.name}
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom>
                            {user.email}
                        </Typography>
                        </div>
                    </div>
                    </Box>
                </Paper>
                <br/>
                <Formik
                    initialValues={{
                    classCode:""
                    }}
                    onSubmit={(values) => {
                    console.log(values);
                    handleClassCode(values, user);
                    }}
                >
                    {({ values }) => (
                    <Card sx={{p:3}}>
                    <Typography variant="h5" gutterBottom>
                    Class code
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    Ask your teacher for the class code, then enter it here.
                    </Typography>
                    <Form>
                        <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Field
                            as={TextField}
                            id="outlined-size-small"
                            type="text"
                            name="classCode"
                            size="small"
                            placeholder="Class code"
                            required
                            />
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
                <div>
                <br/>
                <div style={{marginLeft:20, marginRight:20}}>
                <Typography variant="h6" gutterBottom>
                    To sign in with a class code
                </Typography>
                <Typography variant="body2" gutterBottom>
                <ul>
                    <li>Use an authorized account</li>
                    <li>Use a class code with 5-7 letters or numbers, and no spaces or symbols</li>
                </ul>
                </Typography>
                
                </div>
                

                </div>
            </div>
            :null
          )
    })}
      
    </Container>
    </>
    
  )
}

export default JoinClass;




