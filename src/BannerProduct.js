import './BannerProduct.css';

function BannerProducts({productImage, title, discount}) {
    return (
        <div className="bannerProducts">
            <div className='mainCard'>
                <div className='topCard'>
                    <img src={productImage} />
                </div>
                <div className='bottomCard'>
                    <div className='title'>{title}</div>
                    <div className='discount'>{discount}</div>
                </div>

            </div>
        </div>
    )
}

export default BannerProducts