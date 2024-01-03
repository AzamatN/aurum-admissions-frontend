import React from "react";

const CourseCardMain = ({ course }) => {
  const { title, description, price, mentor } = course;

  return (
    <div className="flex flex-row w-full">
      <div className="bg-gradient-yellowred font-roboto font-bold text-2xl border-0 rounded-md flex justify-center items-center w-80 h-44">
        {title}
      </div>
      <div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
      <div>
        <div>{price}</div>
        <div>{mentor}</div>
      </div>
    </div>
  );
};

export default CourseCardMain;
