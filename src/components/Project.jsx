const Project = ({ project, onShowDetail }) => {
    return (
        <section className="project">
            <img src={project.imageUrl1} alt="" className="project-img"/>
            <h2 className="project-title">{project.name}</h2>
          
            <button onClick={() => onShowDetail(project.id)} className="project-btn">
                <img src={project.imageUrl1} alt="" className="project-btn-img"/>
            </button>
        </section>
    );
};

export default Project;