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
        <section className='details-section'>
            <Title text={project.name} />

            <div className='details-images'>
            <img src={project.imageUrl2} alt="" className='details-img'/>
            <img src={project.imageUrl3} alt="" className='details-img'/>
            </div>

            <p className='details-text'>{project.info}</p>
            <p className='github'>
            Look at the website on my <a href={project.gitLink} target="_blank" rel="">GitHub</a>
            </p>

            <button onClick={() => navigate('/projectsOverview')} className='btn'>
                Back to project overview
            </button>
        </section>
    );
}
 
export default ProjectDetails;