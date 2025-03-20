import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/assets_frontend/logo.svg';
import profilePic from '../assets/assets_frontend/profile_pic.png';
import dropdownIcon from '../assets/assets_frontend/dropdown_icon.svg';
import menuIcon from '../assets/assets_frontend/menu_icon.svg';
import crossIcon from '../assets/assets_frontend/cross_icon.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex justify-between items-center text-base py-4 mb-5 border-b-2 border-b-gray-400 px-4 sm:px-10 relative">
      <img
        onClick={() => navigate('/')}
        className="w-48 cursor-pointer"
        src={logo}
        alt="Logo"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-5 font-medium">
        {['/', '/doctors', '/about', '/contact'].map((path, idx) => (
          <NavLink
            key={idx}
            to={path}
            className={({ isActive }) =>
              isActive
                ? 'text-blue-500 border-b-2 border-blue-500 pb-1'
                : 'hover:text-blue-500 transition'
            }
          >
            {['HOME', 'ALL DOCTORS', 'ABOUT', 'CONTACT'][idx]}
          </NavLink>
        ))}
      </ul>

      {/* Profile / Button */}
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer relative">
            <img className="w-8 rounded-full" src={profilePic} alt="Profile Pic" />
            <img
              className="w-2.5"
              src={dropdownIcon}
              alt="Dropdown Icon"
              onClick={() => setShowMenu(!showMenu)}
            />
            {showMenu && (
              <div className="absolute top-12 right-0 text-base font-medium text-gray-600 z-20">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                  <p onClick={() => { navigate('/my-profile'); setShowMenu(false); }} className="hover:text-black cursor-pointer">My Profile</p>
                  <p onClick={() => { navigate('/my-appointments'); setShowMenu(false); }} className="hover:text-black cursor-pointer">My Appointments</p>
                  <p onClick={() => setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-500 text-white px-4 py-2 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setMobileMenu(true)}
          className="w-6 md:hidden"
          src={menuIcon}
          alt="Menu Icon"
        />
      </div>

      {/* Mobile Menu Slide-in */}
      {mobileMenu && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white z-50 px-6 py-4 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <img src={logo3} alt="Logo" className="w-32" />
            <img
              onClick={() => setMobileMenu(false)}
              src={crossIcon}
              alt="Close"
              className="w-6 cursor-pointer"
            />
          </div>

          <ul className="flex flex-col items-center gap-4 font-medium text-lg">
            <NavLink to="/" onClick={() => setMobileMenu(false)}> <p className="px-4 py-2 rounded inline-block">Home</p> </NavLink>
            <NavLink to="/doctors" onClick={() => setMobileMenu(false)}> <p className="px-4 py-2 rounded inline-block">All Doctors</p> </NavLink>
            <NavLink to="/about" onClick={() => setMobileMenu(false)}> <p className="px-4 py-2 rounded inline-block">About</p> </NavLink>
            <NavLink to="/contact" onClick={() => setMobileMenu(false)}> <p className="px-4 py-2 rounded inline-block">Contact</p> </NavLink>
            {!token && (
              <button
                onClick={() => { navigate('/login'); setMobileMenu(false); }}
                className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2"
              >
                Create Account
              </button>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;




// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import logo from '../assets/assets_frontend/logo.svg';
// import profilePic from '../assets/assets_frontend/profile_pic.png';
// import dropdownIcon from '../assets/assets_frontend/dropdown_icon.svg';

// const Navbar = () => {
//     const navigate = useNavigate();
//     const [showMenu, setShowMenu] = useState(false);
//     const [token, setToken] = useState(true);

//     return (
//         <div className='flex justify-between items-center text-ms py-4 mb-5 border-b-gray-400 border-b-2'>
//             <img className='w-54 cursor-pointer' src={logo} alt="Logo" />
//             <ul className='hidden md:flex items-start gap-5 font-medium'>
//                 <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
//                     <li className='py-1'> HOME </li>
//                     <hr className='border-none outline-none h-0.5 bg-[#0D7DFF] w-3/5 m-auto hidden' />
//                 </NavLink>

//                 <NavLink to="/doctors" className={({ isActive }) => isActive ? 'active' : ''}>
//                     <li className='py-1'> ALL DOCTORS </li>
//                     <hr className='border-none outline-none h-0.5 bg-[#0D7DFF] w-3/5 m-auto hidden' />
//                 </NavLink>

//                 <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
//                     <li className='py-1'> ABOUT </li>
//                     <hr className='border-none outline-none h-0.5 bg-[#0D7DFF] w-3/5 m-auto hidden' />
//                 </NavLink>

//                 <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
//                     <li className='py-1'> CONTACT </li>
//                     <hr className='border-none outline-none h-0.5 bg-[#0D7DFF] w-3/5 m-auto hidden' />
//                 </NavLink>
//             </ul>

//             <div className='flex items-center gap-4'>
//                 {token ? (
//                     <div className='flex items-center gap-2 cursor-pointer group relative'>
//                         <img className='w-8 rounded-full' src={profilePic} alt="Profile Pic" />
//                         <img className='w-2.5' src={dropdownIcon} alt="Dropdown Icon" style={{ cursor: 'pointer' }} onClick={() => setShowMenu(!showMenu)} />

//                         {showMenu && (
//                             <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20'>
//                                 <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                    
//                                     <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                    
//                                     <p onClick={() => navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                    
//                                     <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 ) : (
//                     <button onClick={() => navigate('/login')} className='bg-blue-500 text-white px-4 py-2 rounded-full font-light hidden md:block'>
//                         Create Account
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Navbar;




