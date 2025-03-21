export type Field = {
    id : number
    name: string;
    type: "text" | "email" | "password" | "select" | "checkbox" | "radio" ;
    label: string;
    placeholder: string;
    required: boolean;
    description?: string;
    options?: {
        value: string;
        label: string;
    }[];
};

export type LoginRequest = {
    email: string;
    password: string;
}

export type RegisterRequest = {
    name: string;
    email: string;
    password: string;
}

export type User = RegisterRequest & {
    id: number;
}