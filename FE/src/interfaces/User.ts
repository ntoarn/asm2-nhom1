export interface IUser {
	_id?: number | string;
	email: string;
	password: string;
	confirmPass?: string;
	username?: string;
	role: string;
}