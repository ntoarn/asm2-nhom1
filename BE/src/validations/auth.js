import Joi from "joi";

export const registerValue = Joi.object({
    email: Joi.string().required().email().messages({
        "string.empty":"Email không được bỏ trống!!!!",
        "any.required": "Thông tin bắt buộc!!!",
        "string.email": "Email không đúng định dạng"
    }),
    password: Joi.string().required().min(6).max(255).messages({
        "string.empty":"Không được bỏ trống!!!!",
        "any.required": "Thông tin bắt buộc!!!",
        "string.min" : "Mật khẩu có ít nhất 6 kí tự",
        "string.max":"Mật khẩu có ít hơn 255 kí tự ",
    }),
    confirmPassword: Joi.string().required().min(6).max(225).valid(Joi.ref("password")).messages({
        "string.empty":"Không được bỏ trống!!!!",
        "any.required": "Thông tin bắt buộc!!!",
        "string.min" : "confirmPassword có ít nhất 6 kí tự",
        "string.max":"confirmPassword có ít hơn 255 kí tự ",
        "any.only": "confirmPassword không khớp với mật khẩu"
    }),
    role: Joi.string()

})
export const loginValid = Joi.object({
    email: Joi.string().required().email().messages({
        "string.empty":"Email không được bỏ trống!!!!",
        "any.required": "Thông tin bắt buộc!!!",
        "string.email": "Email không đúng định dạng"
    }),
    password: Joi.string().required().min(6).max(255).messages({
        "string.empty":"Không được bỏ trống!!!!",
        "any.required": "Thông tin bắt buộc!!!",
        "string.min" : "Mật khẩu có ít nhất 6 kí tự",
        "string.max":"Mật khẩu có ít hơn 255 kí tự ",
    }),

})