import NavBar from "../../Component/NavBar/App";
import styles from "./dashboard.module.css";
import SideNavBar from "../../Component/Sidenavbar/SideNavBar";
import MCard from "../../Component/Card/Card";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

function Dashboard() {
  const uniqueEmail = localStorage.getItem("uniqueEmail");
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUser = async()=>{
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
    }
    getUser();
    
  },[]);

  const [classes, setClasses] = useState([]);
  const classCollectionRef = collection(db, "Class");
  useEffect(() => {
    const getClass = async()=>{
        const data = await getDocs(classCollectionRef);
        setClasses(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
    }
    getClass();
  },[]);
  return (
    
    <>
    {
        users.map((user)=>{
          return(
            (user.email==uniqueEmail)?
            <div className={styles.container10}>
            <div>
              <div style={{ position: "static" }}>
                <SideNavBar user={user}/>
              </div>
            </div>
            <div className={styles.item2}>
              <div className={styles.item1}>
                <div>
                  <NavBar user={user}/>
                </div>
                <div className={styles.item4}>
                  {
                    classes.map((c)=>{
                      return(
                        <>
                        {
                          (c.email===uniqueEmail) ?
                          <MCard c={c}/>
                          : <>
                          {Object.keys(user).map((key, index) => {
                            return (
                              <>
                              <br/>
                              {
                                (key.substring(0,9)=="classCode" && user[key]==c.code) ? 
                                  <div>
                                  <MCard c={c}/>
                                  </div>
                                  : null
                                  }
                              </>
                            );
                          })}
                          </>
                        }
                        </>
                      )
                    })
                  }
                  
                  
                </div>
              </div>
            </div>
            </div>
            :null
          )})
    }
      
    </>
  );
}

export default Dashboard;
