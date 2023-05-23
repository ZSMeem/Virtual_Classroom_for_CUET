import { Paper } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const ShowComment = ({comment}) => {
    const thisComments=[];
    useEffect(() => {
        for(let i=0;i<comment.totalComments;i++)
        {
            let x = `comment${i}`;
            console.log("x= = ",x, "i = ", i, "comment = ",comment[x]);
            thisComments.push(comment[x]);
        }
        console.log("array = ",thisComments);
    },[]);
    const [val, setVal] =useState(0);
    return (
    <div>
      {
        thisComments.map((c)=>{
            <Paper>{c.val}</Paper>
            setVal(val+1);
        })
      }
    </div>
  )
}

export default ShowComment;
