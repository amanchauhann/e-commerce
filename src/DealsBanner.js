import BannerProducts from './BannerProduct'
import './DealsBanner.css'


function DealsBanner(){
    return(
        <div>
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

export default DealsBanner