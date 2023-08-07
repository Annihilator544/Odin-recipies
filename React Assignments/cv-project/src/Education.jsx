import { useState } from "react";

function Education(){
    const [schoolName, setSchoolName] = useState("");
    const [degree, setDegree] = useState("");
    const [city, setCity] = useState("");
    const [StartDate, setStartDate] = useState("");
    const [graduationDate, setGraduationDate] = useState(""); 
    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        switch (name) {
          case 'School':
            setSchoolName(value);
            document.getElementById("School").innerHTML = value;
            break;
          case 'Degree':
            setDegree(value);
            document.getElementById("Degree").innerHTML = value;
            break;
          case 'City':
            setCity(value);
            document.getElementById("City").innerHTML = value;
            break;
          case 'StartDate':
            setStartDate(value);
            document.getElementById("StartDate").innerHTML = value;
            break;
            case 'GraduationDate':
            setGraduationDate(value);
            document.getElementById("GraduationDate").innerHTML = value;
            break;
        }
        e.preventDefault();
        
        console.log(schoolName);
        console.log(degree);
        console.log(city);
        console.log(StartDate);
        console.log(graduationDate);
      };
    return(
        <div className="Form">
            <h1>Education</h1>
            <label>School Name
            <input type="text" name="School" value={schoolName} onChange={handleChange} />
            </label>
            <label>
                Degree
                <input type="text" name="Degree" value={degree} onChange={handleChange}/>
            </label>
            <label>
                City
                <input type="text" name="City" value={city} onChange={handleChange}/>
            </label>
            <label>
                StartDate
                <input type="text" name="StartDate" value={StartDate} onChange={handleChange}/>
            </label>
            <label>
                GraduationDate
                <input type="text" name="GraduationDate" value={graduationDate} onChange={handleChange}/>
            </label>
        </div>
    )
}
export default Education;