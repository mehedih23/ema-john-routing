import './Home.css';
import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home-banner'>
            <div className='flex flex-col justify-center items-center text-white'>
                <h1 className=' text-4xl my-4 md:my-6 md:text-6xl'>Welcome To Ema-John</h1>
                <Link to='/shop'>
                    <button className='explore-btn tracking-[3px] border border-white py-2 px-4 bg-black bg-opacity-60 font-bold'>Explore Shop</button>
                </Link>
            </div>
        </div>
    )
}

export default Home