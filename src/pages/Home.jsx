import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <section className="home-section">
            <div className="home-card">
                <img src="./images/portfolio-foto.jpeg" alt="Lisa Mast" className="home-img" />

                <div className="home-text">
                    <p className="small-title">Software development student</p>
                    <h1 className="home-title">Hi, welcome to my portfolio.</h1>
                    <p className="home-subtitle">
                        I am Lisa Mast, a motivated fullstack software development student at Techniek College Rotterdam.
                    </p>

                    <div className="home-buttons">
                        <button onClick={() => navigate('/projectsOverview')} className="btn">
                            View my projects
                        </button>
                        <button onClick={() => navigate('/contact')} className="btn btn-light">
                            Contact me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
