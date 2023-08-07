import Education from "./Education";
import PersonalDetails from "./PersonalDetails";
import Experience from "./Experience";
import "./styles.css";

function App() {

  return (
    <>
      <div className="container">
      <PersonalDetails />
      <Education />
      <Experience />
      </div>
      <div className="Resume">
        <div className="ResumeHeader">
        <div id="FullName"></div>
        <div className="personal">
        <div id="Email"></div>
        <div id="Phone"></div>
        <div id="Address"></div></div>

        </div>
        <div className="ResumeBody">
        <div className="Education">
        <h1>Education</h1>
        <div className="EducationDetails">
        <div className="Dates">
        <div id="StartDate"></div>
        -<div id="GraduationDate"></div></div>
        <h4 id="School"></h4>
        <div id="City"></div>
        <div id="Degree"></div>
        </div>
        </div>
        <div className="Experience">
        <h1>Experience</h1>
        <div className="ExperienceDetails">
        <div className="Dates">
        <div id="StartDates"></div>
        -<div id="EndDate"></div></div>
        <h4 id="CompanyName"></h4>
        <div id="city"></div>
        <div id="Position"></div>
        <p id="Description"></p>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}
export default App;