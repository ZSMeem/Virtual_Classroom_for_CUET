
import { Button } from '@mui/material';
import React from 'react';
import {  useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Back = () => {
  const nevigate=useNavigate();
  return (
    <Button sx={{ml:3, textTransform:"none", position:"sticky"}} color="primary" onClick={() => {
        nevigate("/Dashboard");
      }}>
    <ArrowBackIcon />
    <h4 style={{ marginLeft: "3px", paddingTop: "2px" }}>Dashboard</h4>
    </Button>
  );
};

export default Back;
