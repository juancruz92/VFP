import Checkboxes from "../Checkboxes/Checkoxes";
import "./CheckboxesContainer.css";

const CheckboxesContainer = () => {
  const issues = ["democracy", "brexit", "taxes"];

  return (
    <div className="checkboxes_main_container">
      <h1 className="checkboxes_title">Which issues are important to you?</h1>
      <div className="checkboxes_list">
        {issues.map((issue) => {
          return <Checkboxes issue={issue} />;
        })}
      </div>
    </div>
  );
};

export default CheckboxesContainer;
