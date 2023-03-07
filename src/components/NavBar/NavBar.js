import logo from "../../images/logo.svg";
import "./NavBar.css";

const navBar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar_inside">
          <div className="logo" />
          <ul className="links_list">
            <li>Take the survey</li>
            <li>About</li>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default navBar;
