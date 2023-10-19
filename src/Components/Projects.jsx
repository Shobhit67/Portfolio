import timelineElements from "./timelineElements";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


function Projects() {
  return (
    <div className="common-section">
      <h3>Projects</h3>
      <hr />

      <div className="timeline-section">
        <div className="timeline-items">
          {timelineElements.map((elements) => (
            <div className="timeline-item" key={elements.id}>
              <div className="timeline-dot"></div>
              <div className="timeline-date">{elements.date}</div>
              <div className="timeline-content">
                <h3>{elements.projectName}</h3>
                <p className="description">{elements.description}
                  <br />
                  <span className="skills">{elements.skill1}</span> 
                  <span className="skills">{elements.skill2}</span> 
                  <span className="skills">{elements.skill3}</span> 
                  <span className="skills">{elements.skill4}</span> 
                </p>
                <button className="timeline-btn" typeof="submit">
                  <a href={elements.hrefLink}>View live <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" /></a>
                </button>
              </div>
            </div>
          ))}
        </div>



      </div>

    </div>
  );
}

export default Projects;
// "homepage": "https://myusername.github.io/my-app",
