import { useParams, useNavigate } from 'react-router-dom';
import Title from '../components/Title.jsx';
import projects from '../projects.js';

const ProjectDetails = () => {
    const { projectid } = useParams();
    const navigate = useNavigate();
    const project = projects.find(item => item.id === Number(projectid));

    if (!project) {
        return (
            <section className="details-section">
                <Title text="Project not found" />
                <button onClick={() => navigate('/projectsOverview')} className="btn">Back to projects</button>
            </section>
        );
    }

    return (
        <section className="details-section">
            <Title text={project.name} subtitle={project.category} />

            <div className="details-card">
                <div className="details-images">
                    {project.images.map((image, index) => (
                        <img key={image} src={image} alt={`${project.name} screenshot ${index + 1}`} className="details-img" />
                    ))}
                </div>

                <p className="details-text">{project.info}</p>

                {project.gitLink && (
                    <p className="github">
                        View this project on <a href={project.gitLink} target="_blank" rel="noreferrer">GitHub</a>
                    </p>
                )}

                <button onClick={() => navigate('/projectsOverview')} className="btn">
                    Back to project overview
                </button>
            </div>
        </section>
    );
};
 
export default ProjectDetails;
