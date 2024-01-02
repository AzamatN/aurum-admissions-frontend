import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const Register = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  // const [fullName, setFullName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  let user = { email, firstName, lastName, phoneNumber, password };
  const registerUser = async (e) => {
    e.preventDefault();
    // change here as well
    await axios.post("http://localhost:8001/register", user);
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
      {/* center me REgistrattion h2 and button in the end of form */}

      <div className="shadow-2xl rounded-md p-8 bg-primary-300 w-96 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Registration</h2>
        <form onSubmit={registerUser} className="w-full">
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
            {/* <PhoneInput
              placeholder="Enter phone number"
              value={phoneNumber}
              country={"kz"}
              onChange={setPhoneNumber}
              // className="border border-gray-300 rounded-md px-3 py-2 w-full"
              className="number"
              required
            /> */}
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone Number"
              // pattern="+7[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
              //   value={user.email}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="First Name"
              //first name last name
              // !!!!!!
              // CHANGE HERE ASS WELL
              //   value={user.fullName}
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Last Name"
              //first name last name
              // !!!!!!
              // CHANGE HERE ASS WELL
              //   value={user.fullName}
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
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
            {/* ADD PHONE NUMBER IN THE END */}
          </div>
          {/* {errorMessage && (
            <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
          )} */}
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-52 bg-secondary-400 shadow-2xl rounded-md h-8 mt-6"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
