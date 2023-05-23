import { accordionActionsClasses } from '@mui/material';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import React from 'react'
import { useState, useEffect } from 'react';
import { db } from '../firebase';
const CRUD = () => {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");
    const [newName, setNewname]=useState("");
    const [newAge, setNewage]=useState(0);
    
    const deleteUser = async(id)=>{
        const userDoc = doc(db,"users", id);
        await deleteDoc(userDoc)
    };
    
    const updateUser= async(id, age) =>{
        const userDoc =doc(db, "users", id);
        const newFields ={age: age+1};
        updateDoc(userDoc,newFields);
    };

    const createUser =async() =>{
        await addDoc(usersCollectionRef, {name:newName, age: Number(newAge)});
    };

    useEffect(() => {
        const getUser = async()=>{
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
        }
        getUser();
    },[]);

  
    return (
    <div>
        {users.map((user)=>{
            return(
            <div>
                <h1>Name:{user.name}</h1>
                <h2>Age: {user.age}</h2>
                <button onClick={()=>{updateUser(user.id, user.age)}}>increment age</button>
                <button onClick={()=>{deleteUser(user.id)}}>delete user</button>
            </div>
            ); 
        })}
        <input 
        placeholder='Name' 
        type="text" 
        onChange={(e)=>{setNewname(e.target.value)}}
        />
        <input 
        placeholder='Age' 
        type="number"
        onChange={(e)=>{setNewage(e.target.value)}}
        />
        <button onClick={createUser}> Create User</button>

    </div>
    );
}

export default CRUD;
