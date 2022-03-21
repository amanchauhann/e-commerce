import './Home.css'
import BannerProducts from './BannerProduct.js'

function Home() {
    return (
        <div className='home'>
            <div className="padder"></div>
            <div className="imgContainer">
            <img className='main-image' src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/18/f2c675ae-e1c7-4657-b987-b809f0f654121647579910620-Weekend-sale_DK.jpg" />
            <img className='bannerImage' src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/19/f52556ea-783c-4eab-8bb9-a3b909b634451647665260055-DK-b1g27pm.jpg' />
            </div>
            <h4 className='bannerTitle'>Steal Deals</h4>
            <div className='bannerProductsContainer'>
                <BannerProducts
                    productImage={"https://images.unsplash.com/photo-1450297756549-a553121ddff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
                    title={"Stylish Trends"}
                    discount={"Upto 60% off"}
                />
                <BannerProducts
                    productImage={"https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJlc3N8ZW58MHx8MHx8&w=1000&q=80"}
                    title={"Women Dresses"}
                    discount={"Under ₹699"}
                />
                <BannerProducts
                    productImage={"https://images.unsplash.com/photo-1579171931975-97962e46be2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
                    title={"Men's watches"}
                    discount={"Buy 2 @ ₹1299"}
                />
                <BannerProducts
                    productImage={"https://images.unsplash.com/photo-1573100925118-870b8efc799d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
                    title={"Flats & Heels"}
                    discount={"Min. 60% off"}
                />
                <BannerProducts
                    productImage={"https://images.unsplash.com/photo-1633077705115-6d2cb163950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
                    title={"Private Section"}
                    discount={"Flat 35% off"}
                />
                <BannerProducts
                    productImage={"https://images.unsplash.com/photo-1576967289502-8f67f10e3cf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"}
                    title={"Festive season"}
                    discount={"Sale of the year"}
                />
            </div>
        </div>
    )
}

export default Home