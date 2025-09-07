import ProjectContainer from './Project/project';
import './Projects.css'

export interface Project {
  link: string,
  img: string,
  alt: string,
  icon: string,
  description: string,
}

function Projects() {
  const projects_list: Project[] = [
    { link: 'https://github.com/scohen-trinity/ide_portfolio', img: 'portfolio.png', alt: 'portfolio link', icon: 'business_center', description: 'My portfolio! Modeled after a code editor, I designed this portfolio to be easy to use, fun for other developers, and totally available on my github.'},
    { link: 'https://github.com/scohen-trinity/rcloc', img: 'rust.bmp', alt: 'rcloc link', icon: 'speed', description: 'My first project in Rust, this is a line counter designed to intelligently count the number of lines in a project.'},
    { link: 'https://github.com/scohen-trinity/blist', img: 'bucket-list.bmp', alt: 'blist link', icon: 'bucket_check', description: 'Blist is a work in progress. This website is designed to source hobbies for users and allow them to discover new ways to spend their free time.'},
    { link: 'https://github.com/scohen-trinity/RowdyHacks2024-RowdyPay', img: 'rowdypay.jpg', alt: 'rowdypay link', icon: 'receipt_long', description: 'My current obsession is Divvy. Divvy is designed to help anyone easily split the bill between friends. A multiplatform mobile app to make group payments simpler, Divvy is my most complex project to date and the one that I am most proud of. Try it out on the app store today!'},
  ];

  return (
      <section id='projects'>
        <div className='App-header'>
          <h5 className='Rusty-text'>Projects</h5>
          <h1 className='silver-text'>Here's some stuff I've made!</h1>
          {projects_list.map((project, i) => (
            <ProjectContainer project={project} isLeft={i % 2 == 0} key={project.link}/>
          ))}
        </div>
      </section>
  );
}
export default Projects;
