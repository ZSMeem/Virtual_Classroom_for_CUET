import React, { useState } from "react";
import { Card, CardContent, Grid, TextField,Container,Button, Box, Typography, ButtonBase} from "@mui/material";
import { Formik, Form, Field} from "formik";
import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { useRef } from "react";
import { v4 } from "uuid";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import CircularProgress from '@mui/material/CircularProgress';
import CancelIcon from '@mui/icons-material/Cancel';
import styles from './../../my_style.module.css';

export default function General() {
  const updateUser= async(values) =>{
    const userDoc =doc(db, "users", localStorage.getItem("userID"));
    const newFields ={name: values.name,
    department:values.department,
    designation:values.designation,
    dp:filePlusUrl[0].url
    };
    localStorage.setItem("userName",values.name);
    localStorage.setItem("userDepartment",values.department);
    localStorage.setItem("userDesignation",values.designation);
    localStorage.setItem("userDP",filePlusUrl[0].url);
    updateDoc(userDoc,newFields);
    alert("General informations updated successfully!")
  };

  const [filePlusUrl, setFilePlusUrl]= useState([])
  const [files, setFiles]=useState([])
  const uploadFileHandler = (event) => {
    const file = event.target.files[0];
    
    if(!file) return;
    file.isUploading = true;
    file.url='';
    setFiles([...files, file]);
    // upload file
    const uniqueName=`images/${v4()+ file.name}`;
    const fileRef = ref(storage, uniqueName);
    
    uploadBytes(fileRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        file.isUploading = false;
        file.url=url;
        const newFile = {
          name: file.name,
          uniqueName: uniqueName,
          url:url
        }
        setFilePlusUrl([...filePlusUrl, newFile ])
      });
    });
    
  }
  const deleteFile = (filename) => {

    setFiles(files.filter(file=> file.name!=filename));
    for(let i=0;i<filePlusUrl.length;i++)
    {
      if(filePlusUrl[i].name==filename)
      {
        const fileRef = ref(storage, filePlusUrl[i].uniqueName);
        deleteObject(fileRef).then(() => {
         ;
        }).catch((error) => {
          alert("Uh-oh, an error occurred!");
        });
        setFilePlusUrl(filePlusUrl.filter(file=> file!=filePlusUrl[i]))
        break;
      }
    }
  }
 
  const fileRef = useRef(null);
  return (
    <Container>
      <Formik
        initialValues={{
          name:'',
          department:'',
          designation:'',
          dp:''
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
            <Grid item xs={12} sm={12} >
                <Typography variant="subtitle2" component="h2">User Name:</Typography>
                <Field
                  name="name"
                  as={TextField}
                  id="outlined-size-small"
                  type="text"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              {
                (localStorage.getItem("userTeacher"))?
                <Grid item xs={12} sm={12} >
                <Typography variant="subtitle2" component="h2">Designation:</Typography>
                <Field
                  name="designation"
                  as={TextField}
                  id="outlined-size-small"
                  type="text"
                  size="small"
                  fullWidth
                  required
                />
                </Grid>
                :null
              }
              <Grid item xs={12} sm={12} >
                <Typography variant="subtitle2" component="h2">Department:</Typography>
                <Field
                  name="department"
                  as={TextField}
                  id="outlined-size-small"
                  type="text"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12} >
                <Typography variant="subtitle2" component="h2">Change DP:</Typography>
                <input ref={fileRef} hidden type="file" onChange={uploadFileHandler}/>
                <Button onClick={() => {
                  fileRef.current.click();
                }}
                variant="outlined" style={{color:"black"}}>Update Profile Picture</Button>

                {
                    files.length!=0 &&
                    files.map(file => (
                      <div>
                          {file.name.length>20? <p>{file.name.substring(0,20)}...{file.name.substring(file.name.length-3,file.name.length)}</p>: <p>{file.name}</p>}
                          
                          <div className="actions">
                              <div className="loading"></div>
                              {file.isUploading && <div className={styles.imageUpload}><CircularProgress/></div>}
                              {!file.isUploading &&
                                  <div className={styles.imagePreview}>
                                  <Grid container>
                                    <Grid item sm={12} sx={{display:'flex', justifyContent:'end'}}>
                                    < CancelIcon onClick={() => deleteFile(file.name)} />
                                    </Grid>
                                    <Grid item sm={12}>
                                    <img src={file.url} width='100'/>
                                    </Grid>
                                  </Grid>
                                  </div>
                              }
                              
                          </div>
                      
                      </div>
                    ))
                }
                
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