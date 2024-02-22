import React, { useState } from "react";
import { Notifications } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: "#F3F4F6",
  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
  marginLeft: 0,
  width: "35%", // Increase width of the search input
}));

const SearchIconWrapper = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "8px",
  transform: "translateY(-50%)",
});

const SearchInput = styled(InputBase)(({ theme }) => ({
  paddingLeft: "32px", // Adjust padding to accommodate the icon
  flex: 1,
  fontSize: "14px", // Reduce font size of the placeholder
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavBarLogIn = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#FFFFFF",
        paddingLeft: "20px",
        paddingRight: "20px",
        padding: "20px",
      }}
    >
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: { xs: "none", sm: "block", color: "gray" },
            fontFamily: "Roboto",
            lineHeight: "24px",
            fontSize: "16px",
            fontWeight: "400",
          }}
        >
          Location
          <Typography
            variant="h6"
            sx={{
              display: { xs: "none", sm: "block", color: "#374151" },
              fontFamily: "Roboto",
              lineHeight: "30px",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            <PlaceIcon sx={{ color: "gray" }} />
            Ikorodu, Lagos
          </Typography>
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: "gray" }} />
          </SearchIconWrapper>
          <SearchInput
            placeholder="Search doctor, hospitals..."
            sx={{ width: "calc(100% - 32px)", height: "50px" }} // Increase width of the input
          />
        </Search>
        <Icons>
          <Badge badgeContent={0} color="error">
            <Notifications sx={{ color: "gray" }} />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Badge badgeContent={0} color="error">
            <Notifications sx={{ color: "gray" }} />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBarLogIn;
