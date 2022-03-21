import './Home.css'
import TopBanner from './TopBanner.js'
import DealsBanner from './DealsBanner'
import Men from './Men.js'

function Home() {
    return (
        <div className='home'>
            <div className="padder"></div>
            <TopBanner />
            <DealsBanner />
            <Men />
            
        </div>
    )
}

export default Home