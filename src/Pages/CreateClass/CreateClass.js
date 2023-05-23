import { Button, Card, Container, Grid, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import userEvent from '@testing-library/user-event';
import { Field, Form, Formik } from 'formik';
import { addDoc, collection, getDocs} from 'firebase/firestore';
import styles from '../../my_style.module.css'
import React, { useEffect, useRef, useState } from 'react'
import { db, storage } from '../../firebase';
import { v4 } from 'uuid';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import CircularProgress from '@mui/material/CircularProgress';
import CancelIcon from '@mui/icons-material/Cancel';
import NavBar from '../../Component/NavBar/App';
import { useNavigate } from 'react-router-dom';

const CreateClass = () => {
   const color=["#FD8A8A","#F1F7B5","#A8D1D1","#9EA1D4","#FFE5F1","#C0DEFF"]
   const uniqueEmail=localStorage.getItem("uniqueEmail")
   const user= localStorage.getItem("user")
   const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");
    useEffect(() => {
      const getUser = async()=>{
          const data = await getDocs(usersCollectionRef);
          setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
      }
      getUser();
    },[]);
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
          alert("File deleted successfully");
        }).catch((error) => {
          alert("Uh-oh, an error occurred!");
        });
        setFilePlusUrl(filePlusUrl.filter(file=> file!=filePlusUrl[i]))
        break;
      }
    }
  }


   const classCollectionRef = collection(db, "Class");
   const rnd = Math.floor(Math.random() * (5)) ;
   const nevigate = useNavigate();
   const createClass =async(values) =>{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let newCode = '';
    const codeLength = Math.floor(Math.random() * (7 - 5 + 1) + 5);

    for (let i = 0; i < codeLength; i++) {
      newCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    const newFields ={
        subject:values.subject,
          section:values.section,
          subject:values.subject,
          courseCode:values.courseCode,
          email:uniqueEmail,
          link: filePlusUrl[0].url,
          color: color[rnd],
          code:newCode
        };
    await addDoc(classCollectionRef, newFields);
    nevigate('/Dashboard')
   };
   const fileRef = useRef(null);
   return (
    <>
    {
      users.map((user)=>{
        return(
          (user.email==uniqueEmail)?
          <div>
        <div>
            <NavBar user={user}/>
        </div>
        <Container sx={{pt:10}}>
        <h2>Create A New Class</h2>
      <Formik
        initialValues={{
          subject:'',
          section:'',
          subject:'',
          credit:0,
          courseCode:''
        }}
        onSubmit={(values) => {
          console.log(values);
          createClass(values,user);
        }}
      >
        {({ values }) => (
        <Card sx={{p:3}}>
          <Form>
            <Grid container spacing={1}>
              
              <Grid xs={12} item>
                <Typography variant="subtitle2" component="h2">Subject (required):</Typography>
                <Field
                  as={TextField}
                  id="outlined-size-small"
                  type="text"
                  name="subject"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Typography variant="subtitle2" component="h2">Course Code :</Typography>
                <Field
                  as={TextField}
                  id="outlined-size-small"
                  type="text"
                  name="courseCode"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <Typography variant="subtitle2" component="h2">Course Credit :</Typography>
                <Field
                  as={TextField}
                  id="outlined-size-small"
                  type="number"
                  name="credit"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Typography variant="subtitle2" component="h2">Section:</Typography>
                <Field
                  as={TextField}
                  id="outlined-size-small"
                  type="text"
                  name="section"
                  size="small"
                  fullWidth
                />
              </Grid>
              
              <Grid item xs={12} sm={12} >
                <Typography variant="subtitle2" component="h2">Upload Cover Photo :</Typography>
                <input ref={fileRef} hidden type="file" onChange={uploadFileHandler}/>
                <Button onClick={() => {
                  fileRef.current.click();
                }}
                variant="outlined" style={{color:"black"}}>Choose Cover</Button>

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
    </div>
          :null
        )
      })
    }
    </>
    
    
  )
}

export default CreateClass;
