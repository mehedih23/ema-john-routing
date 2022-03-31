import './Product.css';
import React from 'react'

const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { name, img, price, seller } = product;
    return (
        <div className='border border-gray-300 h-[500px] m-4 relative'>
            <div className='p-[8px]'>
                <img src={img} alt="p" />
            </div>
            <div className='p-2'>
                <h1 className='text-2xl'>{name.length > 20 ? name.slice(0, 20) : name}...</h1>
                <p className='text-4xl my-2'>price : ${price} </p>
                <p className='text-xl'>Manufacturer : {seller} </p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='addToCart w-full border border-gray-300 absolute bottom-0 py-2 font-bold'>Add To Cart</button>
        </div>
    )
}

export default Product