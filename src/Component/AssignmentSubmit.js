import React from "react";
import styles from '../my_style.module.css'
import { Box,Grid,Paper,Typography } from "@material-ui/core";
import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function AssignmentSubmit(){
    const fileRef = useRef(null);
    return(
        <div >
            <Box sx={{display: 'flex',flexWrap: 'wrap','& > :not(style)': {m: 1,width: 128,height: 128,},}}>
            <Paper  elevation={3} style={{margin:50, padding:20}}>
            <div className={styles.assignmentSubmit}>
                <Grid container>
                    <Grid item sm={6}>
                    <Typography variant="h5" gutterBottom style={{color:'gray'}}>
                        Your Work
                    </Typography>
                    </Grid>
                    <Grid item sm={6} className={styles.Missing}>
                    <Typography variant="subtitle2" gutterBottom>
                        Missing
                    </Typography>
                    </Grid>
                </Grid>
            </div>
            <Box direction="row" spacing={2}>
            <input ref={fileRef} hidden type="file" />
            <Button sx={{mt:2, height:40}}variant="outlined" onClick={() => {fileRef.current.click(); }}fullWidth>
                <AddIcon className={styles.shareButton} />
                Add attachment
            </Button>
            <Button sx={{mt:1, height:40}}variant="contained" fullWidth>
                Submit
            </Button>
            </Box>
            
            </Paper> 
            </Box>
            
        </div>
    )
}
export default AssignmentSubmit;