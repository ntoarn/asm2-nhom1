import UserModel from "../models/UserModel.js";
import { generateToken } from "../utils/jwt.js";
import { comparePassword, hashPassword } from "../utils/password.js";

export const register = async (req, res, next) => {
	try {
		const { email, password, name, phone, address } = req.body;
		const userExists = await UserModel.findOne({ email });
		if (userExists) {
			return res.status(400).json({
				message: "Email đã tồn tại",
			});
		}

		const hashPass =  hashPassword(password); 
		if (!hashPass) {
			return res.status(400).json({
				message: "Mã hóa mật khẩu thất bại!",
			});
		}

		const user = await UserModel.create({
			email,
			password: hashPass,
			name,
			phone,
			address
		});

		user.password = undefined;

		return res.status(201).json({
			success: true,
			user,
			message: "Đăng ký thành công!",
		});
	} catch (error) {
		next(error);
	}
};

export const login = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const useExists = await UserModel.findOne({ email });
		console.log(useExists);
		if (!useExists) {
			return res.status(404).json({
				message: "Email chua dang ky!",
			});
		}

		const isMatch = comparePassword(password, useExists.password);
		if (!isMatch) {
			return res.status(400).json({
				message: "Mat khau khong dung!",
			});
		}

		const token = generateToken({ _id: useExists._id }, "100d");
		useExists.password = undefined;

		return res.status(200).json({
			success: true,
			user: useExists,
			accessToken: token,
			message: "Login successfully!",
		});
	} catch (error) {
		next(error);
	}
};

  export const getAllUser = async (req, res) => {
    try {
        const user = await UserModel.find({})
        if (user && user.length !== 0) {
            return res.status(200).json({
                message: "Lay danh sach san pham thanh cong",
                data: user
            })
        }
        return res.status(404).json({
            message: "Khong co san pham nao trong danh sach"
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            name: error.name
        })
    }
}