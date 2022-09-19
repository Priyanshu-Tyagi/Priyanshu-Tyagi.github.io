import GitHubCalendar from "react-github-calendar";
import "../styles/stats.css";

// const CAL = GitHubCalendar(".calendar", "your-username");

// // or enable responsive functionality:
// GitHubCalendar(".calendar", "your-username", { responsive: true });

// // Use a proxy
// GitHubCalendar(".calendar", "your-username", {
//    proxy (username) {
//      return fetch(`https://your-proxy.com/github?user=${username}`)
//    }
// }).then(r => r.text())

export default function Stats({ Desktop, Tablet, Mobile }) {
  return (
    <div className="stats">
      {
        <Desktop>
          <div className="in-stats">
            <div style={{display:"flex",justifyContent: "space-between"}}>
              <div className="git-stat">
              <img
                src="https://github-readme-stats.vercel.app/api?username=Priyanshu-Tyagi&show_icons=true&locale=en"
                alt="asheeshjaat"
              />
            </div>
            <div className="contri">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=Priyanshu-Tyagi&"
                alt="asheeshjaat"
              />
            </div>  
            </div>
            <div className="git-calender">
                <GitHubCalendar 
                // level={[0,1,2,3,4]}
                showWeekdayLabels={true}
                fontSize={12}
                username="Priyanshu-Tyagi" />
            </div>
          </div>
        </Desktop>
      }
      {
        <Tablet>
          <div className="T-in-stats">
            <div >
              <img
              width="100%"
                src="https://github-readme-stats.vercel.app/api?username=Priyanshu-Tyagi&show_icons=true&locale=en"
                alt="asheeshjaat"
              />
            </div>
            <div >
              <img
              width="100%"
                src="https://github-readme-streak-stats.herokuapp.com/?user=Priyanshu-Tyagi&"
                alt="asheeshjaat"
              />
            </div>
            <div className="git-calender">
                <GitHubCalendar 
                // level={[0,1,2,3,4]}
                showWeekdayLabels={true}
                fontSize={9}
                username="Priyanshu-Tyagi" />
            </div>
          </div>
        </Tablet>
      }
      {
        <Mobile>
          <div className="M-in-stats">
            <div >
              <img
                src="https://github-readme-stats.vercel.app/api?username=Priyanshu-Tyagi&show_icons=true&locale=en"
                alt="asheeshjaat"
              />
            </div>
            <div >
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=Priyanshu-Tyagi&"
                alt="asheeshjaat"
              />
            </div>
            <div className="M-git-calender">
                <GitHubCalendar 
                // level={[0,1,2,3,4]}
                showWeekdayLabels={true}
                fontSize={9}
                username="Priyanshu-Tyagi" />
            </div>
          </div>
        </Mobile>
      }
    </div>
  );
}
