import './BannerProducts.css';

function BannerProducts() {
    return (
        <div className="bannerProducts">
            <div className="mainCard">
                <div className='topCard'>
                <img src="https://cdn.britannica.com/06/200006-131-ABB681CF/Leonardo-da-Vinci-Italian-Renaissance-Florence-Engraving-1500.jpg" /> </div>
                <div className="bottomCard">
                    <div className="title"></div>
                    <div className="discount"></div>
                </div>
            </div>
        </div>
    )
}

export default BannerProducts