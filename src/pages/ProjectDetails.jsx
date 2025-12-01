import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Title from '../components/Title.jsx';
import projects from '../projects.js';

const ProjectDetails = () => {
    const { projectid } = useParams();
    const navigate = useNavigate();
    const [projectList, setProjectList] = useState(projects);

    const project = projectList.find(p => p.id === Number(projectid));
    if (!project) {
        return <div>Project not found!</div>
    }

    return (
        <section>
            <Title text={project.name} />
            <img src={project.imageUrl1} alt="" />
            <img src={project.imageUrl2} alt="" />
            <p>{project.info}</p>
            <p>
            Look at the website on my <a href={project.gitLink} target="_blank" rel="">GitHub</a>
            </p>

            <button onClick={() => navigate('/projectsOverview')}>
                Back to project overview
            </button>
        </section>
    );
}
 
export default ProjectDetails;