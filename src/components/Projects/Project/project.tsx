import { Project } from "../Projects";
import './project.css';

interface ProjectContainerProps {
    project: Project,
    isLeft: boolean,
}

// Project component for each project card
function ProjectContainer({ project, isLeft }: ProjectContainerProps) {
    return (
        <div className='project-container'>
            { isLeft &&
                <div className="project-description">
                    <div>{project.description}</div>
                    <span className="material-symbols-outlined project-icon">{project.icon}</span>
                </div>
            }
            <div className='project-item'>
                <a href={project.link}>
                    <img alt={project.alt} src={project.img}></img>
                </a>
            </div>
            { !isLeft &&
                <div className="project-description">
                    <span className="material-symbols-outlined project-icon">{project.icon}</span>
                    {project.description}
                </div>
            }
        </div>
    )
}

export default ProjectContainer;
