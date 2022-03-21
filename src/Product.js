import './Product.css';

function Product({image, product, price}){
    return(
        <div className='product'>
            <div className='mainContainer'>
                <div className='upperCard'>
                    <img src={image} />
                </div>
                <div className='lowerCard'>
                    <div className='productName'>{product}</div>
                    <div className='productPrice'>{price}</div>
                    <button className='addToBasketButton'>Add to Basket</button>
                </div>
            </div>
        </div>
    )
}

export default Product