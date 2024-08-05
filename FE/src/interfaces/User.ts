export interface IUser {
    _id?: string;
    name?: string;
    email?: string;
    password?: string;
    address?: string;
    phone?: string
    role?: "admin" | "member" | "guest";
    confirmPassword?: string;

}