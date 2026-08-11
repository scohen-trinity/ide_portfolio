import './ContactBar.css'
import { Github } from '../../../assets/github';
import { LinkedIn } from '../../../assets/linkedin';
import { Envelope } from '../../../assets/envelope';

interface Contact {
    type: string,
    href: string,
    image: JSX.Element,
    accessibilityLabel: string,
};

const ContactBar = () => {
    const contactList: Contact[] = [
        { type: 'github', href: 'https://github.com/scohen-trinity', image: <Github width={24} height={24} />, accessibilityLabel: 'My Github!' },
        { type: 'linkedin', href: 'https://www.linkedin.com/in/samuel-cohen-a82434251', image: <LinkedIn width={24} height={24} />, accessibilityLabel: 'Connect with me on LinkedIn!' },
        { type: 'email', href: 'mailto:scohencs@gmail.com', image: <Envelope width={24} height={24} />, accessibilityLabel: 'Send me an email!' },
    ];

    return (
        <ul className='contact-bar'>
            {contactList.map(contact => (
                <li key={contact.type}>
                    <a href={contact.href}>
                        {contact.image}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default ContactBar;
