import instance from "@/apis";
import { useAuth } from "@/contexts/UserContext";
import { IUser } from "@/interfaces/User";
import { schemaLogin, schemaRegister } from "@/schemas/authSchema";
import anh from "../../assets/image/z5689487664655_ac397707b304a6f3965c8600e67984e8.jpg"

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
    formState: { errors,isSubmitting },
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
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 col-lg-5 d-none d-md-block">
          <img
            src={anh}
            alt="Login Illustration"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6 col-lg-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 border rounded bg-light shadow-sm"
          >
            <h1 className="text-center mb-4">
              {isRegister ? 'Register' : 'Login'}
            </h1>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                className="form-control"
                type="email"
             
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: 'Invalid email address',
                  },
                })}
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
              
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
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
                
                  {...register('confirmPass', {
                    required: 'Please confirm your password',
                   
                  })}
                />
                {errors.confirmPass && (
                  <p className="text-danger mt-2">
                    {errors.confirmPass.message}
                  </p>
                )}
              </div>
            )}

            <div className="mb-3">
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : isRegister ? (
                  'Register'
                ) : (
                  'Login'
                )}
              </button>
            </div>

            <div className="text-center my-3">or</div>

            <div className="d-grid gap-2 mb-3">
              <button type="button" className="btn btn-outline-primary">
                <i className="fab fa-facebook"></i> Login with Facebook
              </button>
              <button type="button" className="btn btn-outline-danger">
                <i className="fab fa-google"></i> Login with Google
              </button>
              <button type="button" className="btn btn-outline-dark">
                <i className="fab fa-instagram"></i> Login with Instagram
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;