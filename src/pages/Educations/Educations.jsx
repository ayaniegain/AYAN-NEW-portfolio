import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <div
      className="w-full bg-gray-200   py-12 px-4 sm:px-6 lg:px-8 flex justify-center"
      id="education"
    >
      <div className="w-full max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-400 underline uppercase mb-2">
            Education
          </h2>
        </div>

        <div className="mx-auto">
          <VerticalTimeline lineColor="#ccc" className="mx-auto">
            {/* Full Stack Web Development */}
            <VerticalTimelineElement
              contentStyle={{
                background: "white",
                color: "black",
                borderRadius: "12px",
                boxShadow: "0 6px 10px rgba(0,0,0,0.1)",
                padding: "20px",
              }}
              // contentArrowStyle={{ border : "7px solid white" }}
              date="2024 - 2025"
              iconStyle={{ background: "#14b8a6", color: "#fff" }}
              icon={<MdSchool />}
              position="left"
            >
              <h3 className="text-xl font-semibold text-teal-600">
                Full Stack Web Development
              </h3>
              <h4 className="text-sm font-medium text-gray-900 dark:text-gray-300 mt-1">
                Weavers Web Technology
              </h4>
            </VerticalTimelineElement>

            {/* B-Tech CSE */}
            <VerticalTimelineElement
              contentStyle={{
                background: "white",
                color: "black",
                borderRadius: "12px",
                boxShadow: "0 6px 10px rgba(0,0,0,0.1)",
                padding: "20px",
              }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date="2017 - 2021"
              iconStyle={{ background: "#14b8a6", color: "#fff" }}
              icon={<MdSchool />}
              position="right"
            >
              <h3 className="text-xl font-semibold text-teal-600">
                B-Tech (CSE)
              </h3>
              <h4 className="text-sm font-medium text-gray-900 dark:text-gray-300 mt-1">
                MVJ College of Engineering
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Education;