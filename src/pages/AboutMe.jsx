import Title from '../components/Title';

const AboutMe = () => {
    return (
        <section className="about-section">
            <Title
                text="About me"
                subtitle="A short introduction about who I am and what I enjoy doing."
            />

            <div className="about-card">
                <div className="about-content">
                    <p className="about-text">
                        Hi, I am Lisa Mast, a fullstack software development student from the Netherlands. I am studying Software Development at Techniek College Rotterdam and I enjoy building websites and apps that are clear, useful and easy to understand.
                    </p>
                    <p className="about-text">
                        During my education I have worked with HTML, CSS, JavaScript, PHP, SQL, Laravel, React and React Native. I like learning new techniques and improving my code step by step. I can work independently, but I also enjoy working together with others and solving problems as a team.
                    </p>
                    <p className="about-text">
                        I am looking for opportunities to develop myself further as a software developer and to use my knowledge in real projects.
                    </p>
                </div>

                <img src="./images/portfolio-foto.jpeg" alt="Lisa Mast" className="about-img" />
            </div>
        </section>
    );
};

export default AboutMe;
