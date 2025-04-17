import React from "react";
import { MdHomeWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkExp = () => {
  return (
    <div
      className="w-full bg-teal-100/30 py-16 px-4 sm:px-6 lg:px-8 flex justify-center"
      id="work"
    >
      <div className="mx-auto max-w-screen-xl flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center uppercase mb-2">
          Work Experience
        </h2>
        <hr className="border-teal-600 w-64 md:w-96 mx-auto mb-8" />
        <VerticalTimeline lineColor="#1e1e2c" className="mx-auto">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "white",
              color: "#1e1e2c",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2022 - 2023"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<MdHomeWork />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-semibold text-teal-600">
              FullStack Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-gray-500">
              Taylor & Francis India Pvt Ltd
            </h4>
            <p>
              Developed a React-Redux Book Publishing app, boosting new users by
              25% with optimized user flow. Enhanced performance by 20% using code
              splitting, lazy loading, and added search, sort, analytics, and
              reporting features.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "white",
              color: "#1e1e2c",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2021 - 2022"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<MdHomeWork />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-semibold text-teal-600">
              Technical Consultant
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-gray-500">
              Filix Consultant Pvt Ltd
            </h4>
            <p>
              Technical consultant adept at providing expert guidance and
              innovative solutions to address complex technological challenges.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExp;