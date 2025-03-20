import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { specialty } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);

  useEffect(() => {
    if (specialty) {
      setFilterDoc(doctors.filter((doc) => doc.specialty === specialty));
    } else {
      setFilterDoc(doctors);
    }
  }, [specialty, doctors]);

  const specialties = [
    'General physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist',
  ];

  return (
    <div className="w-full px-4 sm:px-10 py-10 text-gray-900">
      <h1 className="text-3xl font-semibold mb-8 text-center sm:text-left">
        Browse Doctors
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filter */}
        <div className="md:w-1/4 w-full border border-gray-200 rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-medium mb-4">Filter by Specialty</h2>
          <ul className="flex flex-col gap-2">
            {specialties.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => navigate(`/doctors/${item}`)}
                  className={`w-full text-left px-4 py-2 rounded-md ${
                    specialty === item
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => navigate(`/doctors`)}
                className={`w-full text-left px-4 py-2 rounded-md ${
                  !specialty
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                }`}
              >
                All Doctors
              </button>
            </li>
          </ul>
        </div>

        {/* Doctor Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterDoc.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              No doctors found for this specialty.
            </p>
          ) : (
            filterDoc.map((item) => (
              <div
                key={item._id}
                onClick={() => navigate(`/appointment/${item._id}`)}
                className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 bg-white shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-72 sm:h-80 md:h-96 object-contain bg-blue-50"
                />
                <div className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-sm text-green-500 mb-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <p>Available</p>
                  </div>
                  <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                  <p className="text-gray-600 text-sm">{item.specialty}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;




// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';

// const Doctors = () => {
//   const { specialty } = useParams();
//   const navigate = useNavigate();
//   const { doctors } = useContext(AppContext);

//   const [filterDoc, setFilterDoc] = useState([]);

//   useEffect(() => {
//     if (specialty) {
//       setFilterDoc(doctors.filter((doc) => doc.specialty === specialty));
//     } else {
//       setFilterDoc(doctors);
//     }
//   }, [specialty, doctors]);

//   const specialties = [
//     'General physician',
//     'Gynecologist',
//     'Dermatologist',
//     'Pediatricians',
//     'Neurologist',
//     'Gastroenterologist',
//   ];

//   return (
//     <div className="w-full px-4 sm:px-10 py-10 text-gray-900">
//       <h1 className="text-3xl font-semibold mb-8 text-center sm:text-left">
//         Browse Doctors
//       </h1>

//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Sidebar Filter */}
//         <div className="md:w-1/4 w-full border border-gray-200 rounded-lg p-4 shadow-sm">
//           <h2 className="text-lg font-medium mb-4">Filter by Specialty</h2>
//           <ul className="flex flex-col gap-2">
//             {specialties.map((item, index) => (
//               <li key={index}>
                
//                 <button
//                   onClick={() => navigate(`/doctors/${item}`)}
//                   className={`w-full text-left px-4 py-2 rounded-md ${
//                     specialty === item
//                       ? 'bg-blue-500 text-white'
//                       : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
//                   }`}
//                 >
//                   {item}
//                 </button>
//               </li>
//             ))}
//             <li>
//               <button
//                 onClick={() => navigate(`/doctors`)}
//                 className={`w-full text-left px-4 py-2 rounded-md ${
//                   !specialty
//                     ? 'bg-blue-500 text-white'
//                     : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
//                 }`}
//               >
//                 All Doctors
//               </button>
//             </li>
//           </ul>
//         </div>

//         {/* Doctor Cards */}
//         <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filterDoc.length === 0 ? (
//             <p className="col-span-full text-center text-gray-500">
//               No doctors found for this specialty.
//             </p>
//           ) : (
//             filterDoc.map((item) => (
//               <div
//                 key={item._id}
//                 onClick={() => navigate(`/appointment/${item._id}`)}
//                 className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 bg-white shadow"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-72 sm:h-80 md:h-96 object-contain bg-blue-50"
//                 />
//                 <div className="p-4 text-center">
//                   <div className="flex items-center justify-center gap-2 text-sm text-green-500 mb-1">
//                     <div className="w-2 h-2 bg-green-500 rounded-full" />
//                     <p>Available</p>
//                   </div>
//                   <p className="text-gray-900 text-lg font-medium">{item.name}</p>
//                   <p className="text-gray-600 text-sm">{item.specialty}</p>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Doctors;




///------DO NOT DELETE THIS CODE------////  
// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';

// const Doctors = () => {
//   const { specialty } = useParams();
//   const navigate = useNavigate();
//   const { doctors } = useContext(AppContext);

//   const [filterDoc, setFilterDoc] = useState([]);

//   useEffect(() => {
//     if (specialty) {
//       setFilterDoc(doctors.filter((doc) => doc.specialty === specialty));
//     } else {
//       setFilterDoc(doctors);
//     }
//   }, [specialty, doctors]);

//   const specialties = [
//     'General physician',
//     'Gynecologist',
//     'Dermatologist',
//     'Pediatricians',
//     'Neurologist',
//     'Gastroenterologist',
//   ];

//   return (
//     <div className="w-full px-4 sm:px-10 py-10 text-gray-900">
//       <h1 className="text-3xl font-semibold text-center mb-6">Browse Doctors by Specialty</h1>

//       {/* Specialty Filter Pills */}
//       <div className="flex flex-wrap justify-center gap-3 mb-10">
//         {specialties.map((item, idx) => (
//           <button
//             key={idx}
//             onClick={() => navigate(`/doctors/${item}`)}
//             className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200 transition-all text-sm"
//           >
//             {item}
//           </button>
//         ))}
//       </div>

//       {/* Doctors Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filterDoc.length === 0 ? (
//           <p className="col-span-full text-center text-gray-500">No doctors found for this specialty.</p>
//         ) : (
//           filterDoc.map((item) => (
//             <div
//               key={item._id}
//               onClick={() => navigate(`/appointment/${item._id}`)}
//               className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 bg-white"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-72 sm:h-80 md:h-96 lg:h-[28rem] object-contain bg-blue-50"
//               />
//               <div className="p-4 text-center">
//                 <div className="flex items-center justify-center gap-2 text-sm text-green-500 mb-1">
//                   <div className="w-2 h-2 bg-green-500 rounded-full" />
//                   <p>Available</p>
//                 </div>
//                 <p className="text-gray-900 text-lg font-medium">{item.name}</p>
//                 <p className="text-gray-600 text-sm">{item.specialty}</p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Doctors;




