import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Title from '../components/Title.jsx';
import projects from "../projects.js";



const ProjectsOverview = () => {
  return (
    <section>
      <Title text="Projects" />

      {projects.map(project => (
        <Link key={project.id} to={`/projectDetails/${project.id}`}>
          <div>
            <h2>{project.name}</h2>
            <img src={project.imageUrl1} alt="" />
          </div>
        </Link>
      ))}
    </section>
  );
};

export default ProjectsOverview;