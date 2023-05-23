import { Container, Grid, Typography ,Paper} from '@material-ui/core';
import React from 'react'
import styles from '../../my_style.module.css'
import AssignmentIcon from '@mui/icons-material/Assignment';

import pdfLogo from "../../images/pdf.png";
import pptLogo from "../../images/ppt.png";
import { styled } from "@mui/material/styles";
import Comment from './Comment';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useState } from 'react';
import { useEffect } from 'react';
import Back from '../../Component/Back';
import NavBar from '../../Component/NavBar/App';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));

function FullPost() {
    const postsCollectionRef = collection( db,"posts");
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      const getPosts = async () => {
        const data = await getDocs(postsCollectionRef);
        const postdata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setPosts(postdata);
      };
      getPosts();
    }, [posts]);
    const uniqueEmail = localStorage.getItem("uniqueEmail");
    
    const postId=localStorage.getItem("postId")
    return (
        <>
        <div>
        <NavBar/>
        </div>
        
        <Back/>
        <Container>
            <div>
                {posts.map((post)=>{
                    return(
                        (post.id===postId)?
                        <Container>
                            <Paper style={{padding:20}}>
                            <Grid container >
                            <Grid item lg={12} sm={12}>
                                <div className={styles.FullPostTitle}>
                                <div className={styles.FullPost}><img src={post.dp}/></div>
                                    <div spacing={0}>
                                        <Typography variant="h3" gutterBottom style={{marginLeft:20}}>{post.name}</Typography>
                                        <Typography variant="subtitle1" gutterBottom style={{marginLeft:25}}>
                                            {post.date} 
                                        </Typography>
                                    </div>
                                </div>
                                
                                <hr/>
                                <div className={styles.assignmentBody}>
                                <Typography variant="body1" gutterBottom>
                                    {post.post}
                                </Typography>
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
                                                if (post[key].substring(post[key].length - 3,post[key].lenght) == "pdf") 
                                                {
                                                return <img src={pdfLogo} width="50" />;
                                                } 
                                                else if (post[key].substring(post[key].length - 3,post[key].lenght) == "ppt") 
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
                                <hr/>
                            </Grid>
                            
                            <Grid item lg={12} sm={12}>
                                <Comment post={post}/>
                            </Grid>
                            </Grid>
                            </Paper>
                        
                        </Container>
                    
                    :null
                    )
                })
            }
            </div>
        </Container>
        </>
    
  )
}

export default FullPost;



