import React from 'react';
import appointmentImg from '../assets/assets_frontend/appointment_img.png';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{ backgroundColor: '#5f6fff' }}
      className="w-full flex flex-col md:flex-row items-center justify-between text-white rounded-lg p-6 sm:p-10 md:p-14 lg:p-12 my-20 md:mx-10 min-h-[200px]"
    >
      {/* LEFT SIDE */}
      <div className="flex-1 text-center md:text-left py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold">
          Book Appointment
        </p>
        <p className="mt-4 text-sm sm:text-base">
          With 100+ Trusted Doctors
        </p>
        <button
          onClick={() => {
            navigate('/login');
            scrollTo(0, 0);
          }}
          className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:bg-gray-100 transition-all"
        >
          Create Account
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="mt-8 md:mt-0 md:w-1/2 lg:w-[370px] flex justify-center">
        <img
          src={appointmentImg}
          alt="Appointment"
          className="w-full max-w-md object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;



// import React from 'react';
// import appointmentImg from '../assets/assets_frontend/appointment_img.png';
// import { useNavigate } from 'react-router-dom';

// const Banner = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="w-full flex flex-col md:flex-row items-center justify-between bg-primary text-white rounded-lg p-6 sm:p-10 md:p-14 lg:p-12 my-20 md:mx-10 min-h-[200px]">
//       {/* LEFT SIDE */}
//       <div className="flex-1 text-center md:text-left py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
//         <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold">
//           Book Appointment
//         </p>
//         <p className="mt-4 text-sm sm:text-base">
//           With 100+ Trusted Doctors
//         </p>
//         <button
//           onClick={() => {
//             navigate('/login');
//             scrollTo(0, 0);
//           }}
//           className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:bg-gray-100 transition-all"
//         >
//           Create Account
//         </button>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="mt-8 md:mt-0 md:w-1/2 lg:w-[370px] flex justify-center">
//         <img
//           src={appointmentImg}
//           alt="Appointment"
//           className="w-full max-w-md object-contain"
//         />
//       </div>
//     </div>
//   );
// };

// export default Banner;