import ContactBar from '../Shared/ContactBar/ContactBar';
import './Contact.css'

function Contact() {
    return (
        <section id='contact'>
          <div className='App-header'>
            <h5 className='Rusty-text'>
              Contact
            </h5>
            <ContactBar />
          </div>
        </section>
    );
}
export default Contact;
