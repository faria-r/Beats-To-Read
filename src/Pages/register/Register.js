import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const {handleSubmit,register} = useForm();
    const {createUser} = useContext(AuthContext);

    const handelregister =(data)=>{
        console.log(data.email);
        createUser(data.email,data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(e => console.log(e))

    }
    return (
        <div className="h-[800px]  flex justify-center mt-16">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Register</h2>
        <form onSubmit={handleSubmit(handelregister)}>
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
            value="SignUp"
            type="submit"
          />
          <div></div>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="text-primary" to="/login">
            please Login
          </Link>
        </p>
       
      </div>
    </div>
    );
};

export default Register;