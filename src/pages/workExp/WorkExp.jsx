import React from "react";
import { MdHomeWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Workexp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2022 - 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<MdHomeWork />}
            >
              <h3 className="vertical-timeline-element-title">
                FullStack my Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
              Taylor & Francis India Pvt Ltd
              </h4>
              <p>
              I am currently working on an exciting web development project using Angular to build an innovative and user-centric frontend
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2021 - 2022"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<MdHomeWork />}
            >
              <h3 className="vertical-timeline-element-title">
                Technical Consultant
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Filix consultant pvt ltd
              </h4>
              <p>
               Technical consultant adept at providing expert guidance and innovative solutions to address complex technological challenges.
              </p>
            </VerticalTimelineElement>
            
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;