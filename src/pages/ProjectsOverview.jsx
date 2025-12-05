import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Title from '../components/Title.jsx';
import projects from "../projects.js";



const ProjectsOverview = () => {
  return (
    <section className='overview-section'>
      <Title text="Projects" />

      <div className='overview-grid'>
        {projects.map(project => (
          <Link key={project.id} to={`/projectDetails/${project.id}`} className='overview-link'>
            <div className='overview-div'>
              <h2 className='overview-text'>{project.name}</h2>
              <img src={project.imageUrl1} alt="" className='overview-img'/>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsOverview;