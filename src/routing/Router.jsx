import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Index from "../pages/Index";
import Register from "../pages/auth/Register";

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Index />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	);
}
