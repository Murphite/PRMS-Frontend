import { useState } from "react";

import GuestLayout from "../../layouts/GuestLayout";
import InputError from "../../components/InputError";
import InputLabel from "../../components/InputLabel";
import PrimaryButton from "../../components/PrimaryButton";
import TextInput from "../../components/TextInput";
import { signUp } from "../../api/auth";

export default function Register() {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		phoneNumber:"",
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState({
		firstName: "",
		lastName: "",
		phoneNumber:"",
		email: "",
		password: "",
	});

	const handleChange = e => {
		const name = e.target.name;
		const value = e.target.value;

		setData({ ...data, [name]: value });
	};

	const submit = async e => {
		e.preventDefault();
		const res = await signUp(
			data.firstName,
			data.lastName,
			data.phoneNumber,
			data.email,
			data.password
		);

		console.log(res);
	};

	return (
		<GuestLayout>
			<form onSubmit={submit}>
				<div className="mt-4">
					<InputLabel htmlFor="firstName" value="First Name" />

					<TextInput
						id="firstName"
						type="text"
						name="firstName"
						value={data.firstName}
						className="block w-full mt-1"
						autoComplete="first name"
						isFocused={true}
						onChange={handleChange}
					/>

					<InputError message={errors.firstName} className="mt-2" />
				</div>

				<div className="mt-4">
					<InputLabel htmlFor="lastName" value="Last Name" />

					<TextInput
						id="lastName"
						type="text"
						name="lastName"
						value={data.lastName}
						className="block w-full mt-1"
						autoComplete="last name"
						isFocused={true}
						onChange={handleChange}
					/>

					<InputError message={errors.lastName} className="mt-2" />
				</div>

				<div className="mt-4">
					<InputLabel htmlFor="phoneNumber" value="Phone Number" />

					<TextInput
						id="phoneNumber"
						type="text"
						name="phonenumber"
						value={data.phoneNumber}
						className="block w-full mt-1"
						autoComplete="phone number"
						isFocused={true}
						onChange={handleChange}
					/>

					<InputError message={errors.phoneNumber} className="mt-2" />
				</div>

				<div className="mt-4">
					<InputLabel htmlFor="email" value="Email" />

					<TextInput
						id="email"
						type="email"
						name="email"
						value={data.email}
						className="block w-full mt-1"
						autoComplete="username"
						isFocused={true}
						onChange={handleChange}
					/>

					<InputError message={errors.email} className="mt-2" />
				</div>

				<div className="mt-4">
					<InputLabel htmlFor="password" value="Password" />

					<TextInput
						id="password"
						type="password"
						name="password"
						value={data.password}
						className="block w-full mt-1"
						autoComplete="current-password"
						onChange={handleChange}
					/>

					<InputError message={errors.password} className="mt-2" />
				</div>

				<div className="flex items-center justify-end my-4">
					<PrimaryButton className="ms-4" disabled={false}>
						Sign Up
					</PrimaryButton>
				</div>
			</form>
		</GuestLayout>
	);
}
