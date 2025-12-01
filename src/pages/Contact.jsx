import Title from "../components/Title";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <section>
            <Title text="Contact" />
            <ContactForm />

            <p>You can contact me via <br/>
                Phone number: +31 64 645 17 59<br/>
                Email: 9027413@student.zadkine.nl
            </p>
            
            <p>
                You can view my work on my <a href="https://github.com/dashboard" target="_blank" rel="">GitHub</a>
            </p>
        </section>
    );
}
 
export default Contact;