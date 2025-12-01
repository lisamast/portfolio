import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    return (
         <section>
            <img src="./images/portfolio-foto.jpeg" alt="portfolio-foto" />
            <h1>Hi, Welcome to my portfolio Website</h1>
            <h2>I am Lisa Mast, Full stack software developer.</h2>

            <button onClick={() => navigate('/projectsOverview')}>
                Take a look at my projects
            </button>
        </section>
    );
}
 
export default Home;