import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json"
    }
})
instance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("accessToken");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error: any) => {
		return Promise.reject(error);
	}
);

export const getProtectedData = (token: string) =>
	instance.get("/protected", { headers: { Authorization: `Bearer ${token}` } });
export default instance