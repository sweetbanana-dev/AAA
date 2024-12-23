import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="2020 - Present"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Caron & Bletzer
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            <strong>Senior Full Stack Engineer</strong>
          </h6>
          <p>• Modified React/React-Native frontend infrastructure to improve performance & resolve potential issues.</p>
          <p>• Refactored a transportation system with Nest.js, React, GraphQL, TypeScript, AWS and I participated positively in all stages of SDLC, and maintained best practice procedures.</p>
          <p>• Led the development and implementation of a microservices architecture, resulting in a 50% increase in system scalability and a 40% reduction in maintenance costs.</p>
          <p>• Implemented scalable, high-speed, responsive components for e-commerce project leading to 30% increase in user engagement.</p>
          <p>• Reduced loading time by 20% through optimization and implemented caching with react-query and lazy loading techniques.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2017 - 2020"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            ScienceSoft
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Full Stack Engineer
          </h6>
          <p>• Developed 3 feature-rich e-learning platforms using React, React Native, Spring Boot, Django and Node.js, combining modern front-end techniques with robust
back-end functionality.</p>
          <p>• Developed responsive user interfaces with React, delivering intuitive and engaging learning experiences for students across multiple devices, resulting in a notable 20%
increase in user engagement.</p>
          <p>Leveraged the capabilities of Node.js and Django to architect a scalable and secure back-end solution, seamlessly integrating with databases and external APIs, resulted
in a significant 20% improvement in efficiency and performance in managing course content, user progress, and assessments.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2014 - 2017"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            GetDevDone
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Full Stack Engineer
          </h6>
          <p>• Translated Figma designs into pixel-perfect, mobile-first, and responsive web applications using HTML5, CSS3, Material UI, and Bootstrap, achieving 95%
fidelity to the original designs.</p>
          <p>• Developed data analysis charts and diagrams for an E-commerce platform using React, Redux, Tailwind CSS, and D3.js, resulting in enhanced data visualization and
a 100% increase in customer satisfaction through a functional admin dashboard built from scratch using TypeScript, React, and Redux.</p>
          <p>Elevated code quality by migrating a complex legacy JavaScript codebase to a modern and scalable system using TypeScript, while implementing automated
testing with Jest, Mocha, and Cypress for improved reliability and robustness.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
