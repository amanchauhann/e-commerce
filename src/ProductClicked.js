import './ProductClicked.css'
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import { useState } from 'react';

function ProductClicked(){
    const [state, setState] = useState();
    const [count, setCount] = useState(0);

    const decrement=()=>{
        setCount(count-1);
    }

    const increment=()=>{
        setCount(count+1);
    }
    

    return(
        <>
        <div className='productClicked'>
            <div className='leftSide'>
                <img src='https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' />
            </div>
            <div className='rightSide'>
                <div className='upperPart'>
                <div className='titleContainer'>
                    <div className='productTitle'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</div>
                    <div className='productDescription'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</div>
                </div>
                <div className='ratingBox'>
                    <div className='ratings'>4<StarOutlineRoundedIcon className='star'/> </div>
                    <div className='userNumber'>| 12K ratings</div>
                </div>
                </div>
                <div className='line'/>
                <div className='lowerPart'>
                <div className='priceContainer'>
                    <div className='price'>₹ 322</div>
                    <div className='priceDetails'>inclusive of all taxes</div>
                </div>
                <div className='selectSize'>
                    <h4>Select Size <span>{state}</span></h4>
                    <div className='sizes'>
                        <button className='size' onClick={() => setState('32')} value={32}>32</button>
                        <button className='size' onClick={() => setState('34')} value={34}>34</button>
                        <button className='size' onClick={() => setState('36')} value={36}>36</button>
                        <button className='size' onClick={() => setState('38')} value={38}>38</button>
                    </div>
                </div>
                <div className='quantity'>
                    <button onClick={decrement} className='decrement'>-</button>
                    <div className='valueHolder'>{count}</div>
                    <button onClick={increment} className='increment'>+</button>
                </div>
                <button className='buyNow'>Buy Now</button>
            </div>
            </div>
        </div>
        </>
    )
}

export default ProductClicked