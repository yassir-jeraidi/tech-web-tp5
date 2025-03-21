import {Field, LoginRequest} from "@/types";

export const SIGN_IN_FIELDS: Field[] = [
    {
        id : 1,
        name : 'email',
        type : 'email',
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

export const SIGN_UP_FIELDS: Field[] = [
    {
        id : 3,
        name : 'name',
        type : 'text',
        description : "Enter your name",
        placeholder : "Enter your name",
        label : "Name",
        required: true,
    },
    ...SIGN_IN_FIELDS
]

export const SIGN_IN_DEFAULT_VALUES: LoginRequest = [
    {
        email : "",
        password : ""
    }
]


export const SIGN_UP_DEFAULT_VALUES: LoginRequest = [
    {
        name : "",
        email : "",
        password : "",
    }
]

export const API_URL = import.meta.env.VITE_API_URL as string