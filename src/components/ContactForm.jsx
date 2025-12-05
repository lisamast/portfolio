import InputField from "./InputField";

const ContactForm = () => {
    return ( 
        <form className="contact-form" action="">
         
            <InputField type="text" label="Name" id="name" />
            <InputField type="email" label="Email" id="email" />
            <InputField type="text" label="Phonenumber" id="phonenumber" />
            
            <label htmlFor="Message" className="contact-label">Message</label>
            <textarea type="text" label="Message" id="message" className="contact-textarea"></textarea>

            <button type="submit" className="btn">Send</button>
        </form>
     );
}
 
export default ContactForm;