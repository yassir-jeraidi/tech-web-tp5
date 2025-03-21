import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {User} from "../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const loadUserFromSession = (): User | null => {
  const storedUser = sessionStorage.getItem('user');
  return storedUser ? JSON.parse(storedUser) as User : null;
}

export const removeUserFromSession = () => {
  sessionStorage.removeItem("user");
}

export const saveUserToSession = (user: User): User  => {
  sessionStorage.setItem('user', JSON.stringify(user));
  return user
}