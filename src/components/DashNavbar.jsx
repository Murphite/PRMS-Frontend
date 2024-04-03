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

export default function DashNavbar() {
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
                    <NavbarBrand>
                        <div
                            className="pb-1"
                            style={{
                                fontFamily: "Roboto",
                                lineHeight: "24px",
                                fontSize: "16px",
                                fontWeight: "400",
                            }}
                        >
                            <p
                                className="ml-0 text-inherit"
                                style={{ fontSize: "18px" }}
                            >
                                Location
                            </p>
                            <div className="flex items-center">
                                <img src={LocationIcon} alt="Location Icon" />
                                <p className="ml-0 font-bold text-inherit">
                                    Ikorodu, Lagos
                                </p>
                            </div>
                        </div>
                    </NavbarBrand>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "10px",
                }}
            >
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[20rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper:
                            "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Search doctor, hospitals, clinics..."
                    size="sm"
                    startContent={<img src={SearchIcon} alt="Search Icon" />}
                    type="search"
                    style={{ width: "100%" }}
                />

                <img src={NotificationIcon} alt="Notification Icon" />

                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name="Jason Hughes"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="gap-2 h-14">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">zoey@example.com</p>
                        </DropdownItem>
                        <DropdownItem key="profile_details">
                            Profile Details
                        </DropdownItem>
                        <DropdownItem key="dashboard">Dashboard</DropdownItem>
                        <DropdownItem key="appointment">
                            Appointment
                        </DropdownItem>
                        <DropdownItem key="doctors">Doctors</DropdownItem>
                        <DropdownItem key="map">Map</DropdownItem>
                        <DropdownItem key="Favorite">Favorite</DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
}
