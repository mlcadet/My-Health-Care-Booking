import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/assets_frontend/logo3.png';
import profilePic from '../assets/assets_frontend/profile_pic.png';
import dropdownIcon from '../assets/assets_frontend/dropdown_icon.svg';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

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
                {token ? (
                    <div className='flex items-center gap-2 cursor-pointer group relative'>
                        <img className='w-8 rounded-full' src={profilePic} alt="Profile Pic" />
                        <img className='w-2.5' src={dropdownIcon} alt="Dropdown Icon" style={{ cursor: 'pointer' }} onClick={() => setShowMenu(!showMenu)} />

                        {showMenu && (
                            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20'>
                                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                    
                                    <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                    
                                    <p onClick={() => navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                    
                                    <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <button onClick={() => navigate('/login')} className='bg-blue-500 text-white px-4 py-2 rounded-full font-light hidden md:block'>
                        Create Account
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;




