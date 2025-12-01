const Project = ({ project, onShowDetail }) => {
    return (
        <section>
            <img src={project.imageUrl1} alt="" />
            <h2>{project.name}</h2>
          
            <button onClick={() => onShowDetail(project.id)}>
                <img src={project.imageUrl1} alt="" />
            </button>
        </section>
    );
};

export default Project;