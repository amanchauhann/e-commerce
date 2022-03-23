import './Home.css'
import TopBanner from './TopBanner.js'
import DealsBanner from './DealsBanner'
import CategoryContainer from './CategoryContainer.js'
// import HomeAndLiving from './Categories/HomeAndLiving'
import Footer from './Footer.js';
// import Product from './Product';

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




{/* <div className='mainContainer'>
<div className='upperCard'>
<img src={image} />
</div>
<div className='lowerCard'>
<div className='productName'>{productname}</div>
<div className='productPrice'>{price}</div>
<button className='addToBasketButton'>Add to Basket</button>
</div>
</div> */}