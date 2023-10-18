import timelineElements from "./timelineElements";

function Projects() {
  return (
    <div className="Projects-section">
      <h3 className="Projects-heading">Projects</h3>
      <hr />

      <div className="timeline-section">

        <div className="timeline-items">

          {timelineElements.map((elements) => (
            <div className="timeline-item" key={elements.id}>
              <div className="timeline-dot"></div>
              <div className="timeline-date">{elements.date}</div>
              <div className="timeline-content">
                <h3>{elements.projectName}</h3>
                <p className="description">
                {elements.description}
                </p>
                <button className="timeline-btn" typeof="submit"><a href={elements.hrefLink}>View live</a></button>
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
