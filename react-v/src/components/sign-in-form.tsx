import AuthForm from "@/components/auth-form.tsx";
import {SIGN_IN_FIELDS , SIGN_IN_DEFAULT_VALUES} from "@/constants";
import {authService} from "@/services/authService.ts";
import {Link} from "react-router-dom";

export default function SignInForm(){
    return (
        <AuthForm
            config={{title: "", description: "", submitText: "Sign in"}}
            fields={SIGN_IN_FIELDS}
            defaultValues={SIGN_IN_DEFAULT_VALUES}
            schema="signIn"
            action={authService.login}
        >
            <Link to="/sign-up">
                New user ? click to sign up !!
            </Link>
        </AuthForm>
    )
}