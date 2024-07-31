import UserModel from "../models/UserModel.js";

export const showProfile = async (req, res, next) => {
	try {
		console.log("dd");
		if (req.user) {
			const user = await UserModel.findById(req.user._id);
			return res.status(200).json({
				success: true,
				user,
			});
		}
	} catch (error) {
		next(error);
	}
};
export const getUser = async (req, res, next) => {
	try {
		if (req.user) {
			const user = await UserModel.find({});
			return res.status(200).json({
				success: true,
				user,
			});
		}
	} catch (error) {
		next(error);
	}
};