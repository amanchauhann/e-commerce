import './Home.css'
import Hero from './Hero.js'
import DealsBanner from './DealsBanner'

function Home() {
    return (
        <div className='home'>
            <div className="padder"></div>
            <Hero />
            <DealsBanner />
            
        </div>
    )
}

export default Home