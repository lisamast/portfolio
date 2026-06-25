import { Link } from 'react-router-dom';
import Title from '../components/Title.jsx';
import projects from '../projects.js';

const ProjectsOverview = () => {
  return (
    <section className="overview-section">
      <Title
        text="Projects"
        subtitle="A selection of school projects, practice projects and app concepts I have worked on."
      />

      <div className="overview-grid">
        {projects.map(project => (
          <Link key={project.id} to={`/projectDetails/${project.id}`} className="overview-link">
            <article className="overview-card">
              <img src={project.images[0]} alt={project.name} className="overview-img" />
              <div className="overview-content">
                <p className="project-category">{project.category}</p>
                <h2 className="overview-text">{project.name}</h2>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsOverview;
