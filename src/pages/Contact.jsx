import Title from '../components/Title';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <section className="contact-section">
            <Title text="Contact" subtitle="Feel free to contact me about an internship, project or question." />

            <div className="contact-container">
                <div className="contact-left">
                    <ContactForm />
                </div>

                <div className="contact-right">
                    <h2>Contact details</h2>
                    <p className="contact-info">
                        Phone number: <a href="tel:+31646451759">+31 6 4645 1759</a><br />
                        Email: <a href="mailto:9027431@student.zadkine.nl">9027431@student.zadkine.nl</a>
                    </p>

                    <p className="github">
                        You can also view my work on <a href="https://github.com/lisamast" target="_blank" rel="noreferrer">GitHub</a>.
                    </p>
                    <p className="github">
                        Or visit my <a href="https://www.linkedin.com/in/lisa-mast/" target="_blank" rel="noreferrer">LinkedIn</a> profile.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
