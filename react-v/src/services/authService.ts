import {API_URL} from "@/constants";
import {toast} from "sonner";
import {LoginRequest, RegisterRequest, User} from "../types";
import {loadUserFromSession, saveUserToSession} from "../lib/utils.ts";


export const authService = {
    login: async (credentials: LoginRequest): Promise<boolean> => {
        const {email, password} = credentials;
        const response = await fetch(`${API_URL}/users?email=${email}&password=${password}`);
        console.log(response)
        const data: User[] = await response.json();
        console.log(data)

        if (data.length !== 1) {
            toast.error("Invalid email or password");
            return false;
        }
        saveUserToSession(data[0]);
        toast.success("You logged in successfully!");
        return true;
    },
    register: async (credentials: RegisterRequest): Promise<boolean> => {
        const response = await fetch(`${API_URL}/users`, {
            method: "POST",
            body: JSON.stringify(credentials),
        })
        if (response.ok) {
            toast.success("You are registered successfully!");
            saveUserToSession(credentials as User);
            return true;
        }
        toast.error("Something went wrong!");
        return false;
    },
    isAuthenticated: (): boolean => {
        return !!loadUserFromSession()
    },
    getAuthenticatedUser: (): User | null => {
        return loadUserFromSession()
    }
};