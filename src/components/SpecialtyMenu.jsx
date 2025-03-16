import React from 'react';
import { specialtyData } from '../assets/assets_frontend/assets';
import { Link } from 'react-router-dom';

const SpecialtyMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='#specialty'>
      <h1 className='text-3xl font-medium'>Find by Specialty</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </p>
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {specialtyData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            to={`/doctors/${item.specialty}`}
            key={index}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 transition-all duration-300 group"
          >
            <img
              src={item.image}
              alt={item.specialty}
              className="w-16 sm:w-24 mb-2 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-2"
            />
            <p className="transition-all duration-300 group-hover:underline group-hover:text-blue-600 font-medium">
              {item.specialty}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialtyMenu;


// import React from 'react';
// import { specialtyData } from '../assets/assets_frontend/assets';
// import { Link } from 'react-router-dom';

// const SpecialtyMenu = () => {
//   return (
//     <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='#specialty'>
//       <h1 className='text-3xl font-medium' > Find by Specialty </h1>
//       <p className='sm:w-1/3 text-center text-sm' > Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free. </p>
//       <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll' >
//         {specialtyData.map((item, index) => (

//           <Link 
//             onClick={() => scrollTo(0, 0)}
//             to={`/doctors/${item.specialty}`}
//             key={index}
//             className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 transition-all duration-300 group"
//             >
            
//             <img
//             src={item.image}
//             alt={item.specialty}
//             className="w-16 sm:w-24 mb-2 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1"
//             />
//             <p className="transition-all duration-300 group-hover:underline group-hover:text-blue-600 font-medium">
//             {item.specialty}
//           </p>
//           </Link>
//         ))}
        
//       </div>
//     </div>
//   )
// }

// export default SpecialtyMenu;
