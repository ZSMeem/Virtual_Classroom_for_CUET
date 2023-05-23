import styles from './../../my_style.module.css';
import SendIcon from "@mui/icons-material/Send";
import PeopleIcon from '@mui/icons-material/People';
import { Box, Button, Paper, TextField,Typography } from '@mui/material';
import { useState } from 'react';
import {
    collection,
    doc,
    getDocs,
    updateDoc,
  } from "firebase/firestore";
import { db } from '../../firebase';
import { useEffect } from 'react';
function Comment({post}){
   
    const [newComment, setNewComment]=useState("");
    const [comments, setComments] = useState([]);
    const commentsCollectionRef = collection(db, "comments");
    useEffect(() => {
        const getComments = async()=>{
            const data = await getDocs(commentsCollectionRef);
            const commentData = data.docs.map((doc)=>({...doc.data(), id:doc.id}));
            setComments(commentData);
        }
        getComments();
    },[comments]);
   
    const updateComment= async(c) =>{
       
        const commentDoc =doc(db, "comments", c.id);
        
        let val=c.totalComments;
        let key=`comment${val}`;
        let key2=`comment${val+2}`;
        let key3=`comment${val+3}`;
        const newFields ={[key]:user.dp,[key2]:user.name,[key3]:newComment, totalComments: val+1 };
        updateDoc(commentDoc,newFields);
        setNewComment("");
    };
    const handleComment = ()=>{
        console.log("-----");
        for(let i=0;i<comments.length;i++)
        {
            console.log("comment - ",comments[i]);
            if(comments[i].postId==post.id)
            {
                updateComment(comments[i]);
                break;
            }
        }
    };
   const s="commet";
    return(
        <div>
            <Box sx={{display: 'flex', alignItems:'center'}}>
                <PeopleIcon/>
                <Typography sx={{mt:1, ml:2}} variant="subtitle1" gutterBottom>
                Class comments
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems:'center' ,mt:2 }}>
                <img className={styles.shareProfileImg} src={user.dp} alt=""/>
                <TextField sx={{borderRadius:100 ,height:55}} fullWidth id="input-with-sx" label="Add class comment..." variant="outlined" value={newComment} onChange={(e)=>setNewComment(e.target.value)}/>
                <Button variant="contained" sx={{height:55}} onClick={handleComment}><SendIcon/></Button>
            </Box>
        
        </div>
    )
}
export default Comment;