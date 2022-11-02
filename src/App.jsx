import { useState } from "react";
import "./App.css";
//import { Hero, About, Experience, More } from "./components";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Hero from "./components/Hero";
import { CV } from "./cv/cv";
const { hero, education, experience, languages, habilities, volunteer } = CV;


const App = () => {
  const [showEducation, setShowEducation] = useState(true);
  return (
<>
<Hero hero={hero}/>
<div className="buttons">
            <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>
            </div>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <div className="habilities">
        {habilities.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">{item}</p>
            
            </div>
          );
        })}
      </div>
</> 
);
}


export default App
