import React, { useState } from "react";
import { registerApi } from "../../apis/Apis";
import { toast } from "react-toastify";
import "../../styles/register.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const changeLastName = (e) => {
    setLastName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const changeconfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password, confirmPassword);

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    registerApi(data)
      .then((res) => {
        if (res.data.success === true) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Internal Server Error!");
      });
  };

  return (
    <div className="overflow-hidden">
    <div className="register-container row vh-100 align-items-center">
      <div className="register-box col-md-7 my-3">
        {/* Left side with image */}
        <div className="register-image col-md-6">
          <img
            src="/assets/images/login.jpg"
            alt="Volunteers"
            className="image-fluid"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* Right side with form */}
        <div className="register-form">
          <h1 className="form-title">Get Started</h1>
          <form>
            <label className="text-font">Firstname</label>
            <input
              onChange={changeFirstName}
              className="form-control"
              type="text"
              placeholder="Enter your firstname"
            />

            <label className="text-font">Lastname</label>
            <input
              onChange={changeLastName}
              className="form-control"
              type="text"
              placeholder="Enter your lastname"
            />

            <label className="text-font">Email address</label>
            <input
              onChange={changeEmail}
              className="form-control"
              type="email"
              placeholder="Enter your email"
            />

            <label className="text-font">Password</label>
            <input
              onChange={changePassword}
              className="form-control"
              type="password"
              placeholder="Enter your password"
            />

            <label className="text-font">Confirm password</label>
            <input
              onChange={changeconfirmPassword}
              className="form-control"
              type="password"
              placeholder="Enter your password"
            />

            <button onClick={handleSubmit} className="btn-submit" type="submit">
              Register
            </button>
            <p className="login-link text-font">
              Already have an account? <a href="/login">Log in</a>
            </p>
          </form>
        </div>
      </div>
      </div>
      </div>
  );
  // return (
  //   <div className="d-flex justify-content-center align-items-center vh-100">
  //     <div
  //       className="d-flex"
  //       style={{
  //         boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
  //         padding: "20px",
  //         borderRadius: "10px",
  //       }}
  //     >
  //       {/* Left side with image */}
  //       <div className="w-80" style={{ marginRight: "50px" }}>
  //         <img
  //           src="/assets/images/Register.jpg"
  //           alt="Cover Page"
  //           className="w-80 h-80"
  //         />
  //       </div>

  //       {/* Right side with form */}
  //       <div className="w-50">
  //         <h1 className="m-4">Get Started</h1>
  //         <form className="w-75">
  //           <label>Firstname</label>
  //           <input
  //             onChange={changeFirstName}
  //             className="form-control mb-2"
  //             type="text"
  //             placeholder="Enter your firstname"
  //           />

  //           <label>Lastname</label>
  //           <input
  //             onChange={changeLastName}
  //             className="form-control mb-2"
  //             type="text"
  //             placeholder="Enter your lastname"
  //           />

  //           <label>Email</label>
  //           <input
  //             onChange={changeEmail}
  //             className="form-control mb-2"
  //             type="email"
  //             placeholder="Enter your email"
  //           />

  //           <label>Password</label>
  //           <input
  //             onChange={changePassword}
  //             className="form-control mb-2"
  //             type="password"
  //             placeholder="Enter your password"
  //           />

  //           <label>Confirm Password</label>
  //           <input
  //             onChange={changeconfirmPassword}
  //             className="form-control mb-2"
  //             type="password"
  //             placeholder="Enter your password"
  //           />

  //           <button
  //             onClick={handleSubmit}
  //             className="btn btn-secondary w-100"
  //             type="submit"
  //             style={{ backgroundColor: "rgba(97, 124, 181, 1)" }}
  //           >
  //             Signup
  //           </button>
  //           <p className="mt-4, ">
  //             Already have an account? <a href="/login">Login</a>
  //           </p>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Register;
