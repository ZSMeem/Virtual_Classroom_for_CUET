import { Box, Button } from "@mui/material";

function UploadImage()
{
    const fileSelectedHandler = event =>{
        console.log(event.target.files[0]);
    }
    const fileUploadHandler=()=>{

    }
    return(
        <Box>
            <input 
            style={{display:'none'}}
            type="file" 
            onChange={fileSelectedHandler}
            />
            <Button variant="outlined" onclick={this.fileUploadHandler}>Upload</Button>
        </Box>
    )
}
export default UploadImage;