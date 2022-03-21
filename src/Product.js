import './Product.css';

function Product(){
    return(
        <div className='product'>
            <div className='mainContainer'>
                <div className='upperCard'>
                    <img src='https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300881565-OLIVE_2_1024x1024.jpg?v=1644513173' />
                </div>
                <div className='lowerCard'>
                    <div className='productName'>PRODUCT</div>
                    <div className='productPrice'>PRICE</div>
                    <div className='button'>BUTTON</div>
                </div>
            </div>
        </div>
    )
}

export default Product