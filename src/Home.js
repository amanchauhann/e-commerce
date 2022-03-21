import './Home.css'
import TopBanner from './TopBanner.js'
import DealsBanner from './DealsBanner'

function Home() {
    return (
        <div className='home'>
            <div className="padder"></div>
            <TopBanner />
            <DealsBanner />
            
        </div>
    )
}

export default Home