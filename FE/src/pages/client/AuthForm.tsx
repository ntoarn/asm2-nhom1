import instance from "@/apis";
import { useAuth } from "@/contexts/UserContext";
import { IUser } from "@/interfaces/User";
import { schemaLogin, schemaRegister } from "@/schemas/authSchema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Props = {
  isRegister?: boolean;
};

const AuthForm = ({ isRegister }: Props) => {
  const nav = useNavigate();
  const { login: contextLogin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: zodResolver(isRegister ? schemaRegister : schemaLogin),
  });
  const onSubmit = async (user: IUser) => {
    try {
      if (isRegister) {
        const { data } = await instance.post("/auth/register", {
          email: user.email,
          password: user.password,
        });
        console.log(data);
        alert(`Register success with email: ${data.email}`);
        nav("/login");
      } else {
        const { data } = await instance.post("/auth/login", user);
        console.log(data);
        contextLogin(data.token, data.user);
        nav(data.user.role === "admin" ? "/admin" : "/");
      }
    } catch (error: any) {
      console.log(error);
      alert(error.response.data.message);
    }
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 border rounded bg-light shadow-sm"
          >
            <h1 className="text-center mb-4">
              {isRegister ? "Register" : "Login"}
            </h1>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                className="form-control"
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-danger mt-2">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                className="form-control"
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-danger mt-2">{errors.password.message}</p>
              )}
            </div>

            {isRegister && (
              <div className="mb-3">
                <label htmlFor="confirmPass" className="form-label">
                  Confirm Password
                </label>
                <input
                  id="confirmPass"
                  className="form-control"
                  type="password"
                  {...register("confirmPass")}
                />
                {errors.confirmPass && (
                  <p className="text-danger mt-2">
                    {errors.confirmPass.message}
                  </p>
                )}
              </div>
            )}

            <div className="mb-3">
              <button type="submit" className="btn btn-primary w-100">
                {isRegister ? "Register" : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
