import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import { AdminLogin } from "../pages/adminLogin/adminlogin";
import Adminsignup from "../pages/adminsignup";
import Index from "../pages/Index";

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Index />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/admin-login" element={<AdminLogin/>} />
			<Route path="/adminsignup" element={<Adminsignup />} />
		</Routes>
	);
}

