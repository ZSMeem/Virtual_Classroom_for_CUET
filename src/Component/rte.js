import { useState } from 'react';
import { useRef } from 'react';
import { Paper, TextField } from '@material-ui/core';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from '../my_style.module.css'
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
const useStyles = makeStyles({
  toolbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

function MyComponent() {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const quillRef = useRef(null);
  const handleChange = (newValue) => {
    setValue(newValue);
  }
  
  const handleBold = () => {
    quillRef.current.format('bold', true);
  }

  return (
    <Paper>
    <ReactQuill
        modules={{
          toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
          ],
        }}
      />
          <Paper className={styles.shareBottom}>
            <div className={styles.shareOptions}>
              <div className={styles.shareOption}>
                <PermMedia htmlColor="tomato" className="shareIcon" />
                <span className={styles.shareOptionText}>Photo or Video</span>
              </div>
              <div className={styles.shareOption}>
                <Label htmlColor="blue" className={styles.shareIcon} />
                <span className={styles.shareOptionText}>Tag</span>
              </div>
              <div className={styles.shareOption}>
                <Room htmlColor="green" className={styles.shareIcon} />
                <span className={styles.shareOptionText}>Location</span>
              </div>
              <div className={styles.shareOption}>
                <EmojiEmotions
                  htmlColor="goldenrod"
                  className={styles.shareIcon}
                />
                <span className={styles.shareOptionText}>Feelings</span>
              </div>
            </div>
            <button className={styles.shareButton}>Share</button>
          </Paper>
    </Paper>
  );
}
export default MyComponent;