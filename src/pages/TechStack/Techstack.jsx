import React from "react";
import { TechstackList } from "../../utils/TechnicalStackList";

const Techstack = () => {
  return (
    <div
      id="techstack"
      className="flex flex-col items-center justify-center gap-10 py-20 px-4"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#138781] uppercase mb-4">
          Technologies Stack
        </h2>
        <p className="text-lg">
          👉 including programming languages, frameworks, databases, front-end
          and back-end tools, and APIs
        </p>
      </div>

      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        {TechstackList.map((tech) => (
          <div key={tech._id}>
            <div className=" cursor-pointer bg-white shadow-md hover:shadow-2xl hover:bg-[#138781] hover:text-white transition duration-700 h-12 rounded-lg">
              <div className="flex items-center justify-center space-x-4">
                <tech.icon className="text-3xl" />
                <h5 className="text-xl font-semibold">{tech.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techstack;
