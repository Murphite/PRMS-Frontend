import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./HomeDrawer";

const NavBar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar
        position="sticky"
        sx={{
          background: "#FFFFFF",
          paddingTop: "5px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <Toolbar>
          <Typography>
            <img
              src="/Images/HealthLogo.png"
              alt="health-logo"
              style={{ width: "50px", height: "auto" }} // Adjust the width as needed
            />
          </Typography>

          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{
                  marginLeft: "auto",
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#009688", // Indicator color
                  },
                }}
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab
                  sx={{
                    textTransform: "none", // Prevent text transformation
                    color: "#0D2B46", // Text color
                    "&.Mui-selected": {
                      color: "#009688", // Selected text color
                    },
                  }}
                  label="Home"
                />
                <Tab
                  sx={{
                    textTransform: "none", // Prevent text transformation
                    color: "#0D2B46", // Text color
                    "&.Mui-selected": {
                      color: "#009688", // Selected text color
                    },
                  }}
                  label="About"
                />
                <Tab
                  sx={{
                    textTransform: "none", // Prevent text transformation
                    color: "#0D2B46", // Text color
                    "&.Mui-selected": {
                      color: "#009688", // Selected text color
                      textTransform: "none", // Prevent text transformation
                    },
                  }}
                  label="Why Us"
                />
              </Tabs>

              <Button
                sx={{
                  marginLeft: "auto",
                  borderRadius: "20px",
                  backgroundColor: "#FFFFFF",
                  textSize: "20px",
                  color: "#009688",
                  border: "1px solid #009688",
                  textTransform: "none", // Prevent text transformation
                  width: "100px",
                  height: "40px",
                  boxShadow: "none", // Remove shadow
                  "&:hover": {
                    backgroundColor: "#009688", // Change background color on hover
                    color: "#FFFFFF", // Change text color on hover
                  },
                }}
                variant="contained"
              >
                Log in{" "}
              </Button>
              <Button
                sx={{
                  marginLeft: "10px",
                  borderRadius: "20px",
                  backgroundColor: "#009688",
                  textSize: "20px",
                  textTransform: "none", // Prevent text transformation
                  width: "100px",
                  height: "40px",
                  boxShadow: "none", // Remove shadow
                  "&:hover": {
                    backgroundColor: "#009688", // Change background color on hover
                    color: "#FFFFFF", // Change text color on hover
                  },
                }}
                variant="contained"
              >
                Sign up{" "}
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;
