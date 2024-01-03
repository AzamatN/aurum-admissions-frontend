import React from "react";

const CourseCard = ({ course }) => {
  const { title, description, price, mentor } = course;

  return (
    <div className="flex-row mx-auto justify-center">
      <div className="bg-gradient-yellowred font-roboto font-bold text-2xl border-0 rounded-md flex justify-center items-center w-80 h-44">
        {title}
      </div>
      <div className="w-80 mt-3 flex">
        <p className="w-4/6">{description}</p>
        <div class="w-px bg-gradient-yellowred justify-start mr-3"></div>
        <div className="flex justify-start items-center">
          <p className="w-2/6 text-2xl font-montserrat text-red-500">
            {price}KZT
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
