import projects from "../data/projects";
import { useNavigate } from "react-router-dom";

function Projects() {

  const navigate = useNavigate();

  const openDPR = () => {
    navigate("/dpr");
  };

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2>Project List</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.name}</h3>
            <p className="project-meta">
              Status:{" "}
              <span className={`status ${project.status.toLowerCase()}`}>
                {project.status}
              </span>
            </p>
            <p className="project-meta">Start Date: {project.startDate}</p>
            <p className="project-meta">Location: {project.location}</p>

            <button className="projects-btn" onClick={openDPR}>
              Open DPR Form
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;