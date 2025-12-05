import Title from "../components/Title";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <section className="contact-section">
             <Title text="Contact" />
            <div className="contact-container">
               

                <div className="container-left">
                    <ContactForm />
                </div>

                <div className="container-right">
                    <p className="contact-info">You can contact me via <br />
                        Phone number: +31 64 645 17 59<br />
                        Email: 9027413@student.zadkine.nl
                    </p>

                    <p className="github">
                        You can view my work on my <a href="https://github.com/dashboard" target="_blank" rel="">GitHub</a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contact;