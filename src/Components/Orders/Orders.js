import './Orders.css';
import React, { useState } from 'react'
import useProducts from '../../Hooks/useProducts/useProducts';
import useCart from '../../Hooks/useCart/useCart';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import OrderedItem from '../OrderedItem/OrderedItem';
import { removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveItem = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart([...newCart]);
        removeFromDb(id);
    }
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl lg:text-6xl text-center my-4'>Preview Orders</h1>
            <div className='flex justify-center flex-col md:flex-row md:items-center md:justify-around'>
                <div className='p-4'>
                    <h1 className='text-4xl lg:text-6xl my-4'>Ordered Item</h1>
                    {
                        cart.map(product => <OrderedItem
                            handleRemoveItem={handleRemoveItem}
                            key={product.id}
                            product={product}
                        ></OrderedItem>)
                    }
                </div>
                <div className='p-4'>
                    <Cart cart={cart}>
                        <Link to='/inventory'>
                            <button className='placeOrder-btn'>
                                Place Order
                                <FontAwesomeIcon style={{ marginLeft: '8px' }} icon={faCreditCard} />
                            </button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    )
}

export default Orders