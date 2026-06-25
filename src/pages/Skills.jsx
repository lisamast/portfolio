import Title from '../components/Title';

const skillGroups = [
    {
        title: 'Programming languages',
        skills: [
            { name: 'HTML', image: './images/html.png' },
            { name: 'CSS', image: './images/css.png' },
            { name: 'JavaScript', image: './images/javascript.png' },
            { name: 'PHP', image: './images/php.png' },
            { name: 'SQL', image: './images/sql.png' },
        ],
    },
    {
        title: 'Frameworks',
        skills: [
            { name: 'React', image: './images/React.png' },
            { name: 'React Native', image: './images/React-native.png' },
            { name: 'Next.js', image: './images/Nextjs.png' },
        ],
    },
    {
        title: 'Design and working method',
        skills: [
            { name: 'Figma', image: './images/figma.png' },
            { name: 'Scrum', image: './images/scrum.png' },
        ],
    },
];

const Skills = () => {
    return (
        <section className="skills-section">
            <Title
                text="Skills"
                subtitle="The techniques and tools I have used during my education and projects."
            />

            <div className="skills-container">
                {skillGroups.map(group => (
                    <div className="skills-block" key={group.title}>
                        <h2 className="skills-title">{group.title}</h2>
                        <div className="skills-row">
                            {group.skills.map(skill => (
                                <div className="skill-item" key={skill.name}>
                                    <img src={skill.image} alt={skill.name} className="skills-img" />
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
