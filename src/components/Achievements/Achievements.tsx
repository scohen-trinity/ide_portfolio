import { useState } from 'react';
import './Achievements.css'

interface Achievement {
    id: number,
    title: string,
    link: string,
    image: string
}

function Achievements() {

    const achievements_list: Achievement[] = [
        { id: 0, title: 'AWS Certified Cloud Practitioner', link: 'https://www.credly.com/badges/40881b77-1b06-4bec-bb5f-100620e4887e', image: 'ccp.png' },
        { id: 1, title: 'AWS Certified Developer Associate', link: 'https://www.credly.com/badges/85624f3f-9a41-41c4-877a-8680f66d13aa', image: 'devass.png' },
        { id: 2, title: 'RowdyHacks X Hackathon First Place', link: 'https://devpost.com/software/rowdypay', image: 'rowdyhacks.png' },
    ];

    const [currentAchievement, setCurrentAchievement] = useState(achievements_list[0])

    // move achievement function that will move forward if next is true and move backward if false
    const moveAchievement = (next: boolean) => {
        const nextId = currentAchievement.id + (next ? 1 : -1);
        setCurrentAchievement((nextId > achievements_list.length - 1) ? achievements_list[0] : (nextId < 0) ?
            achievements_list[achievements_list.length - 1] :
            achievements_list[nextId]
        )
    };

    return (
        <section id='achievements'>
            <div className="achievements-container">
                <h5>My Achievements</h5>
                <h1 className='silver-text'>Here are some things I'm proud of</h1>
                <div className='achievement'>
                    <a href={currentAchievement.link}><img src={currentAchievement.image} alt='something went wrong'></img></a>
                </div>
                <div className='scroll-container'>
                    <span onClick={() => moveAchievement(false)} className='material-symbols-outlined'>chevron_left</span>
                    <span>{currentAchievement.id + 1} / { achievements_list.length }</span>
                    <span onClick={() => moveAchievement(true)} className='material-symbols-outlined'>chevron_right</span>
                </div>
            </div>
        </section>
    );
}
export default Achievements
