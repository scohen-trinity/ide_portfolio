import './Projects.css'

function Projects() {
  const projects_list = [
    { link: 'https://github.com/scohen-trinity/ide_portfolio', img: 'portfolio.png', alt: 'portfolio link'},
    { link: 'https://github.com/scohen-trinity/rcloc', img: 'rust.bmp', alt: 'rcloc link'},
    { link: 'https://github.com/scohen-trinity/blist', img: 'bucket-list.bmp', alt: 'blist link'},
    { link: 'https://github.com/scohen-trinity/RowdyPay-RowdyHacks2024', img: 'rowdypay.jpg', alt: 'rowdypay link'},
  ];

  return (
      <section id='projects'>
        <div className='App-header'>
          <h5 className='Rusty-text'>Projects</h5>
          <h1 className='silver-text'>Check out what I've made!</h1>
          <div className='projects-container'>
            {projects_list.map(project => (
              <div className='project-item'>
                <a href = {project.link}>
                <img alt = {project.alt} src = {project.img}></img>
                </a>
              </div>  
            ))}
          </div>
        </div>
      </section>
  );
}
export default Projects;
