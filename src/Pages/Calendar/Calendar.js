import NavBar from "../../Component/NavBar/App";
import "./App.css";
import SideNavBar from "../../Component/Sidenavbar/SideNavBar";
import App from "./App";



function Calendar() {

  return (
    <>
    
      <div className="container10">
        <div className="item-3">
          <div style={{ position: "static" }}>
            <SideNavBar />
          </div>
        </div>
        <div className="item-2">
          <div className="item-1">
            <div >
              <NavBar />
            </div>
            <div className="item-4">
                <App/>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
