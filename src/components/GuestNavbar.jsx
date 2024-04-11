import { useContext, useState } from "react";
import {
    Tabs,
    Tab,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

import logo from "../assets/images/Health.png";
import { AppContext } from "./../context/AppContext";

export default function GuestNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { accessToken } = useContext(AppContext);

    const menuItems = ["Home", "About", "Why Us", "Sign in", "Log Out"];

    return (
        <Navbar
            position="sticky"
            style={{
                background: "#FFFFFF",
                paddingTop: "5px",
                paddingLeft: "20px",
                paddingRight: "20px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add box-shadow
                borderRadius: "10px", // Add border-radius
            }}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarBrand>
                <p className="font-bold text-inherit">
                    <img
                        src={logo}
                        alt="health-logo"
                        style={{ width: "50px", height: "auto" }}
                    />
                </p>
            </NavbarBrand>

            {/* Render NavbarMenuToggle only in mobile view */}
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />

            {/* Conditionally render NavbarMenu based on menu state */}
            {isMenuOpen ? (
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === menuItems.length - 1
                                        ? "danger"
                                        : "foreground"
                                }
                                className="w-full"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            ) : null}

            <div
                className="items-center hidden sm:flex" // Use flexbox to align items horizontally and center Tabs
                style={{ flex: "3", justifyContent: "center" }} // Add flex: 1 to allow Tabs to take up remaining space
            >
                {/* Display Tabs component */}
                <Tabs
                    aria-label="Options"
                    variant="underlined"
                    classNames={{
                        tabList:
                            "gap-6 w-full relative rounded-none p-0 border-divider",
                        cursor: "w-full bg-[#009688]",
                        tabContent: "group-data-[selected=true]:text-[#009688]",
                    }}
                >
                    <Tab
                        title={
                            <div className="space-x-2">
                                <span>Home</span>
                            </div>
                        }
                    />
                    <Tab
                        title={
                            <div className="space-x-2">
                                <span>About</span>
                            </div>
                        }
                    />
                    <Tab
                        title={
                            <div className="space-x-2">
                                <span>Why Us</span>
                            </div>
                        }
                    />
                </Tabs>
            </div>

            {/* Buttons at the end */}
            <NavbarContent className="items-center hidden sm:flex">
                {accessToken !== "" ? (
                    <NavbarItem>
                        <Link to="/dashboard">
                            {" "}
                            <Button
                                radius="full"
                                variant="bordered"
                                style={{
                                    color: "#009688",
                                    width: "90px",
                                    border: "1px solid #009688",
                                    backgroundColor: "transparent",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#00695c";
                                    e.target.style.color = "#FFFFFF";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor =
                                        "transparent";
                                    e.target.style.color = "#009688";
                                }}
                            >
                                Dashboard
                            </Button>
                        </Link>
                    </NavbarItem>
                ) : (
                    <>
                        <NavbarItem>
                            <Link to="/login">
                                {" "}
                                <Button
                                    radius="full"
                                    variant="bordered"
                                    style={{
                                        color: "#009688",
                                        width: "90px",
                                        border: "1px solid #009688",
                                        backgroundColor: "transparent",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor =
                                            "#00695c";
                                        e.target.style.color = "#FFFFFF";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor =
                                            "transparent";
                                        e.target.style.color = "#009688";
                                    }}
                                >
                                    Log in
                                </Button>
                            </Link>
                        </NavbarItem>

                        <NavbarItem>
                            <Link to="/signup">
                                <Button
                                    radius="full"
                                    className="text-white shadow-lg bg-gradient-to-tr"
                                    style={{
                                        backgroundColor: "#009688",
                                        width: "90px",
                                        color: "white",
                                        "&:hover": {
                                            backgroundColor: "#00695c",
                                        },
                                    }}
                                >
                                    Sign Up
                                </Button>
                            </Link>
                        </NavbarItem>
                    </>
                )}
            </NavbarContent>
        </Navbar>
    );
}
