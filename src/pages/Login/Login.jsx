import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
  const { login } = useContext(AuthContext);

  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let user = { email, password };

  const loginUser = async (e) => {
    e.preventDefault();

    axios.post("http://localhost:8001/login", user).then((res) => {
      if (res.status === 200) {
        login();
        navigate("/");
      } else {
        setErrorMessage("Invalid email or password");
      }
      // if (res.status === "Login successful") {
      //   // localStorage.setItem("token", res.data.token);
      //   login();
      //   navigate("/");
      // } else if (res.data === "Invalid email or password") {
      //   setErrorMessage("Invalid email or password");
      // }
      // change here as well
    });
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-20">
      <div className="shadow-2xl rounded-md p-8 bg-primary-300 w-96 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={loginUser} className="w-full">
          <div className="mb-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              //   value={user.email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              //   value={user.password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              required
            />
          </div>
          {errorMessage && (
            <div className="text-md text-stone-900">{errorMessage}</div>
          )}
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="w-52 bg-secondary-500 rounded-md h-8 mt-6"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
