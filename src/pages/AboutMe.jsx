import Title from "../components/Title";

const AboutMe = () => {
    return (
        <section className="about-section">
            <div className="about-content">
            <Title text="About Me" />
            <p className="about-text">I am Lisa, I was born on November 23, 2007. I’m studying software development at Techniek College Rotterdam.</p>
            </div>
            
            <img src="./images/portfolio-foto.jpeg" alt="portfolio-foto" className="about-img" />
        </section>
    );
}
 
export default AboutMe;