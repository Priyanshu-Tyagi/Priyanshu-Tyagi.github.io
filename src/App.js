// import logo from './logo.svg';
import "./App.css";
import AboutMe from "./components/aboutme";
import ContactMe from "./components/contactme";
import Intro from "./components/Intro";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import { useMediaQuery } from "react-responsive"
import Stats from "./components/Stats";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

function App() {
  return (
    <div className="App">
      <Navbar Desktop={Desktop} Tablet={Tablet} Mobile={Mobile} />
      <Intro Desktop={Desktop} Tablet={Tablet} Mobile={Mobile} />
      <div >
        <AboutMe Desktop={Desktop} Tablet={Tablet} Mobile={Mobile} />

        <Skills Desktop={Desktop} Tablet={Tablet} Mobile={Mobile} />

        <Projects Desktop={Desktop} Tablet={Tablet} Mobile={Mobile} />

        <Stats Desktop={Desktop} Tablet={Tablet} Mobile={Mobile} />

        <ContactMe Desktop={Desktop} Tablet={Tablet} Mobile={Mobile}/>
      </div>
    </div>
  );
}

export default App;
