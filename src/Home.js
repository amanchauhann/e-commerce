import './Home.css'
import TopBanner from './TopBanner.js'
import DealsBanner from './DealsBanner'
import CategoryContainer from './CategoryContainer.js'
// import HomeAndLiving from './Categories/HomeAndLiving'

function Home() {
    return (
        <div className='home'>
            <div className="padder"></div>
            <TopBanner />
            <DealsBanner />
            <CategoryContainer />
        </div>
    )
}

export default Home