import './Achievements.css'

function Achievements() {
    const achievements_list = [
        {title: 'AWS Certified Cloud Practitioner', link: 'https://www.credly.com/badges/40881b77-1b06-4bec-bb5f-100620e4887e', img: 'ccp.png'},
        {title: 'AWS Certified Developer Associate', link: 'https://www.credly.com/badges/85624f3f-9a41-41c4-877a-8680f66d13aa', img: 'devass.png'},
        {title: 'RowdyHacks X Hackathon First Place', link: 'https://devpost.com/software/rowdypay', img: 'rowdyhacks.png'},
    ];

    return (
        <section id='achievements'>
          <div className="achievements-container">
            <h5>My Achievements</h5>
            <h1 className='silver-text'>Here are some things I'm proud of</h1>
            <div className='achievements-list'>
                {achievements_list.map(achievement => (
                    <div className='achievement-item' key={achievement.link}>
                        <h3>
                            <a href={achievement.link}>{achievement.title}</a>
                        </h3>
                        <img src = {achievement.img}></img>
                    </div>
                ))}
            </div>
          </div>
        </section>
    );
}
export default Achievements
