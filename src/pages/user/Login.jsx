

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
    <div className="overflow-hidden">
      <div className="register-container row vh-100 align-items-center ">
        <div className="register-box col-md-7 my-3">
          {/* Left side with image */}
          <div className="register-image col-md-6">
            <img
              src="/assets/images/r.png"
              alt="Volunteers"
              className="image-fluid"
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          {/* Right side with form */}
          <div className="register-form">
          <h1 className="form-title" style={{marginBottom:'10px'}}>Welcome back,</h1>
<p style={{ fontFamily: "Inknut Antiqua, serif", fontSize:'14px', marginBottom:'50px' }} >Login to your account</p>

            <form>
              <label className="text-font">Email address</label>
              <input
                onChange={changeEmail}
                className="form-control"
                type="email"
                placeholder="Enter your email address"
              />

              <label className="text-font">Password</label>
              <input
                onChange={changePassword}
                className="form-control"
                type="password"
                placeholder="Enter your password"
              />
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
  <div>
    <input type="checkbox" id="rememberMe" name="rememberMe" />
    <label htmlFor="rememberMe" style={{ fontFamily: "Inknut Antiqua, serif", fontSize:'13px',marginLeft: '5px' }}>Remember me</label>
  </div>
  <a href="#" style={{fontFamily: "Inknut Antiqua, serif", fontSize:'13px', textDecoration: 'none'  }}>Forgot password?</a>
</div>
              <button
                onClick={handleSubmit}
                className="btn-submit"
                type="submit"
                style={{fontFamily: "Inknut Antiqua, serif", fontSize:'15px',marginTop:'25px'}}
              >
                Login
              </button>
              <p className="login-link text-font ">
                Don't have an account?
                <a href="/register" >Register</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
