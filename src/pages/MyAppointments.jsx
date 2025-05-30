import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { appointments, cancelAppointment, currencySymbol } = useContext(AppContext);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <p className="pb-3 font-medium text-zinc-700 text-xl border-b">
        My Appointments
      </p>

      {appointments?.length === 0 && (
        <p className="text-sm text-gray-500 mt-6">
          You have no appointments yet.
        </p>
      )}

      <div className="mt-6">
        {appointments?.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b"
          >
            {/* Doctor Image */}
            <div>
              <img
                className="w-32 h-24 object-cover bg-indigo-50 rounded"
                src={item.docData?.image || '/default-doctor.png'}
                alt={item.docData?.name}
              />
            </div>

            {/* Appointment Details */}
            <div className="flex flex-col text-sm text-zinc-600 flex-grow">
              <p className="text-neutral-800 font-semibold">{item.docData?.name}</p>
              <p>{item.docData?.specialty}</p>

              <p className="text-zinc-700 font-medium mt-2">Address:</p>
              <p className="text-xs">{item.docData?.address?.line1}</p>
              <p className="text-xs">{item.docData?.address?.line2}</p>

              <p className="text-xs mt-2">
                <span className="text-sm text-neutral-700 font-medium">Date & Time:</span>{' '}
                {item.slotDate} | {item.slotTime}
              </p>

              <p className="text-xs mt-1 font-semibold text-gray-800">
                Fee: {currencySymbol}{item.amount}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2 sm:ml-auto mt-4 sm:mt-0">
              {!item.cancel ? (
                <>
                  <button
                    className="text-sm text-stone-500 sm:min-w-48 py-2 border hover:bg-blue-500 hover:text-white transition-all duration-300"
                    onClick={() => alert('Redirect to payment logic')}
                  >
                    Pay Online
                  </button>

                  <button
                    className="text-sm text-stone-500 sm:min-w-48 py-2 border hover:bg-red-600 hover:text-white transition-all duration-300"
                    onClick={() => cancelAppointment(item._id)}
                  >
                    Cancel Appointment
                  </button>
                </>
              ) : (
                <button className="sm:min-w-48 py-2 border border-red-500 rounded text-red-500 cursor-default">
                  Appointment Cancelled
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;




//MARCH 19
// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';

// const MyAppointments = () => {
//   const { appointments, cancelAppointment, currencySymbol } = useContext(AppContext);

//   return (
//     <div>
//       <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">My Appointments</p>
//       <div>
//         {appointments?.length === 0 && (
//           <p className="text-sm text-gray-500 mt-4">You have no appointments yet.</p>
//         )}

//         {appointments?.map((item, index) => (
//           <div
//             className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b"
//             key={index}
//           >
//             <div>
//               <img
//                 className="w-32 h-24 object-cover bg-indigo-50 rounded"
//                 src={item.docData?.image || '/default-doctor.png'}
//                 alt={item.docData?.name}
//               />
//             </div>

//             <div className="flex flex-col text-sm text-zinc-600">
//               <p className="text-neutral-800 font-semibold">{item.docData?.name}</p>
//               <p>{item.docData?.specialty}</p>
//               <p className="text-zinc-700 font-medium mt-1">Address:</p>
//               <p className="text-xs">{item.docData?.address?.line1}</p>
//               <p className="text-xs">{item.docData?.address?.line2}</p>
//               <p className="text-xs mt-1">
//                 <span className="text-sm text-neutral-700 font-medium">Date & Time:</span>{' '}
//                 {item.slotDate} | {item.slotTime}
//               </p>
//               <p className="text-xs mt-1 font-semibold text-gray-800">
//                 Fee: {currencySymbol}{item.amount}
//               </p>
//             </div>

//             <div className="flex flex-col gap-2 sm:ml-auto">
//               {!item.cancel ? (
//                 <>
//                   <button
//                     className="text-sm text-stone-500 sm:min-w-48 py-2 border hover:bg-blue-500 hover:text-white transition-all duration-300"
//                     onClick={() => alert('Redirect to payment logic')}
//                   >
//                     Pay Online
//                   </button>

//                   <button
//                     onClick={() => cancelAppointment(item._id)}
//                     className="text-sm text-stone-500 sm:min-w-48 py-2 border hover:bg-red-600 hover:text-white transition-all duration-300"
//                   >
//                     Cancel Appointment
//                   </button>
//                 </>
//               ) : (
//                 <button className="sm:min-w-48 py-2 border border-red-500 rounded text-red-500 cursor-default">
//                   Appointment Cancelled
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyAppointments;






//MARCH 17, 2025 | 1:30 PM
// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';

// const MyAppointments = () => {
//   const { doctors } = useContext(AppContext);

//   return (
//     <div>
//       <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">My Appointments</p>
//       <div>
//         {doctors.slice(0, 3).map((item, index) => (
//           <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b" key={index}>
//             <div>
//               <img className="w-32 bg-indigo-50" src={item.image} alt={item.name} />
//             </div>
//             <div className="flex flex-col text-sm text-zinc-600">
//               <p className="text-neutral-800 font-semibold">{item.name}</p>
//               <p>{item.specialty}</p>
//               <p className="text-zinc-700 font-medium mt-1">Address:</p>
//               <p className="text-xs">{item.address.line1}</p>
//               <p className="text-xs">{item.address.line2}</p>
//               <p className="text-xs">
//                 <span className="text-sm text-neutral-700 font-medium">Date & Time:</span> March 17, 2025 | 1:30 PM
//               </p>
//             </div>
//             <div className="flex flex-col gap-2">
//               {!item.cancelled <button className=" text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-blue-500 hover:text-white transition all duration-300">Pay online</button> }

//               {!item.cancelled && < onClick={()=>cancelAppointment(item._id) } button className=" text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-600 hover:text-white transition all duration-300">Cancel Appointment</button>} 
            
//               {item.cancelled && <button className="sm:min-w-48 py-2 border border-red-500 rounded text-red-500">Appointment Cancelled</button>}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyAppointments;
