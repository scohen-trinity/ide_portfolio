import { useState } from "react"
import './Sidebar.css'
import { ChevronDown, ChevronRight, Files } from "lucide-react";

function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
}

function SideBar() {
    // hook to check if the sidebar is open
    const [isOpen, setOpen] = useState(false);

    // list of all sections in the website
    const sectionsList = [
        { section: 'home', text: 'home' },
        { section: 'about', text: 'about_me' },
        { section: 'experience', text: 'experience' },
        { section: 'projects', text: 'projects' },
        { section: 'achievements', text: 'achievements' },
        { section: 'contact', text: 'contact_me' },
    ];

    // const portfolio_ide_title = "sams_portfolio_ide"

    // function to toggle the sidebar shown/hidden
    const toggleSidebar = () => {
        setOpen(!isOpen);
    }

    return (
        <div>
            <div className="sidebar">
                <button className="open-button" onClick={toggleSidebar}><Files color="var(--white-2)" /></button>
            </div>
            <div className={`sidebar-expanded ${isOpen ? 'open' : ''}`}>
                <div className="explorer-text">EXPLORER</div>
                <div className="sidebar-content">
                    <div className="section-header">
                        <ChevronDown />
                        <span>sams_portfolio_ide</span>
                        <div className="green-circle"></div>
                    </div>
                    {sectionsList.map(section => (
                        <li key={section.section} className='section-item' onClick={() => scrollToSection(section.section)}>
                            <ChevronRight />
                            {section.text}
                        </li>
                    ))}
                </div>
            </div>
        </div>

    )
}
export default SideBar