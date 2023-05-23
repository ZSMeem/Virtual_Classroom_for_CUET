import styles from "../my_style.module.css";
import { Paper, Box, TextField, Container,Button,Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import user from './person.json'
import { db,storage } from '../firebase';
import { v4 } from "uuid";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import SendIcon from '@mui/icons-material/Send';
export default function Share1() {

  const [posts, setPosts] =useState([]);
  const [newPost, setNewPost]=useState("");
  const postCollectionRef = collection(db, "posts");
  
  const [fileUpload, setFileUpload]= useState(null);
  const [fileUrls, setFileUrls]= useState([]);


  const [uploadingPost,setUploadingPost] =useState({name:user.name});
  
  const createPost = async()=>{

    console.log("newpost = ",newPost);
    console.log("before = ", uploadingPost);
    setUploadingPost((prev)=>({...prev, post:newPost}));
    console.log("after = ",uploadingPost);
    if(fileUpload!==null)
    {
      const fileRef = ref(storage, `files/${fileUpload.name + v4()}`);
      uploadBytes(fileRef, fileUpload).then((snapshot) => {
        alert("File uploaded")
        getDownloadURL(snapshot.ref).then((url) => {
          setFileUrls((prev) => [...prev, url]);
          
          setUploadingPost((prev)=>({...prev, attachment: url}));
          console.log("uploading======",uploadingPost)
        });
      });
      console.log("file ase shathe")
    }
    
    console.log("post = ",uploadingPost)

    await addDoc(postCollectionRef, uploadingPost );
    console.log("post added!")
    
    
  }

  useEffect(()=>{
    const getPost = async()=>{
      const data = await getDocs(postCollectionRef);
      setPosts(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
    }

    getPost();
  },[])
  return (
    <Container>
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
              onChange={(e)=>setNewPost(e.target.value)}
            />
            <hr />
            
            <Box className={styles.shareBottom}>
            <input
              type="file"
              onChange={(e)=>{setFileUpload(e.target.files[0])}}
            />
            <Box className={styles.shareBottom}>
            <u>Post</u>
            <SendIcon
            title="Post"
            className={styles.shareButton}
            onClick={createPost}
            /> 
            </Box>    
              </Box>
          </form>   
        </Box>
      </Paper>
      <hr/>
      <Paper>
          {
            posts.map((post)=>{
              return(
                <div>
                  <h1> Name: {post.name}</h1>
                  <h2> Post: {post.post}</h2>
                  <img src={post.attachment} width="100" height="100"/>
                  <br/>
                  <br/>
                </div>
              )
            })
          }
         </Paper>
    </Container>
  );
}
