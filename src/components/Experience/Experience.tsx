import './Experience.css'

function Experience() {
    const experienceList = [
      { title: 'IoT Full Stack Software Engineer Intern', tenure: 'May 2024 - Present', img: `econtrols.jpg`, company: 'Econtrols', description: 'Worked as a full stack developer on the IoT Software Team at Econtrols. I worked with Angular, Typescript, HTML, C#, and Azure Cloud.'},
      { title: 'ACM Tutor', tenure: 'August 2023 - April 2024', img: `acm.png`, company: 'Trinity University ACM', description: 'Worked as an ACM Tutor, helping students better learn and understand computer science. I helped students with Python, Java, Haskell, and Scala related issues.'},
      { title: 'Full Stack Software Engineer Intern', tenure: 'June 2023 - August 2023', img: `promptvideo.jpg`, company: 'PromptVideo', description: 'Worked as a full stack developer at PromptVideo, a B2B video startup company. I worked with a numbe of technologies including AWS, Python, Typescript, and HTML. I also earned two AWS certifications while at this internship.'},
      { title: 'Technical Support Ananlyst I', tenure: 'February 2022 - Present', img: `trinity.jpg`, company: 'Trinity University', description: 'Worked as a Technical Support Analyst for Trinity University\'s IT department specializing in Audiovisual Equipment.'},
    ];
    return (
        <section id='experience'>
          <div className='App-header'>
            <h5 className='Rusty-text'>
              Experience
            </h5>
            <h1 className='silver-text'>Here's where I have worked</h1>
            <div className='experience-list'>
              {experienceList.map(job => (
                <div className='job-block' key={ job.title + job.company }>
                  <div className='job-title'>
                    <h3>{ job.title }</h3>
                    <p>{ job.tenure }</p>
                  </div>
                  <div className='job-icon'>
                    <img src={ job.img } alt='img' className='job-image'></img>
                  </div>
                  <div className='job-description'>
                    <h3>{ job.company }</h3>
                    <p>{ job.description }</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    );
}
export default Experience;