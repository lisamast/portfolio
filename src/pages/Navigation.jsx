import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
    return (
    <div>
      <nav className='nav'>
        <ul className='nav-list'>
          <li><Link to="/" className='nav-link'>Home</Link></li>
          <li><Link to="/aboutMe" className='nav-link'>About me</Link></li>
          <li><Link to="/projectsOverview" className='nav-link'>Projects</Link></li>
          <li><Link to="/skills" className='nav-link'>Skills</Link></li>
          <li><Link to="/contact" className='nav-link'>Contact</Link></li>
        </ul>
      </nav>
      
      <Outlet />
    </div>
    );
}
 
export default Navigation;