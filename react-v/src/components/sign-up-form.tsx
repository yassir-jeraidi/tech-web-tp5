import AuthForm from "@/components/auth-form.tsx";
import {SIGN_UP_FIELDS , SIGN_UP_DEFAULT_VALUES} from "@/constants";
import {authService} from "@/services/authService.ts";
import {Link} from "react-router-dom";

export default function SignUpForm(){
    return (
        <AuthForm
            config={{title: "", description: "", submitText: "Sing up"}}
            fields={SIGN_UP_FIELDS}
            defaultValues={SIGN_UP_DEFAULT_VALUES}
            schema="signUp"
            action={authService.register}
        >
            <Link to="/sign-in">
                Already have an account? sign in now !!
            </Link>
        </AuthForm>
    )
}