import { useEffect, useState } from 'react';
import './Product.css';

function Women({image, productname, price}){
    const [fake, setFake]= useState([]);
    useEffect(()=>{
        fakestore();
    },[])

    const fakestore=async()=>{
        const response = await fetch("https://fakestoreapi.com/products/category/jewelery?limit=5");
        const jsonData = await response.json();
        setFake(jsonData);
    }

    return(
        <>
        <div className='product'>
            {fake.map((values)=>{
                return(
                    <>
                    <div className='mainContainer'>
                <div className='upperCard'>
                    <img src={values.image} />
                </div>
                <div className='lowerCard'>
                    <div className='productName'>{values.title}</div>
                    <div className='productPrice'>{values.price}</div>
                    <button className='addToBasketButton'>Add to Basket</button>
                </div>
            </div>
                    </>
                )
            })}
            
        </div>
        </>
    )
}

export default Women