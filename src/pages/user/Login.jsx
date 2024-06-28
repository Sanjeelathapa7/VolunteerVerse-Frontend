import React, { useState } from "react";
import { loginApi } from "../../apis/Apis";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    loginApi(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          localStorage.setItem("token", res.data.token);

          // Check if user is admin
          const isAdmin = res.data.isAdmin;

          // Redirect based on admin status
          if (isAdmin) {
            // Redirect to admin dashboard
            navigate("/admin/dashboard");
          } else {
            // Redirect to user dashboard
            navigate("/user/dashboard");
          }
          const convertedJson = JSON.stringify(res.data.userData);
          localStorage.setItem("user", convertedJson);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Server Error!");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        style={{
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
        className="d-flex"
      >
        <div className="w-50">
          <img
            src="/assets/images/login.jpg"
            alt="Cover Page"
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-50 p-4">
          <h2 className="mb-4">Welcome back,</h2>
          <h4 className="mb-4">Login to your account</h4>
          <form className="w-100">
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                onChange={changeEmail}
                className="form-control"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                onChange={changePassword}
                className="form-control"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe" className="ms-2">
                  Remember me
                </label>
              </div>
              <div>
                <a href="/sendemail" className="text-danger">
                  Forgot password?
                </a>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="btn btn-primary w-100 mb-3"
              type="submit"
            >
              Login
            </button>
            <div className="text-center">
              <span>Don't have an account? </span>
              <a href="/signup" className="text-primary">
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
