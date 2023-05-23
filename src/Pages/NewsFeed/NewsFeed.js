import * as React from 'react';
import styles from "../../my_style.module.css";
import {Button} from '@mui/material';
import {
  Paper,
  Box,
  Container,
  Typography,
} from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import Share from "./Share";
import { Grid } from "@mui/material";
import pdfLogo from "../../images/pdf.png";
import pptLogo from "../../images/ppt.png";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import { storage, db } from "../../firebase";
import {ref,  deleteObject} from 'firebase/storage';
import {
  collection,
  deleteDoc,
  doc,
  getDocs
} from "firebase/firestore";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import NavBar from '../../Component/NavBar/App';
import CommentIcon from "@mui/icons-material/Comment";
import MoreIcon from "@mui/icons-material/More";
import Back from '../../Component/Back';
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function NewsFeed() {
  
  const postsCollectionRef = collection( db,"posts");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      const postdata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      postdata.sort((a,b)=>{
      
        let a1=Number(Date.parse(a['date']));
        let b1=Number(Date.parse(b['date']));
      
        if(a1>b1)
            return -1;
        else if(a1<b1)
            return 1; 
      });
      setPosts(postdata);
    };
    

    getPosts();

    
  }, [posts]);

  const deleteFullPost= async( id)=>{
    const userDoc = doc(db,"posts", id);
    await deleteDoc(userDoc);
  }
  const deletePost = (post)=>{
    handleClose();
    for (const key in post) {
      if(Number(key)>=0 && Number(key)<=Number(post.numberOfFiles)*3 && Number(key)%3==1)
      {
        const fileRef = ref(storage, post[key]);
        deleteObject(fileRef).then(() => {
          ;
        }).catch((error) => {
          ;
        });
      }
    }
    deleteFullPost(post.id);
  };
  const [open, setOpen] = React.useState(false);
  const [deletingPost, setDeletingPost]= useState({});
  const handleClickOpen = (post) => {
    setDeletingPost(post);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const nevigate=useNavigate();
  const handleSeemore =(post)=> {
    localStorage.setItem("postId",post.id);
    nevigate('./FullPost');
  };
  const imageLink= localStorage.getItem("classCover");
  const classCourseCode= localStorage.getItem("classCoursecode");
  const classSection=localStorage.getItem("classSection");
  const classSubject=localStorage.getItem("classSubject");
  const classCode=localStorage.getItem("classCode");
  const userEmail=localStorage.getItem("uniqueEmail");
  const who=localStorage.getItem("userTeacher");
  return (
    <div>
    <NavBar />
    <br />
    <div className={styles.classCode}>
    <Back/>
    </div>
    <Container>
      <div className={styles.newsFeedCover}>
        <img src={imageLink}/>
        <div class={styles.bottomLeft}>
          <div className={styles.classHeading}>
            <Typography variant="h3" gutterBottom color="common.white">
              {classCourseCode}
            </Typography>
            <Typography variant="h6" gutterBottom color="common.white">
              {classSubject}
            </Typography>
            <Typography variant="body1" gutterBottom color="common.white">
              Section: {classSection}
            </Typography>
            {
              (localStorage.getItem("userTeacher"))?
              <Typography variant="body1" gutterBottom color="common.white">Class Code: {classCode}</Typography>
              :null
            }
          </div>
        </div>
      </div>
      <Paper>
        <Container >
          <br/>
          <div style={{marginLeft:20, marginRight:20}}>
          <Share />
          </div>
          
          <br />
          <div style={{marginLeft:20, marginRight:20}}>
            
            {posts.map((post) => {
              return(
                (post.classId==localStorage.getItem("classId"))?
                <>
                  <div>
                    <Paper sx={{ flexGrow: 1, boxShadow: 3 }} style={{ backgroundColor: "#f3f4d3" }}>
                      <Box className={styles.shareWrapper}>
                        
                      {
                        (post.email==userEmail || who=="true")?
                        <div>
                        <DeleteIcon sx={{display: "flex",justifyContent: "flex-end",float: "right",mr: 2}} onClick={()=>handleClickOpen(post)}/>
                        </div>
                        :null
                      }
                        
                        
                        <div className={styles.shareTop} style={{marginLeft:20, marginRight:20}}>
                          <img
                            className={styles.shareProfileImg}
                            src={post.dp}
                            alt={post.name}
                          />
                          <div>
                            <Typography
                              variant="h6"
                              component="h5"
                              style={{ color: "#5C6380" }}
                            >
                              {post.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              display="block"
                              gutterBottom
                            >
                              {post.date}
                            </Typography>
                          </div>
                        </div>
                        <div style={{marginLeft:20, marginRight:20}}>
                        <Typography variant="body1" gutterBottom>{post.post.length>20? <p>{post.post.substring(0,100)}....</p>: <p>{post.post}</p>}</Typography>
                        <Grid container spacing={1}>
                          {Object.keys(post).map((key, index) => {
                            return (
                              <>
                              {
                                (Number(key) < Number(post.numberOfFiles) * 3 && Number(key) % 3 === 0) ? 
                                  <Grid item sm={6} xm={12}>
                                  <Item>
                                    <Grid container>
                                    <Grid item sx={4} key={index}>
                                      {(() => {
                                        if (post[key].substring(post[key].length - 3,post[key].length) == "pdf") 
                                        {
                                          return <img src={pdfLogo} width="50" />;
                                        } 
                                        else if (post[key].substring(post[key].length - 3,post[key].length) == "ppt") 
                                        {
                                          return <img src={pptLogo} width="50" />;
                                        } 
                                        else if (post[key].substring(post[key].length - 3,post[key].lenght) == "jpg" 
                                          ||post[key].substring(post[key].length - 3,post[key].lenght) == "png") 
                                        {
                                          return (<img src={post[(Number(key) + 2).toString()]} width="50" height="60" />);
                                        }
                                      })()}
                                    </Grid>
                                    <Grid item sx={8} key={index}>
                                      <div style={{ marginLeft: 20 }}>
                                        <a className={styles.link} href={post[(Number(key) + 2).toString()]}>{post[key].length>20? <p>{post[key].substring(0,20)}...{post[key].substring(post[key].length-3,post[key].length)}</p>: <p>{post[key]}</p>}</a>
                                        <br />
                                        {post[key].substring(post[key].length - 3, post[key].lenght)}
                                      </div>
                                    </Grid>
                                    </Grid>
                                  </Item>
                                  </Grid>
                                  : null
                                  }
                              </>
                            );
                          })}  
                        </Grid>
                        </div>
                        <br/>
                        <Box className={styles.shareBottom} onClick={()=>handleSeemore(post)} style={{marginLeft:15, marginRight:20, marginTop:20}}>
                          <Button size="small">
                            {" "}
                            <CommentIcon sx={{ marginRight: "5px" }} /> Comments 9
                          </Button>
                          <Button size="small"sx={{}}>
                            {" "}
                            <MoreIcon sx={{ marginRight: "5px" }} />
                            See More
                          </Button>
                        </Box>
                      </Box>
                    </Paper>
                    <br />
                    <br />
                  </div>
                  
                </>
                :null
                )
            }
            )}
          </div>
        </Container>
      </Paper>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure that you want to delete this post?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {deletingPost.post}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>No</Button>
          <Button onClick={()=>deletePost(deletingPost)} >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
    </div>
    
  );
}
