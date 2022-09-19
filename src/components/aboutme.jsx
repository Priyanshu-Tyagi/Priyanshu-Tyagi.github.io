import "../styles/aboutme.css";

export default function AboutMe({ Desktop, Tablet, Mobile }) {
  return (
    <div id="AboutMe">
      {
        <Desktop>
          <div className="in-aboutme">
            <h2 className="sec-head">About Me</h2>

            <h3 className="me-text">
              I have worked on several different projects collaboratively and
              solely. I am a self-driven and passionate web developer skilled in
              JavaScript, React, and Redux and familiar with front-end
              frameworks like Chakra UI and MaterialUI. Gone through 30 weeks of coding
              Bootcamp at Masai School.Also, worked on NodeJs, Express, MongoDB
              DataBase, and also familiar with Redis. Always eager to learn new
              technologies to enhance my skills and bring value to the
              organization.
            </h3>
          </div>
        </Desktop>
      }
      {
        <Tablet>
          <div className="in-aboutme">
            <h2 className="sec-head">About Me</h2>

            <h3 className="T-me-text">
              I have worked on several different projects collaboratively and
              solely. I am a self-driven and passionate web developer skilled in
              JavaScript, React, and Redux and familiar with front-end
              frameworks like MaterialUI. Gone through 30 weeks of coding
              Bootcamp at Masai School.Also, worked on NodeJs, Express, MongoDB
              DataBase, and also familiar with Redis. Always eager to learn new
              technologies to enhance my skills and bring value to the
              organization.
            </h3>
          </div>
        </Tablet>
      }
      {
        <Mobile>
          <div className="in-aboutme">
            <h2 className="M-sec-head">About Me</h2>

            <h3 className="M-me-text">
              I have worked on several different projects collaboratively and
              solely. I am a self-driven and passionate web developer skilled in
              JavaScript, React, and Redux and familiar with front-end
              frameworks like MaterialUI. Gone through 30 weeks of coding
              Bootcamp at Masai School.Also, worked on NodeJs, Express, MongoDB
              DataBase, and also familiar with Redis. Always eager to learn new
              technologies to enhance my skills and bring value to the
              organization.
            </h3>
          </div>
        </Mobile>
      }
    </div>
  );
}
