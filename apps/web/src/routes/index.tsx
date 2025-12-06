import Tenant from "@/features/Tenant";
import Welcome from "@/features/Welcome";
import { Routes, Route } from "react-router-dom";



export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/tenant" element={<Tenant />} />
        </Routes>
    );
}
