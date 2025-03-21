import {Outlet, useNavigate} from "react-router-dom";
import {authService} from "@/services/authService.ts";
import {useEffect} from "react";

export default function AuthLayout() {
    const navigate = useNavigate();

    const checkIfAuthenticated =  () => {
        if (authService.isAuthenticated()) {
            navigate("/dashboard");
        } else {
            navigate("/sign-in");
        }
    }

    useEffect(() => {
        checkIfAuthenticated();
    }, []);

    return (
        <div className="w-screen h-screen">
            <Outlet/>
        </div>
    )
}