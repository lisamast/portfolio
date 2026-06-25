import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <header className="nav">
            <nav className="nav-content">
                <NavLink to="/" className="nav-logo">Lisa Mast</NavLink>

                <ul className="nav-list">
                    <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                    <li><NavLink to="/aboutMe" className="nav-link">About me</NavLink></li>
                    <li><NavLink to="/projectsOverview" className="nav-link">Projects</NavLink></li>
                    <li><NavLink to="/skills" className="nav-link">Skills</NavLink></li>
                    <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};
 
export default Navigation;
