import React, { useEffect } from "react";
import udemy2 from "../../assets/udemy-2.jpg";
import udemy1 from "../../assets/udemy-1.jpg";
import CourseCard from "../../shared/CourseCard/CourseCard";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const Home = () => {
  const [courses, setCourses] = useState([]);

  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    axios.get("http://localhost:9001/courses").then((response) => {
      // handle success
      setCourses(response.data);
    });
    // .catch((error) => {
    //   // handle error
    //   console.log(error);
    // });
  };
  return (
    <div className="mt-24">
      <div>
        {isLoggedIn ? (
          <div>
            <div className="flex items-center mx-auto w-full relative">
              <img src={udemy1} alt="" className="mx-auto" />
              <div className="absolute left-1/4 top-1/4 transform -translate-x-1/4 -translate-y-1/4 h-40 w-96 font-montserrat font-bold bg-gray-20 px-14 py-4">
                <p className="font-montserrat text-2xl">
                  Let's start learning, Azamat!
                </p>
                {/* left-56 top-48 */}
                <p className="text-start font-dmsans text-base">
                  Explore all available courses and pick any you want!
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center mx-auto w-full relative">
            <img src={udemy2} alt="" className="mx-auto" />
            <div className="absolute left-1/4 top-1/4 transform -translate-x-1/4 -translate-y-1/4 h-40 w-96 font-montserrat font-bold bg-gray-20 px-14 py-4">
              <p className="font-montserrat text-2xl">
                Time to shape your future!
              </p>
              {/* left-56 top-48 */}
              <p className="text-start font-dmsans text-base">
                Explore all available courses and pick any you want!
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="w-3/4 mx-auto mt-10">
        <p className="text-start text-3xl">Start New Course</p>
        <div className="flex mt-12 items-center">
          {courses.slice(0, 3).map((item) => (
            <CourseCard course={item} />
          ))}
          {/* <CourseCard />
          <CourseCard />
          <CourseCard /> */}
          <Link to="/courses">
            <ArrowRightCircleIcon className="w-10 h-10 text-gray-400 ml-3" />
          </Link>
        </div>
      </div>
      <div className="w-3/4 mx-auto mt-10">
        <p className="text-start text-3xl">Continue your learning</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, rem
          eveniet iusto ab dolorem sequi dolorum ex expedita ducimus possimus
          ut, cupiditate quis eius laboriosam nobis libero cumque omnis maiores?
        </p>
      </div>
    </div>
  );
};
