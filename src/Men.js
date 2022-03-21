import './Men.css'
import Product from './Product.js'

function Men(){
    return (
        <div className='Men'>
            <h4 className='menTitle'>Men</h4>
            <div className='productContainer'>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default Men