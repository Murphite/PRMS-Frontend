import { useState, useEffect } from "react";
import profile from "../../assets/vectors/profile.svg";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import InputError from "../../components/InputError";
import TextInput from "../../components/TextInput"


export default function Register() {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
		phoneNumber: "",
        password: "",
        confirmPassword: "",
        street: "",
        city: "",
        state: "",
        country: "",
        latitude: "",
        longitude: ""
    });

	const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        street: "",
        city: "",
        state: "",
        country: ""
    });


	const [passwordType, setPasswordType] = useState("password");
    
	const [confirmPasswordType, setConfirmPasswordType] =
        useState("confirmPassword");

    useEffect(() => {
        // Fetch user's current location using Google Geolocation API
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    fetchAddressFromCoordinates(latitude, longitude);
                },
                error => {
                    console.error('Error getting geolocation:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    const fetchAddressFromCoordinates = (latitude, longitude) => {
        const geocoder = new window.google.maps.Geocoder();
        const latlng = new window.google.maps.LatLng(latitude, longitude);
        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
            if (status === window.google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    const addressComponents = results[0].address_components;
                    let addressData = {};
                    for (let i = 0; i < addressComponents.length; i++) {
                        const component = addressComponents[i];
                        switch (component.types[0]) {
                            case 'street_number':
                                addressData.street = component.long_name;
                                break;
                            case 'route':
                                addressData.street += ' ' + component.long_name;
                                break;
                            case 'locality':
                                addressData.city = component.long_name;
                                break;
                            case 'administrative_area_level_1':
                                addressData.state = component.long_name;
                                break;
                            case 'country':
                                addressData.country = component.long_name;
                                break;
                            default:
                                break;
                        }
                    }
                    setData({ ...data, ...addressData, latitude, longitude });
                }
            } else {
                console.error('Geocoder failed due to: ' + status);
            }
        });
    };

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(data);
        // Call your API endpoint with form data including latitude and longitude
    };

    return (
			<div className="flex overflow-y-hidden AdminPage gap-x-40px">
				<div className="Admin w-2.5/5 p-[151px 149px 187px 149px] bg-teal-600">
					<div className="Intro w-[516px]   pt-[99px] mx-auto gap-x-4">
						<p className="Words font-medium text-3xl tracking-normal text-center leading-[60px] text-white ">
							Start Your Wellness Journey!
						</p>
						<p className="WordsTwo text-base font-normal leading-6 tracking-normal text-center text-white ">
							Ready for a healthier and happier you? Join us now!
							Create your account <br /> for personalized health
							insights, activity tracking, nutrition guidance, <br />{" "}
							mental wellness support, and more. Your well-being
							starts here.
						</p>
					</div>
					<img
						className="w-4/5 p-24 mx-auto bg-teal-600 images-design "
						src={profile}
					/>
				</div>
				<div className="AdminLogin w-[50%] bg-white">
					<p className="sign-in text-3xl font-medium leading-15 tracking-normal text-center text-black pt-24 ">
						Create Account
					</p>
					<>
						<form onSubmit={handleSubmit}>
							<div className="container p-5">
								<div className="cred px-[24px] border border-solid border-teal-600 py-[0px] w-full my-[20px] rounded-[8px] relative bg-teal-100 bg-opacity-50">
									<label className="text-[#009688] block pb-1">
										First name
									</label>
									<div className="flex items-center justify-between ">
										<TextInput
											id="firstName"
											type="text"
											placeholder="Enter your First Name"
											required
											className="bg-transparent focus:outline-none w-full"
											autoComplete="first name"
											onChange={handleChange}
										/>
										<InputError message={errors.firstName} className="mt-2" />
									</div>
								</div>
								<div className="cred px-[24px] border border-solid border-teal-600 py-[0px] w-full my-[20px] rounded-[8px] relative bg-teal-100 bg-opacity-50">
									<label className="text-[#009688] block pb-1">
										Last Name
									</label>
									<div className="flex items-center justify-between ">
										<TextInput
											id="lastName"
											type="text"
											placeholder="Enter your First Name"
											required
											className="bg-transparent focus:outline-none w-full"
											autoComplete="last name"
											onChange={handleChange}
										/>
										<InputError message={errors.lastName} className="mt-2" /> 
									</div>
								</div>
								
								
								<div className="cred px-[24px] py-[2px]  border border-solid border-teal-600 w-full my-[10px] rounded-[8px] bg-teal-100 bg-opacity-50">
									<label className="text-[#009688] block pb-1">
										Email
									</label>
									<TextInput
										id="email"
										type="email"
										placeholder="xyz@gmail.com"
										className="bg-transparent focus:outline-none w-full"
										required
										onChange={handleChange}
									/>
								</div>

								<div className="cred px-[24px] py-[2px]  border border-solid border-teal-600 w-full my-[10px] rounded-[8px] bg-teal-100 bg-opacity-50">
									<label className="text-[#009688] block pb-1">
										Phone Number
									</label>
									<TextInput
										id="phoneNumber"
										type="phoneNumber"
										placeholder="Phone Number"
										className="bg-transparent focus:outline-none w-full"
										required
										onChange={handleChange}
									/>
								</div>

								<div className="cred px-[24px] border border-solid border-teal-600 py-[0px] w-full my-[20px] rounded-[8px] relative bg-teal-100 bg-opacity-50">
									<label className="text-[#009688] block pb-1">
										Street
									</label>
									<div className="flex items-center justify-between ">
										<TextInput
											id="street"
											type="text"
											placeholder="Enter your Street Name"
											required
											className="bg-transparent focus:outline-none w-full"
											autoComplete="street name"
											onChange={handleChange}
										/>
										<InputError message={errors.street} className="mt-2" /> 
									</div>
								</div>

								<div className="cred px-[24px] border border-solid border-teal-600 py-[0px] w-full my-[20px] rounded-[8px] relative bg-teal-100 bg-opacity-50">
									<label className="text-[#009688] block pb-1">
										City
									</label>
									<div className="flex items-center justify-between ">
										<TextInput
											id="city"
											type="text"
											placeholder="Enter your City"
											required
											className="bg-transparent focus:outline-none w-full"
											autoComplete="city name"
											onChange={handleChange}
										/>
										<InputError message={errors.city} className="mt-2" /> 
									</div>
								</div>

								<div className="cred px-[24px] border border-solid border-teal-600 py-[0px] w-full my-[20px] rounded-[8px] relative bg-teal-100 bg-opacity-50">
									<label className="text-[#009688] block pb-1">
										State
									</label>
									<div className="flex items-center justify-between ">
										<TextInput
											id="state"
											type="text"
											placeholder="Enter your Street Name"
											required
											className="bg-transparent focus:outline-none w-full"
											autoComplete="state"
											onChange={handleChange}
										/>
										<InputError message={errors.state} className="mt-2" /> 
									</div>
								</div>

								<div className="cred px-[24px] border border-solid border-teal-600 bg-teal-100 bg-opacity-50 py-[2px] w-full my-[20px] rounded-[8px]">
									<label className="text-[#009688] block pb-1">
										Password
									</label>
									<div className="flex items-center justify-between">
										<TextInput
											type={passwordType}
											placeholder="***************"
											required
											className="bg-transparent focus:outline-none w-full"
										/>
										{passwordType !== "text" ? (
											<FaEyeSlash
												cursor={"pointer"}
												fontSize={"20px"}
												onClick={() => setPasswordType("text")}
											/>
										) : (
											<FaEye
												cursor={"pointer"}
												fontSize={"20px"}
												onClick={() => setPasswordType("password")}
											/>
										)}
									</div>
								</div>
								<div className="cred px-[24px] border border-solid border-teal-600 bg-teal-100 bg-opacity-50 py-[2px] w-full my-[20px] rounded-[8px]">
									<label className="text-[#009688] block pb-1">
										Confirm Password
									</label>
									<div className="flex items-center justify-between">
										<TextInput
											type={confirmPasswordType}
											placeholder="***************"
											required
											className="bg-transparent focus:outline-none w-full"
										/>
										{confirmPasswordType !== "text" ? (
											<FaEyeSlash
												cursor={"pointer"}
												fontSize={"20px"}
												onClick={() =>
													setConfirmPasswordType("text")
												}
											/>
										) : (
											<FaEye
												cursor={"pointer"}
												fontSize={"20px"}
												onClick={() =>
													setConfirmPasswordType(
														"confirmPassword",
													)
												}
											/>
										)}
									</div>
								</div>
								<div className="text-center w-[70%] mx-auto mt-10">
									<button className="bg-[#009688] py-2 px-[20px] w-full text-white rounded-full font-[roboto]">
										Create Account
									</button>
								</div>
							</div>
						</form>
					</>
				</div>
			</div>
		
		);
}