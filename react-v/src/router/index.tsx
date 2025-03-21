import {createBrowserRouter} from "react-router-dom";
import AuthLayout from "@/layouts/auth-layout.tsx";
import SignInForm from "../components/sign-in-form.tsx";
import AdminLayout from "../layouts/admin-layout.tsx";

const router = createBrowserRouter(
    [
        {
            element: <AuthLayout/>,
            children: [
                {
                    index: true,
                    path: '/sign-in',
                    element: <SignInForm/>
                },
                {
                    path: '/sign-up',
                    element: <SignInForm/>
                },
                {
                    path: "/dashboard",
                    element: <AdminLayout/>,
                    children: [
                        {
                            index: true,
                            element: <h1>Dashboard</h1>
                        }
                    ]
                }
            ]
        },
    ]
)
export default router