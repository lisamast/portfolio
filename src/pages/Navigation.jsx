import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
    return (
    <div>
      <nav className='nav'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutMe">About me</Link></li>
          <li><Link to="/projectsOverview">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      
      <Outlet />
    </div>
    );
}
 
export default Navigation;