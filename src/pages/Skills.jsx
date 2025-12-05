import Title from "../components/Title";

const Skills = () => {
    return (
        <section className="skills-section">
            <Title text="Skills" />
            <section className="skills-container">
            <div className="skills-block">
                <h2 className="skills-title">Programming languages</h2>
                <div className="skills-row">
                    <img src="./images/html.png" alt="html" className="skills-img" />
                    <img src="./images/css.png" alt="css" className="skills-img" />
                    <img src="./images/javascript.png" alt="javascript" className="skills-img" />
                    <img src="./images/php.png" alt="php" className="skills-img" />
                    <img src="./images/sql.png" alt="sql" className="skills-img" />
                </div>
            </div>


            <div className="skills-block">
                <h2 className="skills-title">Frameworks</h2>
                <div className="skills-row">
                    <img src="./images/React.png" alt="react" className="skills-img" />
                </div>
            </div>

            <div className="skills-block">
                <h2 className="skills-title">Design</h2>
                <div className="skills-row">
                    <img src="./images/figma.png" alt="figma" className="skills-img" />
                </div>
            </div>

            <div className="skills-block">
                <h2 className="skills-title">Communication</h2>
                <div className="skills-row">
                    <img src="./images/scrum.png" alt="scrum" className="skills-img" />
                </div>
            </div>
            </section>
        </section>
    );
}

export default Skills;