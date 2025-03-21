import AuthForm from "@/components/auth-form.tsx";
import {LOGIN_FIELDS, LOGIN_DEFAULT_VALUES} from "@/constants";
import {authService} from "@/services/authService.ts";
import {Link} from "react-router-dom";

export default function SignInForm(){
    return (
        <AuthForm
            config={{title: "", description: "", submitText: "Login"}}
            fields={LOGIN_FIELDS}
            defaultValues={LOGIN_DEFAULT_VALUES}
            schema="signIn"
            action={authService.login}
        >
            <Link to="/register">
                New user ? click to sign up !!
            </Link>
        </AuthForm>
    )
}