import React, { useEffect, useState } from "react";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Features/slices/userSlice";

export default function LoginSignup() {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (flag) {
      console.log("Registered");
    }
  }, [flag]);

  //  Handle form input
  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  //  Handle form submit
  function handleSubmit(e) {
    e.preventDefault();

    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All fields are mandatory");
    } else if (!isChecked) {
      alert("You must agree to the terms and privacy policy");
    } else {
      setFlag(true);

      //  Dispatch login action (stores in Redux + localStorage)
      dispatch(login(inputData));

      //  Navigate to home
      navigate("/");
    }
  }

  return (
    <>
      <pre>
        {flag ? (
          <h2 className="ui-define">
            Hello {inputData.name}, You have registered successfully
          </h2>
        ) : (
          ""
        )}
      </pre>
      <form className="loginsigup" onSubmit={handleSubmit}>
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={inputData.name}
              onChange={handleData}
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={inputData.email}
              onChange={handleData}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={inputData.password}
              onChange={handleData}
            />
          </div>
          <button type="submit">Continue</button>
          <p className="loginsignup-login">
            Already have an Account <br />
            <span>Login here?</span>
            <div className="loginsignup-agree">
              <input
                type="checkbox"
                id="terms"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <label htmlFor="terms">
                By Continuing, I agree to the terms of use & privacy policy
              </label>
            </div>
          </p>
        </div>
      </form>
    </>
  );
}
