import { Container, Grid, Typography ,Paper} from '@material-ui/core';
import React from 'react'
import styles from '../my_style.module.css'
import AssignmentIcon from '@mui/icons-material/Assignment';
import post from './assignment.json';
import pdfLogo from "../images/pdf.png";
import pptLogo from "../images/ppt.png";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));

const myAttachmentShow = () => {
  return (
    <div>
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
  )
}

export default myAttachmentShow;
