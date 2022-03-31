import './Orders.css';
import React, { useState } from 'react'
import useProducts from '../../Hooks/useProducts/useProducts';
import useCart from '../../Hooks/useCart/useCart';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <h1>Preview Orders</h1>
            <div>
                <div>
                    {
                        cart.map(product => <div key={product.id}>
                            <h1>{product.name}</h1>
                        </div>)
                    }
                </div>
                <div>
                    <Cart cart={cart}>
                        <Link to='/inventory'>
                            <button>Place Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    )
}

export default Orders