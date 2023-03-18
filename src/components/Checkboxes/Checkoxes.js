import React from "react";
import { useState } from "react";
import { capitialize } from "../../utilitys/utilitys";
import "./Checkboxes.css";

const Checkboxes = ({ issue }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = (e) => {
    let newChecked = !checked;
    console.log(newChecked);
    setChecked(newChecked);
  };

  return (
    <div key={issue} className="checkbox_container">
      <input type="checkbox" id={issue} name={issue} value={issue} onChange={handleCheck} />
      <label className="checkbox_label" htmlFor={issue}>
        {capitialize(issue)}
      </label>
    </div>
  );
};

export default Checkboxes;
