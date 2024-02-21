import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Index from "../pages/Index";
import Register from "../pages/auth/Register";
import Adminsignup from "../pages/adminsignup";

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Index />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/adminsignup" element={<Adminsignup />} />
		</Routes>
	);
}
