import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/assets_frontend/logo3.png';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className='flex justify-between items-center text-ms py-4 mb-5 border-b-gray-400 border-b-2'>
            <img className='w-54 cursor-pointer' src={logo} alt="Logo" />
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                    <li className='py-1'> HOME </li>
                    <hr className='border-none outline-none h-0.5 bg-[#0D7DFF] w-3/5 m-auto hidden' />
                </NavLink>

                <NavLink to="/doctors" className={({ isActive }) => isActive ? 'active' : ''}>
                    <li className='py-1'> ALL DOCTORS </li>
                    <hr className='border-none outline-none h-0.5 bg-[#0D7DFF] w-3/5 m-auto hidden' />
                </NavLink>

                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                    <li className='py-1'> ABOUT </li>
                    <hr className='border-none outline-none h-0.5 bg-[#0D7DFF] w-3/5 m-auto hidden' />
                </NavLink>

                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                    <li className='py-1'> CONTACT </li>
                    <hr className='border-none outline-none h-0.5 bg-[#0D7DFF] w-3/5 m-auto hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-4'>
                <button onClick={() => navigate('/login')} className='bg-blue-500 text-white px-4 py-2 rounded-full font-light'>
                    Create Account
                </button>
            </div>
        </div>
    );
};

export default Navbar;




