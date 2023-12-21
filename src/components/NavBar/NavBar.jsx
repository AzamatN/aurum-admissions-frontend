import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
  UserCircleIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { Button } from "bootstrap";

export const NavBar = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  const logOutUser = () => {
    logout();
  };

  const flexBetween = "flex justify-between items-center";
  const flexStart = "flex justify-start items-center";
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 w-full py-6 bg-primary-300`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <div className={`${flexBetween} ml-3`}>
              <p className="font-bold text-2xl">AURUM </p>
              <AcademicCapIcon className="h-6 w-6" />
              <p className="font-bold text-2xl">ADMISSIONS </p>
            </div>
            {isLoggedIn ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-16 text-lg`}>
                  <Link to="/">Home</Link>
                  <Link to="/courses">Courses</Link>
                  <Link to="/my-learning">My Learning</Link>
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <Link to="/profile">
                    <UserCircleIcon className="h-6 w-6" />
                  </Link>
                  <button onClick={() => logOutUser()}>
                    <ArrowRightStartOnRectangleIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>
            ) : (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-16 text-lg`}>
                  <Link to="/">Home</Link>
                  <Link to="/courses">Courses</Link>
                  <Link to="/my-learning">About Us</Link>
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <Link to="/register" className="">
                    Sign up
                  </Link>
                  <Link
                    to="/login"
                    className="text-lg bg-secondary-500 rounded-md px-7 py-2"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
