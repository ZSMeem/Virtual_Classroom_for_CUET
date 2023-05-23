import * as React from "react";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Backdrop,Box, Button, Typography, Paper } from "@mui/material";
import image from "../../images/1.jpg";
import styles from "../../my_style.module.css";
import Post from "./Post";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width:500,
  flexGrow:1,
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p:2
};

export default function Share() {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler=()=>{
    setIsOpen(!isOpen)
  }
  const uniqueEmail = localStorage.getItem("uniqueEmail");
  const [users, setUsers] = useState([]);

  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUser = async()=>{
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
    }
    getUser();
  },[users]);
  return (
    <Paper className={styles.share}>
            <Box className={styles.shareWrapper}>
                <div className={styles.shareTop}>
                <img className={styles.shareProfileImg} src={localStorage.getItem("userDP")} alt="" />
                <Button onClick={openHandler} className={styles.announce}>
                    Announcement something to your class
                </Button>
                <Backdrop open={isOpen}>
                    <Paper sx={style} className={`pop-up ${isOpen ? 'open' : 'closed'}`}>
                            <CloseIcon onClick={() => setIsOpen(false)} sx={{display:'flex', justifyContent:'flex-end', float:'right'}}/>
                            <Post openHandler={openHandler}/>
                    </Paper>
                </Backdrop>
            </div>
            </Box>
        </Paper>
  );
}
