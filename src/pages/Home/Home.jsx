import React from "react";
import udemy from "../../assets/udemy.jpg";
import udemy1 from "../../assets/udemy-1.jpg";

export const Home = () => {
  return (
    <div className="mt-24">
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
      <div className="w-3/4 mx-auto mt-10">
        <p className="text-start text-3xl">Start New Course</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, rem
          eveniet iusto ab dolorem sequi dolorum ex expedita ducimus possimus
          ut, cupiditate quis eius laboriosam nobis libero cumque omnis maiores?
        </p>
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
