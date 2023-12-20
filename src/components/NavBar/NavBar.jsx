import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import {
  AcademicCapIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

export const NavBar = () => {
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
                <Link to="/settings">
                  <Cog6ToothIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
