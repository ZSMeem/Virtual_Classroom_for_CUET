import { collection, getDocs } from 'firebase/firestore';
import React from 'react'
import { useEffect,useRef,useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import * as Components from './Components';
const Signin = () => {
    const uniqueEmail=useRef();
    const [person, setPerson] = useState(true);
    const [password, setPassword] =  useState('');
    const [email, setEmail] = useState('');
    const [users,setUsers]= useState([]);
    
    const userCollectionRef = collection(db,"users");
    const nevigate = useNavigate();
    useEffect(() => {
        const getUser = async()=>{
            const userData = await getDocs(userCollectionRef);
            setUsers(userData.docs.map((doc)=>({...doc.data(), id:doc.id})));
        }
        getUser();
        console.log("users = =",users.name);
    },[]);

    const signinHandle =(event)=>{
        event.preventDefault()
        
        let found = false;
        let c=0;
        for(let i=0;i<users.length;i++)
        {
            console.log("person = ",users[i])
            if(email==users[i].email && password==users[i].password && ((person && !users[i].student) || (!person && users[i].student)))
            {
                found=true;
                console.log(users[i]);
                if(users[i].student)
                {
                    localStorage.setItem("userTeacher",false);
                }
                else
                {
                    localStorage.setItem("userTeacher",true);
                }
                localStorage.setItem("userName",users[i].name);
                localStorage.setItem("userDP",users[i].dp);
                localStorage.setItem("userID",users[i].ID);
                localStorage.setItem("userEmail", users[i].email);
                localStorage.setItem("userDepartment",users[i].department);
                localStorage.setItem("userDesignation",users[i].designation);
                localStorage.setItem("linkedin",users[i].linkedin);
                localStorage.setItem("github",users[i].github);
                localStorage.setItem("instagram",users[i].instagram);
                localStorage.setItem("facebook",users[i].facebook);
                localStorage.setItem("userPassword",users[i].password);
                localStorage.setItem("userLocation",users[i].location);
                localStorage.setItem("userContact",users[i].contact);
                localStorage.setItem("userBio",users[i].bio);
                localStorage.setItem("userRoll",users[i].roll);
            }
            c=c+1;
        }
        if(!found && c==users.length)
        {
            alert("You've entered incorrect email or password!!")
        }
        else
        {
            localStorage.setItem("uniqueEmail",email);
           
            nevigate('/Dashboard')
        }
    }

    return(

        <Components.Container>
            <Components.SignUpContainer signinIn={person}>
                <Components.Form>
                    <Components.Title>Sign In</Components.Title>
                    <Components.Input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
                    <Components.Input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                    <Components.Button onClick={signinHandle}>Sign In</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={person}>
                 <Components.Form>
                     
                     <Components.Title>Sign in</Components.Title>
                     <Components.Input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
                     <Components.Input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                     <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                     <Components.Button onClick={signinHandle}>Sign In</Components.Button>
                 </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={person}>
                <Components.Overlay signinIn={person}>

                    <Components.LeftOverlayPanel signinIn={person}>
                        <Components.Title>Student?</Components.Title>
                        <Components.Paragraph>
                        Enter Your details.
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => setPerson(true)}>
                            Click here if you are Teacher
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={person}>
                      <Components.Title>Teacher?</Components.Title>
                      <Components.Paragraph>
                          
                          Please login with your personal info.
                      </Components.Paragraph>
                          <Components.GhostButton onClick={() => setPerson(false)}>
                          Click here if you are student 
                          </Components.GhostButton> 
                    </Components.RightOverlayPanel>

                </Components.Overlay>
            </Components.OverlayContainer>

        </Components.Container>
    )
}

export default Signin
