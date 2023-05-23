import styles from "../my_style.module.css";
import {
  Paper,
  Box,
  TextField,
  Container,
  Button,
  Card,
} from "@material-ui/core";
import { Form, Formik, Field } from "formik";
import { useRef } from "react";
import Previewfile from "./previewfile";
export default function Share2() {
    const fileRef =useRef(null);
  return (
    <Container>
      <Formik
        initialValues={{
          file: null,
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values , setFieldValue}) => (
          <Form>
          <input
          ref={fileRef}
          hidden
          type="file" 
          onChange={(event)=>{
            setFieldValue("file", event.target.files[0]);
          }}
          />
          {values.file && <Previewfile file={values.file}/>}
          <button onClick={()=>{
            fileRef.current.click();
          }}>upload</button>
          <button type="submit">Submit</button>
        </Form>
        )}
      </Formik>
    </Container>
  );
}
