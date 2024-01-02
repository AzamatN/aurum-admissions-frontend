import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  let user = { email, fullName, password };
  const registerUser = async (e) => {
    e.preventDefault();
    // change here as well
    await axios.post("http://localhost:9001/register", user);
    navigate("/");
    // try {
    //   await axios.post("http://localhost:9001/register", user);
    //   navigate("/");
    // } catch (error) {
    //   //   Handle the error response
    //   if (error.response && error.response.status === 409) {
    //     // User already exists, display an error message
    //     setErrorMessage("User with this email already exists.");
    //   } else {
    //     // Other errors, handle as needed
    //     setErrorMessage("An error occurred during registration.");
    //   }
    // }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-20">
      <div className="shadow-2xl rounded-md p-8 bg-primary-300 w-96">
        <h2 className="text-2xl font-bold mb-4">Registration</h2>
        <form onSubmit={registerUser}>
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
              type="text"
              placeholder="Full Name"
              //   value={user.fullName}
              name="fullName"
              onChange={(e) => setFullName(e.target.value)}
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
          {/* {errorMessage && (
            <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
          )} */}
          <button
            type="submit"
            className="w-52 bg-secondary-400 shadow-2xl rounded-md h-8 mt-6"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
