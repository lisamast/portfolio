import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import InputField from "./InputField";

const ContactForm = () => {

    const form = useRef();
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        console.log("form submitted");

        emailjs.sendForm(
            "service_xf87jjj",
            "template_31juooc",
            form.current,
            "3W57RyjQnm7-2e-hS"
        )
        .then(() => {
            setSuccess(true);
            e.target.reset();
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return ( 
        <form ref={form} onSubmit={sendEmail} className="contact-form">

            <input type="hidden" name="_captcha" value="false"></input>
         
            <InputField type="text" label="Name" id="name" name="name" />
            <InputField type="email" label="Email" id="email" name="email" />
            <InputField type="text" label="Phonenumber" id="phonenumber" name="phonenumber" />
            
            <label htmlFor="message" className="contact-label">Message</label>
            <textarea
                name="message"
                id="message"
                className="contact-textarea"
                required
            ></textarea>

            <button type="submit" className="btn">Send</button>

            {success && <p className="success-message">Message sent successfully!</p>}
        </form>
     );
}

export default ContactForm;