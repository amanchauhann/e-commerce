import './LivingProduct.css'

function LivingProduct({image, name, price}){
    return(
        <div className='LivingProduct'>
            <div className='livingCard'>
                <div className='livingUpperCard'>
                    <img src={image} />
                </div>
                <div className='livingLowerCard'>
                    <div className='name'>{name}</div>
                    <div className='livingPrice'>{price}</div>
                    <button className='addToBasketButton'>Add to Basket</button>
                </div>
            </div>
        </div>
    )
}

export default LivingProduct