import React from 'react';
import { useNavigate } from 'react-router-dom';
import groupProfiles from '../assets/assets_frontend/group_profiles.png';
import arrowIcon from '../assets/assets_frontend/arrow_icon.svg';
import headerImg from '../assets/assets_frontend/header_img.png';

const Header = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{ backgroundColor: '#5f6fff' }}
      className="w-full text-white py-10 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Book Appointment <br /> With Trusted Doctors
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-sm font-light">
            <img className="w-24" src={groupProfiles} alt="Group of doctors" />
            <p>
              Simply browse through our extensive list of trusted doctors <br />
              & schedule your appointment
            </p>
          </div>

          {/* ✅ Fixed: Navigate to /doctors */}
          <button
            onClick={() => {
              navigate('/doctors');
              window.scrollTo(0, 0); // Optional: scroll to top
            }}
            className="mt-4 inline-flex items-center text-white hover:underline hover:text-blue-100 transition-all"
          >
            Book Appointment
            <img src={arrowIcon} alt="Arrow icon" className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2">
          <img
            className="w-full h-auto max-h-[400px] rounded-lg object-cover"
            src={headerImg}
            alt="Doctor with patient"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;




//---DO NOT DELETE THIS CODE---//
// import React from 'react';
// import groupProfiles from '../assets/assets_frontend/group_profiles.png';
// import arrowIcon from '../assets/assets_frontend/arrow_icon.svg';
// import headerImg from '../assets/assets_frontend/header_img.png';

// const Header = () => {
//   return (
//     <section
//       style={{ backgroundColor: '#5f6fff' }}
//       className="w-full text-white px-6 md:px-10 lg:px-20 py-10 md:py-20"
//     >
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
//         {/* Left Side */}
//         <div className="md:w-1/2 flex flex-col gap-6">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
//             Book Appointment <br /> With Trusted Doctors
//           </h1>

//           <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-sm font-light">
//             <img className="w-24" src={groupProfiles} alt="Group of doctors" />
//             <p>
//               Simply browse through our extensive list of trusted doctors <br />
//               & schedule your appointment
//             </p>
//           </div>

//           <a
//             href="#specialty"
//             className="mt-4 inline-flex items-center hover:underline hover:text-blue-100 transition-all"
//           >
//             Book Appointment
//             <img src={arrowIcon} alt="Arrow icon" className="ml-2 w-4 h-4" />
//           </a>
//         </div>

//         {/* Right Side */}
//         <div className="md:w-1/2">
//           <img
//             className="w-full h-auto max-h-[400px] rounded-lg object-cover"
//             src={headerImg}
//             alt="Doctor with patient"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Header;