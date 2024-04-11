import SearchIcon from "../assets/vectors/search-normal.svg";
import LocationIcon from "../assets/vectors/location.svg";
import NotificationIcon from "../assets/vectors/Notification.svg";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Input,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar,
} from "@nextui-org/react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function DashNavbar() {
    const navigate = useNavigate();
    const { accessToken, setAccessToken } = useContext(AppContext);
    const decodedToken = jwtDecode(accessToken);

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        setAccessToken("");
        navigate("/");
    };
    return (
        <Navbar
            position="sticky"
            style={{
                background: "#FFFFFF",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingLeft: "20px",
                paddingRight: "20px",
                // boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
        >
            <NavbarContent>
                <NavbarItem>
                    <NavbarBrand></NavbarBrand>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "10px",
                }}
            >
                {/* <img src={NotificationIcon} alt="Notification Icon" /> */}

                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name={decodedToken.name}
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="gap-2 h-14">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">
                                {decodedToken.email}
                            </p>
                        </DropdownItem>
                        <DropdownItem
                            key="logout"
                            color="danger"
                            onClick={handleLogout}
                        >
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
}
