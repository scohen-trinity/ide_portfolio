import ContactBar from '../Shared/ContactBar/ContactBar'
import TypingAnimation from '../Shared/TypingAnimation/TypingAnimation'
import './Home.css'

function Home() {
    return(
        <section id='home'>
          <div className='home-container'>
            <div className='name-header'>
              <span>[</span>
              <TypingAnimation text="Sam Cohen" delay={150} />
              <span>]</span>
            </div>
            <div className='titles-header'>
              <span>&lt;</span>
              <TypingAnimation text='Software Engineer | Cloud Developer Associate | Data Analyst' delay={35} />
              <span>&gt;</span>
            </div>
            <ContactBar />
          </div>
        </section>
    )
}
export default Home