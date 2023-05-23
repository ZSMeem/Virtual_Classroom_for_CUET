import React from 'react'
const Previewfile = ({file}) => {
    const [preview, setPreview]= React.useState(null);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
        setPreview(reader.result);
    }
    return (
    <div>
      <img src={preview} alt="preview" width="200px"height="200px"/>
    </div>
  )
}

export default Previewfile;
