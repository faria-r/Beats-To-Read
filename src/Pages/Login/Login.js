import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { loginWithGoogle, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const googleAuthProvider = new GoogleAuthProvider();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //login with email ,password
  const handelLogin = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((e) => console.log(e));
  };
  //login with google
  const handleLoginWithGoogle = () => {
    loginWithGoogle(googleAuthProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="h-[800px]  flex justify-center mt-16">
      <div className="w-96 h-[500px] py-3 border rounded-2xl bg-green-300  px-7">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handelLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("email", { required: "email address is required" })}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: "passoword is required",
                minLength: {
                  value: 6,
                  message: "password must be six characters longer",
                },
              })}
            />
          </div>
          <input
            className="btn bg-green-600 my-2 w-full text-white"
            value="Login"
            type="submit"
          />
          <div></div>
        </form>
        <p>
          Do not have an account?{" "}
          <Link className="text-primary" to="/register">
            Create an Account
          </Link>
        </p>
        <div className="divider">Or</div>
        <button
          onClick={handleLoginWithGoogle}
          className="btn btn-outline w-full "
        >
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
