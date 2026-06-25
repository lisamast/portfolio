import Title from "../components/Title";

const AboutMe = () => {
    return (
        <section className="about-section">
            <div className="about-content">
            <Title text="About Me" />
            <p className="about-text">Hi, I'm Lisa, a software development student from the Netherlands. I was born on November 23, 2007, and I'm currently studying Software Development at Techniek College Rotterdam. I enjoy creating digital solutions, learning new technologies, and turning ideas into functional projects. Through my studies and personal projects, I continue to develop my skills in programming, problem-solving, and web development. I'm always looking for opportunities to learn, grow, and challenge myself as a future developer.</p>
            </div>
            
            <img src="./images/portfolio-foto.jpeg" alt="portfolio-foto" className="about-img" />
        </section>
    );
}
 
export default AboutMe;