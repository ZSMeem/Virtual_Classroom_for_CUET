import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Link from "@mui/material/Link";
import Badge from "@mui/material/Badge";
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../../firebase";

const pages = [];
const settings = ["Zarin Shaima has posted a new assignment on CSE-321", "Adiba sulatana has posted a new Quiz on CSE-322", "Tahlil Abrar harassed Mamun", "Accouncement post: Sunday is holiday. "];

function NavBar() {
  const uniqueEmail = localStorage.getItem("uniqueEmail");
  const [users, setUsers] = useState([]);

  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUser = async()=>{
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
    }
    getUser();
  },[users]);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const nevigate = useNavigate();
  const handleLogout=()=>{
    localStorage.setItem("uniqueEmail","");
    nevigate('/Siginin')
  }
  return (
    <>
    {
      users.map((user)=>{
        return(
          (user.email==uniqueEmail)?
<AppBar
      position="sticky"
      color="primary"
      sx={{
        backgroundColor: "#f7de52",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "Flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,

              fontFamily: "Poppins",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            CUET CLASSROOM
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              
            }}
          >
            <Tooltip title="Logout">
              <Link href="/">
                <Avatar sx={{ bgcolor: "#f7d100" }}>
                  <LogoutIcon onClick={handleLogout}/>
                </Avatar>
              </Link>
            </Tooltip>
            <Tooltip title="Notifications" >
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ paddingTop: 0, paddingBottom: 0, borderRadius: "100%" }}
              >
                <Badge
                  badgeContent={12}
                  color="error"
                  max={9}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
             
                  
                 
                >
                  <Avatar sx={{ bgcolor: "#f7d100" }}>
                    <NotificationsIcon />
                  </Avatar>
                </Badge>
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} sx={{ minwidth:"400px", height:"70px",}}  >
                  
                  <AssignmentOutlinedIcon sx={{marginRight:"5px"}}/>
               
                  <Typography >{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Tooltip title="Profile">
              <Link href="/profile">
                <Avatar
                  alt="Remy Sharp"
                  src={user.dp}
                  href="/profile"
                />
              </Link>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
          :null
        )
      })
    }
    </>
    
  );
}
export default NavBar;
