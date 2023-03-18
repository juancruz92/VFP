import React from "react";
import Checkboxes from "../Checkboxes/Checkoxes";
import "./CheckboxesContainer.css";
import { useState, useEffect } from "react";
import { getAllContent } from "../../utilitys/database";

const CheckboxesContainer = () => {
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllContent();
      let all_issue_names = Object.values(data).map((el) => el.issue_name);
      setIssues(all_issue_names);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="checkboxes_main_container">
      <h1 className="checkboxes_title">Which issues are important to you?</h1>
      {isLoading ? (
        <h1 className="checboxes_loading">Loading issues...</h1>
      ) : (
        <div className="checkboxes_list">
          {issues.map((issue) => {
            return <Checkboxes issue={issue} />;
          })}
        </div>
      )}
    </div>
  );
};

export default CheckboxesContainer;
