import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import adminimage from "../../assets/vectors/adminframe.svg";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Container from "../../components/Container";
import CustomInput from "../../components/Input";
import { signUp } from "../../api/auth";
import ShowErrorList from "../../components/ShowErrorList";

export default function Register() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        street: "",
        city: "",
        state: "",
        country: "",
        latitude: 0,
        longitude: 0,
    });

    const [errors, setErrors] = useState(null);

    const [passwordType, setPasswordType] = useState("password");

    useEffect(() => {
        // Fetch user's current location using Google Geolocation API
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    fetchAddressFromCoordinates(latitude, longitude);
                },
                (error) => {
                    console.error("Error getting geolocation:", error);
                },
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    const fetchAddressFromCoordinates = (latitude, longitude) => {
        const geocoder = new window.google.maps.Geocoder();
        const latlng = new window.google.maps.LatLng(latitude, longitude);
        geocoder.geocode({ latLng: latlng }, function (results, status) {
            if (status === window.google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    const addressComponents = results[0].address_components;
                    let addressData = {};
                    for (let i = 0; i < addressComponents.length; i++) {
                        const component = addressComponents[i];
                        switch (component.types[0]) {
                            case "street_number":
                                addressData.street = component.long_name;
                                break;
                            case "route":
                                addressData.street += " " + component.long_name;
                                break;
                            case "locality":
                                addressData.city = component.long_name;
                                break;
                            case "administrative_area_level_1":
                                addressData.state = component.long_name;
                                break;
                            case "country":
                                addressData.country = component.long_name;
                                break;
                            default:
                                break;
                        }
                    }
                    setData({ ...data, ...addressData, latitude, longitude });
                }
            } else {
                console.error("Geocoder failed due to: " + status);
            }
        });
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await signUp(data);

        if (res.errors.length > 0) {
            console.log(res.errors);
            setErrors(res.errors);
            return;
        }

        navigate("/login");
    };

    return (
        <div className="flex flex-col space-y-5 lg:flex-row">
            <div className=" flex flex-col w-full  space-y-6 bg-[#009688] p-5 lg:space-y-36 lg:flex-col-reverse lg:w-1/2 items-center justify-center h-full">
                <div className="flex flex-col items-center ">
                    <img
                        src={adminimage}
                        alt="images of doctors"
                        className="max-w-52 lg:max-w-full lg:pt-12 lg:pb-32"
                    />
                </div>
                <div className="flex flex-col items-center space-y-4 text-gray-100 md:max-w-lg">
                    <h2 className="text-2xl font-bold text-center lg:text-4xl">
                        Start Your Wellness Journey!
                    </h2>
                    <p className="text-center">
                        Ready for a healthier and happier you? Join us now!
                        Create your account for personalized health insights,
                        activity tracking, nutrition guidance, mental wellness
                        support, and more. Your well-being starts here.
                    </p>
                </div>
            </div>

            <div className="items-center justify-center w-full px-3 py-6 mb-3 md:px-4 lg:w-1/2 lg:px-5">
                <Container>
                    <p className="mt-12 mb-12 text-4xl font-medium tracking-normal text-center text-gray-900 leading-15 ">
                        Create Account
                    </p>

                    {errors && (
                        <div className="mb-3">
                            {<ShowErrorList errors={errors} />}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <CustomInput
                            id="firstName"
                            name="firstName"
                            type="text"
                            label="First name"
                            required
                            autoComplete="first name"
                            onChange={handleChange}
                        />

                        <CustomInput
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            type="text"
                            required
                            autoComplete="last name"
                            onChange={handleChange}
                        />

                        <CustomInput
                            id="email"
                            name="email"
                            type="email"
                            label="Email"
                            required
                            onChange={handleChange}
                        />

                        <CustomInput
                            id="phoneNumber"
                            name="phoneNumber"
                            type="phoneNumber"
                            label="Phone Number"
                            required
                            onChange={handleChange}
                        />

                        <CustomInput
                            id="street"
                            name="street"
                            type="text"
                            label="Street Name"
                            required
                            autoComplete="street name"
                            onChange={handleChange}
                        />

                        <CustomInput
                            id="city"
                            name="city"
                            type="text"
                            label="City"
                            required
                            autoComplete="city name"
                            onChange={handleChange}
                        />

                        <CustomInput
                            id="state"
                            name="state"
                            type="text"
                            label="State"
                            required
                            autoComplete="state"
                            onChange={handleChange}
                        />

                        <CustomInput
                            id="country"
                            name="country"
                            type="text"
                            label="Country"
                            required
                            autoComplete="country"
                            onChange={handleChange}
                        />

                        <CustomInput
                            type={passwordType}
                            name="password"
                            label="Password"
                            onChange={handleChange}
                            endContent={
                                passwordType !== "text" ? (
                                    <FaEyeSlash
                                        cursor={"pointer"}
                                        fontSize={"20px"}
                                        onClick={() => setPasswordType("text")}
                                    />
                                ) : (
                                    <FaEye
                                        cursor={"pointer"}
                                        fontSize={"20px"}
                                        onClick={() =>
                                            setPasswordType("password")
                                        }
                                    />
                                )
                            }
                            required
                        />

                        <div className="w-2/3 pt-6 mx-auto text-center">
                            <button className="bg-[#009688] py-2 w-full text-white rounded-full font-[roboto]">
                                Create Account
                            </button>
                        </div>
                    </form>
                </Container>
            </div>
        </div>
    );
}
