import { useState } from "react"
import './Sidebar.css'

function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    section!.scrollIntoView({ behavior: 'smooth'});
}

function SideBar() {
    // hook to check if the sidebar is open
    const [isOpen, setOpen] = useState(false);

    // list of all sections in the website
    const sectionsList = [
        { section: 'home', text: 'home', icon: 'fa-solid fa-house-laptop' },
        { section: 'about', text: 'about_me', icon: 'fa-solid fa-address-card' },
        { section: 'experience', text: 'experience', icon: 'fa-solid fa-briefcase' },
        { section: 'projects', text: 'projects', icon: 'fa-solid fa-code' },
        { section: 'achievements', text: 'achievements', icon: 'fa-solid fa-code' },
        { section: 'contact', text: 'contact_me', icon: 'fa-solid fa-address-book' },
    ];

    // function to toggle the sidebar shown/hidden
    const toggleSidebar = () => {
        setOpen(!isOpen);
    }

    return(
        <div>
            <div className="sidebar">
                <button className="open-button" onClick={toggleSidebar}><i className="material-symbols-outlined">file_copy</i></button>
            </div>
            <div className={`sidebar-expanded ${isOpen ? 'open' : ''}`}>
                <div className="explorer-text">EXPLORER</div>
                <div className="sidebar-content">
                    <div className="section-header">
                        <span className="material-symbols-outlined arrow-down">
                            keyboard_arrow_down
                        </span>
                        <span>sams_portfolio_ide</span>
                        <div className="green-circle"></div>
                    </div>
                    {sectionsList.map(section => (
                        <li key={section.section} className='section-item' onClick={() => scrollToSection(section.section)}>
                            <span className="material-symbols-outlined arrow-right">chevron_right</span>
                            { section.text }
                        </li>
                    ))}
                </div>
            </div>
        </div>
        
    )
}
export default SideBar