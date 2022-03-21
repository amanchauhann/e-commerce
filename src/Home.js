import './Home.css'
import BannerProducts from './BannerProducts.js'

function Home() {
    return (
        <div className='home'>
            <div className="padder"></div>
            <div className="imgContainer">
            <img className='main-image' src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/18/f2c675ae-e1c7-4657-b987-b809f0f654121647579910620-Weekend-sale_DK.jpg" />
            <img className='bannerImage' src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/19/f52556ea-783c-4eab-8bb9-a3b909b634451647665260055-DK-b1g27pm.jpg' />
            </div>
            <div className='bannerProductsContainer'>
                <BannerProducts />
                <BannerProducts />
                <BannerProducts />
                <BannerProducts />
                <BannerProducts />
                <BannerProducts />
            </div>
        </div>
    )
}

export default Home