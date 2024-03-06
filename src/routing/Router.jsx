import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AdminLogin from "../pages/auth/AdminLogin";
import Index from "../pages/Index";
import AdminSignUp from "./../pages/auth/AdminSignUp";
import ForgotPassword from "../pages/auth/ForgotPassword";
import PasswordReset from "../pages/auth/PasswordReset";
import EmailVerification from "../pages/auth/EmailVerification";
import ResetPassword from "../pages/auth/ResetPassword";
import RegularSignUp from "../pages/auth/RegularSignUp";
import PatientsList from "../pages/dashboard/PatientsList";
import EmailVerificationStatus from "../pages/auth/EmailVerificationStatus";
import RegularLogin from "../pages/auth/RegularLogin";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-signup" element={<AdminSignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route path="/email-verification" element={<EmailVerification />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/signup" element={<RegularSignUp />} />
            <Route
                path="/confirm-email"
                element={<EmailVerificationStatus />}
            />
            <Route path="/login" element={<RegularLogin />} />

            <Route path="/dashboard/patients" element={<PatientsList />} />
        </Routes>
    );
}
