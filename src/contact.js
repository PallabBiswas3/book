
import './Contact.css'
const Contact = () => {
    return (
        <section id="contact">
            <h2 style={{ textAlign: 'center', backgroundColor: 'rgb(221, 221, 57)' }}>Contact Us</h2>
            <form style={{ backgroundColor: 'rgb(195, 255, 0)' }}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required /><br /><br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required /><br /><br />
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required /><br /><br />
                <label htmlFor="suggestion">Suggestion:</label><br />
                <textarea id="suggestion" name="suggestion" rows="4" cols="50"></textarea><br /><br />
                <input type="submit" value="Submit" style={{ alignItems: 'center' }} />
            </form>
        </section>
    );
}

export default Contact;
