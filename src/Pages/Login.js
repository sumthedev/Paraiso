import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLock } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-container flex">
      <div className="login-side flex-col items-center justify-center bg-gray-800">
        <div>
          <h1 className="text-04">Welcome back</h1>
          <p className="text-05">Use your credentials below and login</p>
          <p className="text-05">to your account</p>
        </div>
        <div className="flex mt-[30px]">
          <form action="">
            <div className={`input-container ${emailFocused ? "focused" : ""}`}>
              <HiOutlineMail className={`icon-02 ${email ? "active" : ""}`} />
              <input
                type="text"
                className="item-input item-input-01"
                placeholder="example@gmail.com"
                value={email}
                onChange={handleEmailChange}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
              />
              <TiTick className={`tick-icon ${email ? "active" : ""}`} />
            </div>
            <div
              className={`input-container ${passwordFocused ? "focused" : ""}`}
            >
              <AiOutlineLock
                className={`icon-02 ${password ? "active" : ""}`}
              />
              <input
                type="password"
                className="item-input item-input-01"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
              />
              <TiTick className={`tick-icon ${password ? "active" : ""}`} />
            </div>
            <div className=" mt-[-10px] flex items-center checkbox-container">
              <input type="checkbox" className="check-mark" />
              <span className="ml-[-10px] text-06">Remember me</span>
              <a className=" ml-[110px]" href="https://www.example.com">
                Forgot account?
              </a>
            </div>
            <div className="btn-01 mt-[50px] ml-[40px]">
              <button onClick={onLogin}>
                <span className="ml-[20px] flex mt-[-35px] p-[15px] text-07">
                  Log into your account
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="logo-side flex-col items-center justify-center bg-gray-700">
        <div className="logo-content text-center">
          <img
            src={process.env.PUBLIC_URL + "/images/paraiso.png"}
            alt="paraiso"
          />
          <div className="ml-[-20px]">
            <h1 className="text-03">Paraiso</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
