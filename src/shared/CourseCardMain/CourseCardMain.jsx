import React from "react";

const CourseCardMain = ({ course }) => {
  const { title, description, price, mentor } = course;

  return (
    <div className="">
      <div className="text-3xl">{title}</div>
      <div className="flex flex-row mt-2">
        <div className="bg-gradient-yellowred font-roboto font-bold text-2xl border-0 rounded-md flex justify-center items-center w-80 h-44">
          {title}
        </div>
        <div className="px-10 w-full flex flex-col justify-around text-lg">
          <div>{description}</div>
          <div className="flex flex-row justify-between items-end text-lg">
            <div className="font-montserrat">
              <span className="font-dmsans">By </span>
              {mentor}
            </div>
            <div className="text-xl">{price}KZT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardMain;
