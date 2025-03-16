import React from 'react';
import { doctors } from '../assets/assets_frontend/assets';

const TopDoctors = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-900 md:mx-10">
      {/* Header */}
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Grid layout for doctor cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-5 w-full px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 bg-white"
          >
            {/* Image with responsive height and no crop */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-contain bg-blue-50"
            />

            {/* Card content */}
            <div className="p-4 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-green-500 mb-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.specialty}</p>
            </div>
          </div>
        ))}
      </div>

      {/* "More" button */}
      <button className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 hover:bg-blue-100 transition-all">
        more
      </button>
    </div>
  );
};

export default TopDoctors;


// import React from 'react'
// import { doctors } from '../assets/assets_frontend/assets';

// const TopDoctors = () => {
//   return (
//     <div className='flex flex-col items-center gap-4 py-16 text-gray-90 md:mx-10'> 
//       <h1 className='text-3xl font-medium' >Top Doctors to Book</h1>
//       <p className='sm:w-1/3 text-center text-sm' >Simply browse through our extensive list of trusted doctors.</p>
//         <div className='w-full grid grid-cols-auto gap pt-5 gap-y-6 px-3 sm:px-0' >
//         {doctors.slice(0,10).map((item, index) => (

//           <div className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
//             <img className='bg-blue-50' src={item.image} alt="" />
//             <div className='p-4'>
//                 <div className='flex items-center gap-2 text-sm text-center text-green-500'>
//                     <p className='w-2 h-2 bg-green-500 rounded-full' ></p><p>Available</p>
//                 </div>
//                 <p className='text-gray-900 text-lg font-medium' >{item.name}</p>
//                 <p className='text-gray-600 text-sm' >{item.specialty}</p>
//             </div>
//           </div>
//         ))}
//         </div>
//         <button className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10' >more</button>
//     </div>
//   )
// }

// export default TopDoctors;
