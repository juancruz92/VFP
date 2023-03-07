import "./Checkboxes.css";
import { capitialize } from "../../utilitys/utilitys";

const Checkboxes = ({ issue }) => {
  return (
    <div key={issue} className="checkbox_container">
      <input type="checkbox" id={issue} name={issue} value={issue} />
      <label class="checkbox_label" htmlFor={issue}>
        {capitialize(issue)}
      </label>
    </div>
  );
};

export default Checkboxes;
