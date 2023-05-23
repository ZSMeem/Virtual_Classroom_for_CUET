import * as React from 'react';
import {useState} from 'react';
import { styled } from '@mui/material/styles';
import {Grid,Paper,Box} from '@mui/material';
import cg from './ct.json'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

function CGPA(){
return (
    <Paper sx={{ width: '100%', backgroundColor:'#FFFBAC' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{padding: 2}}>
        {
            cg.map(cg=>(
                <Grid key={cg.id} item xs={6}>
                    <Item>{cg.level} {cg.term} CGPA- {cg.cg}</Item>
                </Grid>
            ))
        }
        <Grid key={cg.id} item xs={12}>
            <Item>Total CGPA: 3.18</Item>
        </Grid>
        </Grid>
    </Paper>
    );
}


export default CGPA;
