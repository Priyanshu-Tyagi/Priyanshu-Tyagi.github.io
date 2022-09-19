import pp from "../img/Profile-pic.png";
import "../styles/intro.css";

export default function Intro({ Desktop, Tablet, Mobile }) {
  return (
    <div className="Intro">
      {
        <Desktop>
<div className="in-Intro">
        <div className="intro-text">
          <div>
            <h2 className="hello">Hello I'm </h2>
            <br />
            <h1 className="name">Priyanshu Tyagi</h1>
            <br />
            <br />
            <h3 className="quote">
              Ambitious full stack web developer with problem solving and
              analyzing skills and a creative software designer.
            </h3>
          </div>
          <div className="btn-div">
            <a href="https://drive.google.com/uc?export=download&id=1cktZclZGrHZk4OYQYfRSsxrRm6Y0cb-H">
              <button className="dwn-btn">Resume</button>
            </a>
          </div>
        </div>
        <div className="pic-div">
          <img className="profile-pic" src={pp} alt="Priyanshu Tyagi" />
        </div>
      </div>
        </Desktop>
      }
      {
        <Tablet>
<div style={{
  display: "block",
  justifyContent: "space-between",
  width: "80%",
  margin: "auto",
  }}>
    <div style={{margin:"auto", width:"60%",marginBottom:"2rem"}} >
          <img className="T-profile-pic" src={pp} alt="Priyanshu Tyagi" />
        </div>
        <div >
          <div>
            <h2 className="hello">Hello I'm </h2>
            <br />
            <h1 className="T-name">Priyanshu Tyagi</h1>
            <br />
            <br />
            <h3 className="quote">
              Ambitious full stack web developer with problem solving and
              analyzing skills and a creative software designer.
            </h3>
          </div>
          <div className="btn-div">
            <a href="https://drive.google.com/uc?export=download&id=1cktZclZGrHZk4OYQYfRSsxrRm6Y0cb-H">
              <button className="dwn-btn">Resume</button>
            </a>
          </div>
        </div>
      </div>
        </Tablet>
      }
      {
        <Mobile>
<div style={{
  display: "block",
  justifyContent: "space-between",
  width: "80%",
  margin: "auto",
  }}>
    <div style={{margin:"auto", width:"60%"}} >
          <img className="T-profile-pic" src={pp} alt="Priyanshu Tyagi" />
        </div>
        <div >
          <div>
            <h2 className="hello">Hello I'm </h2>
            <br />
            <h1 className="M-name">Priyanshu Tyagi</h1>
            <br />
            <br />
            <h3 className="quote">
              Ambitious full stack web developer with problem solving and
              analyzing skills and a creative software designer.
            </h3>
          </div>
          <div className="btn-div">
            <a href="https://drive.google.com/uc?export=download&id=1cktZclZGrHZk4OYQYfRSsxrRm6Y0cb-H">
              <button className="dwn-btn">Resume</button>
            </a>
          </div>
        </div>
      </div>
        </Mobile>
      }

      
    </div>
  );
}
