import {Field, LoginRequest} from "@/types";

export const LOGIN_FIELDS: Field[] = [
    {
        id : 1,
        name : 'email',
        type : 'text',
        description : "Enter your email",
        placeholder : "Enter your email",
        label : "Email",
        required: true,
    },
    {
        id : 2,
        name : 'password',
        type : 'password',
        description : "Enter your password",
        placeholder : "Enter your password",
        label : "Password",
        required: true,
    },
]

export const LOGIN_DEFAULT_VALUES: LoginRequest = [
    {
        email : "",
        password : ""
    }
]

export const API_URL = import.meta.env.VITE_API_URL as string