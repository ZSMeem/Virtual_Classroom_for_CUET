import React, { useEffect, useState } from "react";
import PublishedResult from "./PublishedResult";
import NavBar from "../../Component/NavBar/App"; //change here
import styles from "./app.module.css";
import SideNavBar from "../../Component/Sidenavbar/SideNavBar"; //change here

const data = [
  {
    Course_Code: "CSE-100",
    Course_Credit: "0.75",
    Level_Term: "Level 1-Term 1",
    Sessional: "Yes",
    Result: "B+",
    Regular: "Yes",
  },
  {
    Course_Code: "CSE-141",
    Course_Credit: "3",
    Level_Term: "Level 1-Term 1",
    Sessional: "No",
    Result: " B+",
    Regular: "Yes",
  },
  
];

function ResultShow() {
  const [studentdata, setStudentdata] = useState([]);
  useEffect(() => {
    // npm install react-table --force
    // npm install @syncfusion/ej2-react-grids --force
    // fetch data here

    setStudentdata(data);
    
  }, []);

  return (
    <>
      <div className={styles.container10}>
        <div className={styles.item3}>
          <div style={{ position: "static" }}>
            <SideNavBar />
          </div>
        </div>
        <div className={styles.item2}>
          <div className={styles.item1}>
            <div>
              <NavBar />
            </div>
            <div className={styles.item4}>
              <h2>Published Result</h2>
              <PublishedResult data={studentdata} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultShow;
