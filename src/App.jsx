import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import ProjectsOverview from './pages/ProjectsOverview';
import ProjectDetails from './pages/ProjectDetails';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Navigation from './pages/Navigation';


function App() {
  return (
    <BrowserRouter>
        <Navigation/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/projectsOverview" element={<ProjectsOverview />} />
        <Route path="/projectDetails/:projectid" element={<ProjectDetails />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;