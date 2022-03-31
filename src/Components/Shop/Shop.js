import './Shop.css';
import React from 'react'
import useProducts from '../../Hooks/useProducts/useProducts';
import Product from '../Product/Product';
import useCart from '../../Hooks/useCart/useCart';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);


    const handleAddToCart = (product) => {
        const newProducts = []
        const exists = cart.find(item => item.id === product.id)
        if (!exists) {
            product.quantity = 1;
            newProducts.push(product);
            setCart([...cart, ...newProducts]);
        }
        else {
            const rest = cart.filter(item => item.id !== product.id);
            product.quantity = exists.quantity + 1;
            newProducts.push(...rest, product);
            setCart([...newProducts]);
        }
        addToDb(product.id);
    }

    return (
        <div>
            <div className='flex flex-col justify-center items-center my-2'>
                <h1 className='text-4xl md:text-6xl my-1'>Welcome To Our Shop</h1>
                <p className='text-2xl md:text-3xl my-1'>Choose Your Best</p>
            </div>
            <div className='grid gap-6 md:grid-cols-4'>
                <div className='order-2 md:order-1 md:col-span-3 p-4'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-4'>
                        {
                            products.map(product => <Product
                                handleAddToCart={handleAddToCart}
                                key={product.id}
                                product={product}
                            ></Product>)
                        }
                    </div>
                </div>
                <div className='summary order-1 md:order-2 md:col-span-1 p-4 bg-orange-300'>
                    <Cart cart={cart}>
                        <Link to='/orders'>
                            <button className='preview-btn'>
                                Preview Orders
                                <FontAwesomeIcon style={{ marginLeft: '5px' }} icon={faArrowRight} />
                            </button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    )
}

export default Shop