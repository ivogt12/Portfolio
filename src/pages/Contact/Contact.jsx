import { useState} from "react";
import * as emailsAPI from "../../utilities/email-api";

export default function Contact()
{

const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
    });

    const [error, setError] = useState("");

    function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    };

    async function handleSubmit(e){
    e.preventDefault();
    try {
        await emailsAPI.sendEmail(formData);
    } catch {
        setError("Submition Failed - Please Try Again");
        console.log(error);
    }
    };
    
    return (
        <div className="con">
            <h1>Contact</h1>
            <div className="contact">
                <section className="contact_left">
                <h2>Send me a message</h2>
                <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
                </div>
                    <div className="contactButtonContainer">
                        <button className="contactButton" type="submit">Send Message</button>
                    </div>
                </form>
                </section>


                <section className="contact_right">
                    <p>4570 Willow Bend Ct, Chino Hills<br />CA 91709</p>
                    <p>+1 909 631 7185</p>
                    <p>isaiahvogt26@gmail.com</p>
                    <p>portfolio.com</p>
                </section>
            </div>
        </div>
    )
}