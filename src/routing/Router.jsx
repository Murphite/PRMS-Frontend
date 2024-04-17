import { Routes, Route } from "react-router-dom";

import Register from "../pages/auth/Register";
import AdminLogin from "../pages/auth/AdminLogin";
import Index from "../pages/Index";
import AdminSignUp from "./../pages/auth/AdminSignUp";
import ForgotPassword from "../pages/auth/ForgotPassword";
import PasswordReset from "../pages/auth/PasswordReset";
import EmailVerification from "../pages/auth/EmailVerification";
import ResetPassword from "../pages/auth/ResetPassword";
import PatientsList from "../pages/admin/PatientsList";
import EmailVerificationStatus from "../pages/auth/EmailVerificationStatus";
import RegularLogin from "../pages/auth/RegularLogin";
import CreatePatient from "../pages/dashboard/CreatePatient";
import CreateAppointment from "../pages/dashboard/CreateAppointment";
import ViewPatient from "../pages/admin/ViewPatient";
import DashBoardPage from "../pages/dashboard/dashBoardPage";
import GetMedical from "../pages/dashboard/GetMedical";
import FindDoctors from "../pages/dashboard/FindDoctors";
import PhysicianDetails from "../pages/dashboard/PhysicianDetails";

import AdminDashboard from "../pages/admin/Index";
import Appointments from "../pages/admin/Appointments";
import Appointment from "../pages/dashboard/Appointment";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Index />} />

            <Route path="/login" element={<RegularLogin />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-signup" element={<AdminSignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route path="/email-verification" element={<EmailVerification />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            {/* <Route
                path="/confirm-email"
                element={<EmailVerificationStatus />}
            /> */}
            <Route path="/login" element={<RegularLogin />} />
            <Route path="/dashboard" element={<DashBoardPage />} />
            <Route path="/dashboard/patients/new" element={<CreatePatient />} />
            <Route
                path="/dashboard/physician/:physicianUserId/create-appointment"
                element={<CreateAppointment />}
            />
            <Route path="/dashboard/appointments" element={<Appointment />} />
            <Route
                path="/dashboard/physician/:physicianId"
                element={<PhysicianDetails />}
            />
            <Route path="/dashboard/physician" element={<FindDoctors />} />
            <Route path="/patientMedicalHistory" element={<GetMedical />} />

            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/appointments" element={<Appointments />} />
            <Route path="/admin/patients" element={<PatientsList />} />
            <Route path="/admin/patients/:id" element={<ViewPatient />} />
        </Routes>
    );
}
