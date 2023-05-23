import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState, useEffect } from "react";
import { db, storage } from "../firebase";

const initialState={
    description: ""
};
const Blog = ({ user }) => {
    const [form, setForm] =useState(initialState);
    const [file, setFile]= useState([]);
    const [progress, setProgress]= useState(null);

    const {description} =form;
/*
    useEffect(()=>{
        const uploadFile = ()=>{
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on("state_changed", (snapshot)=>{
                const progress =(snapshot.bytesTransferred/snapshot.totalBytes)*100;
                console.log("Upload is :"+progress+" %done");
                setProgress(progress);
                switch (snapshot.state) {
                    case "paused":
                      console.log("Upload is paused");
                      break;
                    case "running":
                      console.log("Upload is running");
                      break;
                    default:
                      break;
                }
            }, (error)=>{
                console.log(error)
            },
            ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
                    setForm((prev) => ({...prev, attachmentURL: downloadURL}));
                });
            });
        };
        file && uploadFile();
    },[file])
    */

    

    const handleChange = (e)=>{
        setForm({...form, [e.target.name]:e.target.value});
    };
    const handleFileChange=(e)=>{
      console.log(e.target.files);
      setFile([...file, ...e.target.files]);
      console.log("Uploaded file = ",file);
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(description){
            try{
                await addDoc(collection(db, "posts"),{
                    ...form,
                    timestamp:serverTimestamp(),
                    author: user.displayName,
                    userId: user.uid
                })
            }
            catch(err){
               console.log(err); 
            }
        }
    };
  
  
    return (
    <form onSubmit={handleSubmit}>
        <div >
          <textarea
            placeholder="Description"
            name="description"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
          />
        </div>
        <div >
          <button type="submit" disabled={progress!==null && progress<100}>Post</button>
        </div>
      </form>
  );
};

export default Blog;
