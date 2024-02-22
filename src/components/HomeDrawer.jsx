import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoginIcon from "@mui/icons-material/Login";
import SignUpIcon from "@mui/icons-material/AssignmentInd";

const pages = [
  { text: "Home", icon: <HomeIcon sx={{ color: "#009688" }} /> },
  { text: "About", icon: <InfoIcon sx={{ color: "#009688" }} /> },
  { text: "Why Us", icon: <FavoriteIcon sx={{ color: "#009688" }} /> },
  { text: "Log in", icon: <LoginIcon sx={{ color: "#009688" }} /> },
  { text: "Sign up", icon: <SignUpIcon sx={{ color: "#009688" }} /> },
];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{ width: "223px" }} // Increase the width of the drawer
      >
        <List>
          <Typography
            sx={{
              paddingTop: "12px",
              paddingLeft: "24px",
            }}
          >
            <img
              src="Images/HealthLogo.png"
              alt="health-logo"
              style={{ width: "50px", height: "auto" }} // Adjust the width as needed
            />
          </Typography>
          {pages.map((page, index) => (
            <ListItemButton
              onClick={() => setOpenDrawer(false)}
              key={index}
              sx={{ padding: "10px 35px" }}
            >
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText primary={page.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <IconButton
        sx={{ color: "#009688", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </>
  );
};

export default DrawerComp;
