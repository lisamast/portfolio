import InputField from "./InputField";

const ContactForm = () => {
    return ( 
        <form action="">
         
            <InputField type="text" label="Name" id="name" />
            <InputField type="email" label="Email" id="email" />
            <InputField type="text" label="Phonenumber" id="phonenumber" />
            
            <label htmlFor="Message">Message</label>
            <textarea type="text" label="Message" id="message"></textarea>

            <button type="submit">Send</button>
        </form>
     );
}
 
export default ContactForm;