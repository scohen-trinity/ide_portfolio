import './ContactBar.css'

const ContactBar = () => {
    const contactList = [
        { type: 'github', href: 'https://github.com/scohen-trinity', class: 'fa fa-github' },
        { type: 'linkedin', href: 'https://www.linkedin.com/in/samuel-cohen-a82434251', class: 'fa-brands fa-linkedin' },
        { type: 'email', href: 'mailto:scohencs@gmail.com', class: 'fa-solid fa-envelope' },
    ];

    return (
        <ul className='contact-bar'>
            { contactList.map(contact => (
            <li key={contact.type}>
                <a href={contact.href}>
                <i className={contact.class}></i>
                </a>
            </li>
            ))}
        </ul>
    );
};

export default ContactBar;
