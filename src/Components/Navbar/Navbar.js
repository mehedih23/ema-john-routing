import './Navbar.css';
import Logo from '../../images/Logo.svg';
import React from 'react'
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <nav className='flex flex-col justify-center items-center md:flex-row md:justify-between md:px-16 lg:px-32 bg-slate-800 py-4'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <ul className='flex justify-center items-center py-2  md:font-bold text-white'>
                <li><CustomLink className='mx-1 md:mx-2 lg:mx-8' to='/'>Home</CustomLink></li>
                <li><CustomLink className='mx-1 md:mx-2 lg:mx-8' to='/shop'>Shop</CustomLink></li>
                <li><CustomLink className='mx-1 md:mx-2 lg:mx-8' to='/orders'>Orders</CustomLink></li>
                <li><CustomLink className='mx-1 md:mx-2 lg:mx-8' to='/inventory'>Inventory</CustomLink></li>
                <li><CustomLink className='mx-1 md:mx-2 lg:mx-8' to='/contact'>Contact</CustomLink></li>
                <li><CustomLink className='mx-1 md:mx-2 lg:mx-8' to='/about'>About</CustomLink></li>
            </ul>

        </nav>
    )
}

export default Navbar