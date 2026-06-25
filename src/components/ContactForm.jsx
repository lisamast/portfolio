import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import InputField from './InputField';

const ContactForm = () => {
    const form = useRef();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setSuccess(false);
        setError(false);

        emailjs.sendForm(
            'service_xf87jjj',
            'template_31juooc',
            form.current,
            '3W57RyjQnm7-2e-hS'
        )
        .then(() => {
            setSuccess(true);
            e.target.reset();
        })
        .catch(() => {
            setError(true);
        });
    };

    return ( 
        <form ref={form} onSubmit={sendEmail} className="contact-form">
            <InputField type="text" label="Name" id="name" name="name" />
            <InputField type="email" label="Email" id="email" name="email" />
            <InputField type="text" label="Phone number" id="phonenumber" name="phonenumber" />
            
            <label htmlFor="message" className="contact-label">Message</label>
            <textarea name="message" id="message" className="contact-textarea" required></textarea>

            <button type="submit" className="btn">Send message</button>

            {success && <p className="success-message">Message sent successfully!</p>}
            {error && <p className="error-message">Something went wrong. Please try again later.</p>}
        </form>
     );
};

export default ContactForm;
