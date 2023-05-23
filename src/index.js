import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { registerLicense } from "@syncfusion/ej2-base";
import Calendar from "./Pages/Calendar/Calendar"
import Signin from "./Pages/Signin/Signin";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Profile/Profile";
import EditProfile from "./Pages/EditProfile/EditProfile";
import CreateClass from "./Pages/CreateClass/CreateClass";
import NewsFeed from "./Pages/NewsFeed/NewsFeed";
import JoinClass from "./Pages/JoinClass/JoinClass";
import FullPost from "./Pages/FullPost/FullPost";
import Resultshow from "./Pages/Resultshow/App";
import Resultassign from "./Pages/ResultAssign/ResultAssign";
import PublishedResult from "./Pages/Resultshow/PublishedResult";


const root = ReactDOM.createRoot(document.getElementById("root"));
registerLicense(
  "Mgo+DSMBaFt/QHRqVVhkXlpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jSH5Vd0RiXXted3BXQw==;Mgo+DSMBPh8sVXJ0S0J+XE9AdFRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31Td0VlWH5fdHBVQWVbVA==;ORg4AjUWIQA/Gnt2VVhkQlFacl1JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkRjX35fcXBRRmdbUEE=;ODkwMDkzQDMyMzAyZTM0MmUzMERCMG1yTHhHUWQrL2l6YTRieFFuSFQwS3B2R1AwZ1k2UUZlaVNCZlhtUjg9;ODkwMDk0QDMyMzAyZTM0MmUzMEJmclBVaFlCcWhrVDFSSHVzTXpWZVRCNTUvTU0zTjViOGhrRnQxV1R2Mjg9;NRAiBiAaIQQuGjN/V0Z+WE9EaFtAVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUViWXlfcXVRQmBUVUxz;ODkwMDk2QDMyMzAyZTM0MmUzMGk3bFlncGx2cWNFM1lUbWZOczF3b3c3eTV4S2pyY0pBdUNOYUdDUEtiL3M9;ODkwMDk3QDMyMzAyZTM0MmUzME9HQXJMcFdEcWlNeUw0SGxPVjJzNG9majhmM0lKY252TjAvY3Z4Y29rcGM9;Mgo+DSMBMAY9C3t2VVhkQlFacl1JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkRjX35fcXBRRmlfU0E=;ODkwMDk5QDMyMzAyZTM0MmUzMEcxL2pwWHFnbkhlYlBXQUswNUFkbEVKenRXNWJiMWRqT3g5RmJEYnZGUkk9;ODkwMTAwQDMyMzAyZTM0MmUzMFFOQnNjTmVZRVRwSG5NS0J4VUxNQUFEUEk1SWpHSzdvRTdwajlQR2ZHSzA9;ODkwMTAxQDMyMzAyZTM0MmUzMGk3bFlncGx2cWNFM1lUbWZOczF3b3c3eTV4S2pyY0pBdUNOYUdDUEtiL3M9"
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/Calendar" element={<Calendar/>} />
        <Route exact path='/' element={<Signin/>}/>
        <Route exact path='/Profile' element={<Profile/>}/>
        <Route exact path='/EditProfile' element={<EditProfile/>}/>
        <Route exact path='/CreateClass' element={<CreateClass/>}/>
        <Route exact path='/NewsFeed' element={<NewsFeed/>}/>
        <Route exact path='/JoinClass' element={<JoinClass/>}/>
        <Route exact path='/NewsFeed/FullPost' element={<FullPost/>}/>
        <Route exact path='/Resultassign' element={<Resultassign/>}/>
        <Route exact path='/ResultShow' element={<Resultshow/>}/>
        <Route exact path='/PublishResult' element={<PublishedResult/>}/>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
