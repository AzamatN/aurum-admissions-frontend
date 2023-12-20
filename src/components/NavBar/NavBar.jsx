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
            <div>
              <div className={`${flexBetween} gap-8 justify-start text-lg`}>
                <p>Home</p>
                <p>Courses</p>
                <p>My Learning</p>
              </div>
              <div className={`${flexBetween} gap-8 justify-end`}>
                <UserCircleIcon className="h-6 w-6" />
                <Cog6ToothIcon className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
