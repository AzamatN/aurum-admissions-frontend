import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CourseCard from "../../shared/CourseCard/CourseCard";
import CourseCardMain from "../../shared/CourseCardMain/CourseCardMain";

export const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  //change here

  const getCourses = () => {
    axios.get("http://localhost:8001/courses").then((response) => {
      // handle success
      setCourses(response.data);
    });
    // .catch((error) => {
    //   // handle error
    //   console.log(error);
    // });
  };
  return (
    <div className="mt-24 mx-32 h-screen">
      <div className="flex-row pt-5">
        <h1 className="text-4xl font-bold font-roboto text-start mt-8">
          All Courses
        </h1>
        <br />
        <br />
        <br />
        <div className="mt-12 items-center justify-between grid gap-12">
          {courses.map((item) => (
            // <CourseCard className="" course={item} />
            <CourseCardMain className="" course={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
