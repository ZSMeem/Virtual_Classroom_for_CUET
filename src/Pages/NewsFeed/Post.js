import React from 'react'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { storage, db } from "../../firebase";
import { v4 } from "uuid";
import {
    Paper,
    Box,
    TextField
  } from "@material-ui/core";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useRef, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import styles from '../../my_style.module.css'
const Post = ({openHandler}) => {
  const uniqueEmail = localStorage.getItem("uniqueEmail");

  const [filePlusUrl, setFilePlusUrl]= useState([])
  const [files, setFiles]=useState([])

    const uploadFileHandler = (event) => {
    const file = event.target.files[0];
    
    if(!file) return;
    file.isUploading = true;

    setFiles([...files, file]);
    // upload file
    const uniqueName=`files/${v4()+ file.name}`;
    const fileRef = ref(storage, uniqueName);
    
    uploadBytes(fileRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        file.isUploading = false;

        const newFile = {
          name: file.name,
          uniqueName: uniqueName,
          url:url
        }
        setFilePlusUrl([...filePlusUrl, newFile ])
        
      });
    });
    console.log("uniqe name = ",fileRef);
    
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
  const [newPost, setNewPost]= useState("");
  
  const postsCollectionRef = collection(db, "posts");
  const handleNotification = ()=>{

  }
  const createPost =async() =>{
    const date = new Date();
    console.log("date == ",date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let currentDate = `${day}-${month}-${year}, ${hour}:${minute}:${second}`;
    const add={
      post:newPost,
      numberOfFiles:filePlusUrl.length,
      date:currentDate,
      classId: localStorage.getItem("classId"),
      name:localStorage.getItem("userName"),
      dp:localStorage.getItem("userDP"),
      email:localStorage.getItem("userEmail")
    }
    let j= 0
    for(let i=0;i<files.length;i++)
    {
      add[j++]= filePlusUrl[i].name;
      add[j++]= filePlusUrl[i].uniqueName;
      add[j++]= filePlusUrl[i].url;
    }
    console.log("add==", add);
    await addDoc(postsCollectionRef, add);
    openHandler();
    setNewPost("");
    setFiles([]);
    handleNotification();
  };
  const fileRef = useRef(null);
  return (
    <div>
      <Paper className={styles.sharebox}>
        <Box className={styles.shareWrapper}>
          <form>
            <TextField
              className={styles.announce}
              type="text"
              name="writeup"
              id="filled-basic"
              label="Announcement something to your class"
              variant="filled"
              multiline={true}
              rows={3}
              fullWidth
              onChange={(e)=>{setNewPost(e.target.value)}}
              value={newPost}
            />
            <hr />

            <Box className={styles.shareBottom}>
              <input ref={fileRef} hidden type="file" onChange={uploadFileHandler} />

              <Box
                className={styles.shareBottom}
                onClick={() => {
                  fileRef.current.click();
                }}
              >
                <AddCircleOutlineIcon className={styles.shareButton} />{" "}
                <u>Add attachment</u>
              </Box>

              <Box className={styles.shareBottom} onClick={()=>createPost()}>
                <u>Post</u>
                <SendIcon title="Post" className={styles.shareButton} />
              </Box>
            </Box>
            
            <ul >
            {
                files.length!=0 &&
                files.map(file => (
                  <div className={styles.fileItem}>
                    <li>
                        <AttachFileIcon/>
                        {file.name.length>20? <p>{file.name.substring(0,20)}...{file.name.substring(file.name.length-3,file.name.length)}</p>: <p>{file.name}</p>}
                        
                        <div className="actions">
                            <div className="loading"></div>
                            {file.isUploading && <CircularProgress/>}
                            {!file.isUploading &&
                                < DeleteIcon onClick={() => deleteFile(file.name)} />
                            }
                        </div>
                    </li>
                    </div>
                  ))
              }
            </ul>
          </form>
        </Box>
      </Paper>
    </div>
  )
}

export default Post;
