import "../styles/skills.css"
import data from "./data/skilldata"

export default function Skills({ Desktop, Tablet, Mobile }) {
  return (
    <div id="Skills">
      <Desktop>
        <div className="in-skills">
          <h2 className="sec-head">Skills</h2>
          <div className="skill">
            {data.map((i)=>(
              <div className="skill-card" key={i.name}>
                <div className="skill-card-img-div">
                   <img className="skill-card-img" src={i.src} alt={i.name} />
                </div>
                <p className="skill-card-title">{i.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Desktop>
      <Tablet>
        <div className="in-skills">
          <h2 className="T-sec-head">Skills</h2>
          <div className="skill">
            {data.map((i)=>(
              <div className="skill-card" key={i.name}>
                <div className="skill-card-img-div">
                   <img className="skill-card-img" src={i.src} alt={i.name} />
                </div>
                <p className="skill-card-title">{i.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Tablet>
      <Mobile>
        <div className="M-in-skills">
          <h2 className="M-sec-head">Skills</h2>
          <div className="skill">
            {data.map((i)=>(
              <div className="M-skill-card" key={i.name}>
                <div className="skill-card-img-div">
                   <img className="skill-card-img" src={i.src} alt={i.name} />
                </div>
                <p className="M-skill-card-title">{i.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Mobile>
    </div>
  );
}
