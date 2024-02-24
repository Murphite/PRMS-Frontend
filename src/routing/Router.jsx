import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AdminLogin from "../pages/auth/AdminLogin";
import Index from "../pages/Index";
import AdminSignUp from "./../pages/auth/AdminSignUp";
import PasswordResetModal from "../pages/SuccessNotification/PasswordResetModal";
import EmailVerificationModal from "../pages/SuccessNotification/EmailVerificationModal";

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Index />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/admin-login" element={<AdminLogin />} />
			<Route path="/admin-signup" element={<AdminSignUp />} />
			<Route path="/passwordresetmodal" element={<PasswordResetModal/>}/>
			<Route path="/emailverificationmodal" element={<EmailVerificationModal/>}/>
		</Routes>
	);
}
