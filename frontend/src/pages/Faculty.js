import React from "react";
import { FacultyList } from "./facultyList";
import "../components/Navbar.css";
function Faculty() {
  return (
    <div className="pad1">
      <h1 className="faculty-heading">Faculty</h1>
      <div className="row p-2">
        {FacultyList.map((person) => {
          return (
            <div key={person.key} className="col-md-4 customcard">
              <div className="customcard1">
                <img src={person.image} className="faculty-image" alt="" />
                <h1>{person.name}</h1>
                <p>{person.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faculty;
