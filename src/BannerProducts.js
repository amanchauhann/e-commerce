import './BannerProducts.css';

function BannerProducts() {
    return (
        <div className="bannerProducts">
            <div className='mainCard'>
                <div className='topCard'>
                    <img src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15743592/2021/10/6/90169c19-94c1-47d4-a6f1-2a7b1f346fcd1633482602050HIGHLANDERMenWhiteSlimFitFloralOpaquePrintedCasualShirt1.jpg' />
                </div>
                <div className='bottomCard'>
                    <div className='title'>Trendy Styles</div>
                    <div className='discount'>Upto 60% off</div>
                </div>

            </div>
        </div>
    )
}

export default BannerProducts