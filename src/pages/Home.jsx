import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    return (
        <section className="home-section">
            <img src="./images/portfolio-foto.jpeg" alt="portfolio-foto" className="home-img" />

            <div className="home-text">
                <h1 className="home-title">Hi, Welcome to my portfolio Website</h1>
                <h2 className="home-subtitle">I am Lisa Mast, Full stack software developer.</h2>

                <button onClick={() => navigate('/projectsOverview')} className="btn">
                    Take a look at my projects
                </button>
            </div>
        </section>
    );
}

export default Home;