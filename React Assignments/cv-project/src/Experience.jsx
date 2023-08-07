import { useState } from "react";

function Experience(){
    const [CompanyName, setCompanyName] = useState("");
    const [Position, setPosition] = useState("");
    const [city, setcity] = useState("");
    const [StartDates, setStartDates] = useState("");
    const [EndDate, setEndDate] = useState("");
    const [Description, setDescription] = useState("");
    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        switch (name) {
          case 'CompanyName':
            setCompanyName(value);
            document.getElementById("CompanyName").innerHTML = value;
            break;
          case 'Position':
            setPosition(value);
            document.getElementById("Position").innerHTML = value;
            break;
          case 'city':
            setcity(value);
            document.getElementById("city").innerHTML = value;
            break;
          case 'StartDates':
            setStartDates(value);
            document.getElementById("StartDates").innerHTML = value;
            break;
            case 'EndDate':
            setEndDate(value);
            document.getElementById("EndDate").innerHTML = value;
            break;
            case 'Description':
            setDescription(value);
            document.getElementById("Description").innerHTML = value;
            break;
        }
        e.preventDefault();
        
        console.log(CompanyName);
        console.log(Position);
        console.log(city);
        console.log(StartDates);
        console.log(EndDate);
        console.log(Description);
      };
    return(
        <div className="Form">
            <h1>Experience</h1>
            <label>Company Name
            <input type="text" name="CompanyName" value={CompanyName} onChange={handleChange} />
            </label>
            <label>
                Position
                <input type="text" name="Position" value={Position} onChange={handleChange}/>
            </label>
            <label>
                city
                <input type="text" name="city" value={city} onChange={handleChange}/>
            </label>
            <label>
                StartDates
                <input type="text" name="StartDates" value={StartDates} onChange={handleChange}/>
            </label>
            <label>
                End Date
                <input type="text" name="EndDate" value={EndDate} onChange={handleChange}/>
            </label>
            <label>
                Description
                <input type="text" name="Description" value={Description} onChange={handleChange}/>
            </label>
        </div>
    )
}
export default Experience;