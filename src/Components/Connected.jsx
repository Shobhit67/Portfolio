import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  return (
    <Router>
      <div className="common-section">
        <h3>Stay connected</h3>
        <hr />

        <div className="contacts">
          <p>Haryana, India</p>
          <h4>
            <a href="mailto:shobhitgoyal1020@gmail.com">
              <strong>shobhitgoyal1020@gmail.com</strong>
            </a>
          </h4>
          <p>(+91) 9729062259</p>
          <br />

          <div className="social-icons">
            <NavLink
              to="https://www.linkedin.com/in/shobhit-goyal-84a5501b9/"
              target="_blank"
              className="icons"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </NavLink>
            <NavLink
              to="https://github.com/Shobhit67/"
              target="_blank"
              className="icons"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </NavLink>
            <NavLink
              to="https://drive.google.com/file/d/1MDFl90fzm0suWtG8wB9w2nNVNKz34CNB/view"
              target="_blank"
              className="icons"
            >
              <FontAwesomeIcon icon={faFile} size="xl" />
            </NavLink>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Projects;
