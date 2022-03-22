import './CategoryContainer.css'
import Men from './Men.js'
import Women from './Women.js'
// import HomeAndLiving from './LivingProduct'
import LivingProduct from './LivingProduct'
import { useEffect, useState } from 'react'

function CategoryContainer(){
    // fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(data=>console.log(data))


    return (
        <div className='CategoryContainer'>
            {/* -----------Men---------------- */}
            <h4 className='categoryTitle'>Men</h4>
            <div className='productContainer'>
                <Men />
                {/* <Product
                    image={"https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300881565-OLIVE_2_1024x1024.jpg?v=1644513173"}
                    productname={"Product"}
                    price={"Price"}
                /> */}
                {/* <Product /> */}
                {/* <Product
                    image={"https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300881565-OLIVE_2_1024x1024.jpg?v=1644513173"}
                    productname={"Product"}
                    price={"Price"}
                />
                <Product
                    image={"https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300881565-OLIVE_2_1024x1024.jpg?v=1644513173"}
                    productname={"Product"}
                    price={"Price"}
                />
                <Product
                    image={"https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300881565-OLIVE_2_1024x1024.jpg?v=1644513173"}
                    productname={"Product"}
                    price={"Price"}
                />
                <Product
                    image={"https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300881565-OLIVE_2_1024x1024.jpg?v=1644513173"}
                    productname={"Product"}
                    price={"Price"}
                />
                <Product
                    image={"https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300881565-OLIVE_2_1024x1024.jpg?v=1644513173"}
                    productname={"Product"}
                    price={"Price"}
                /> */}
            </div>
            {/* ---------------------------------------------------------------------------------------------------------------------- */}
            {/* ------ WOMEN ---- */}
            <h4 className='categoryTitle'>Women</h4>
            <div className='productContainer'>
                <Women />
                {/* <Product
                    image={"https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300881565-OLIVE_2_1024x1024.jpg?v=1644513173"}
                    productname={"Product"}
                    price={"Price"}
                />
                <Product
                    image={"https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300881565-OLIVE_2_1024x1024.jpg?v=1644513173"}
                    productname={"Product"}
                    price={"Price"}
                />
                <Product
                    image={"https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300881565-OLIVE_2_1024x1024.jpg?v=1644513173"}
                    productname={"Product"}
                    price={"Price"}
                />
                <Product
                    image={"https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300881565-OLIVE_2_1024x1024.jpg?v=1644513173"}
                    productname={"Product"}
                    price={"Price"}
                />
                <Product
                    image={"https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300881565-OLIVE_2_1024x1024.jpg?v=1644513173"}
                    productname={"Product"}
                    price={"Price"}
                />
                <Product
                    image={"https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300881565-OLIVE_2_1024x1024.jpg?v=1644513173"}
                    productname={"Product"}
                    price={"Price"}
                /> */}
            </div>
            {/* ------------------------------------------------------------------------------------- */}
            {/* ---------Living-------------- */}
            <h4 className='categoryTitle'>Home&Living</h4>
            <div className='livingContainer'>
                <div className='livingFirst'>
                <LivingProduct
                    image={"https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                    name={"NAME"}
                    price={"price"}
                />
                </div>
                <div className='livingSecond'>
                <LivingProduct
                    image={"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
                    name={"NAME"}
                    price={"price"}
                />
                </div>
                <LivingProduct
                    image={"https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
                    name={"NAME"}
                    price={"price"}
                />
                <LivingProduct
                    image={"https://images.unsplash.com/photo-1615800001964-5afd0ae8e49a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
                    name={"NAME"}
                    price={"price"}
                />
                <LivingProduct
                    image={"https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
                    name={"NAME"}
                    price={"price"}
                />
                <LivingProduct
                    image={"https://images.unsplash.com/photo-1506812925688-822b4a73db22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
                    name={"NAME"}
                    price={"price"}
                />
            </div>
        </div>
    )
}

export default CategoryContainer