import * as React from "react";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import General from "./General";
import EditInfo from "./EditInfo";
import EditPass from "./EditPass";
import SocialProfile from "./SocialProfile";
import { Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Box, Typography } from "@mui/material";
import NavBar from "../../Component/NavBar/App";
import Back from "../../Component/Back";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function EditProfile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [data, setData] = useState({
    link: "/General",
    info: "Update your username and manage your account",
  });

  
  return (
    <>
      <div>
        <NavBar />
      </div>
      <Back/>
      <Container sx={{pt:5}}>
        <>
          <Box sx={{ ml: 10, flexGrow: 1, display: "flex" }}>
            <Avatar
              alt="Remy Sharp"
              src={localStorage.getItem("userDP")}
              sx={{ width: 80, height: 80 }}
            />
            <Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <Typography
                  variant="h4"
                  component="body2"
                  sx={{ marginLeft: 5 }}
                >
                  {localStorage.getItem("userName")}
                </Typography>
                <Typography variant="h5" component="body2">
                  {data.link}
                </Typography>
              </Box>
              <Typography
                variant="body"
                component="body2"
                sx={{ mt: 0, marginLeft: 5 }}
              >
                {data.info}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, display: "flex", height: 250 }}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{
                mt: 3,
                width: 200,
                borderRight: 1,
                borderColor: "divider",
              }}
            >
              <Tab
                onClick={() =>
                  setData({
                    link: "/General",
                    info: "Set up your general information",
                  })
                }
                label="General"
                {...a11yProps(0)}
              />
              <Tab
                onClick={() =>
                  setData({
                    link: "/Edit Profile",
                    info: "Set up your profile and contact information",
                  })
                }
                label="Edit Information"
                {...a11yProps(1)}
              />
              <Tab
                onClick={() =>
                  setData({
                    link: "/Password",
                    info: "Manage your password",
                  })
                }
                label="Password"
                {...a11yProps(2)}
              />
              <Tab
                onClick={() =>
                  setData({
                    link: "/Social Profile",
                    info: "Add elsewhere links to your profile",
                  })
                }
                label="Social Profile"
                {...a11yProps(3)}
              />
            </Tabs>
            <Box sx={{ width: 1000 }}>
              <TabPanel value={value} index={0}>
                <General/>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <EditInfo/>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <EditPass/>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <SocialProfile/>
              </TabPanel>
            </Box>
          </Box>
        </>
      </Container>
    </>
  );
}
