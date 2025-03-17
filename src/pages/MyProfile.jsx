import React, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Edward Vincent',
    image: assets.profile_pic,
    email: 'richardjames@gmail.com',
    phone: '+1 234 567 890',
    address: {
      line1: '57th Cross, Richmond Circle',
      line2: 'Church Street',
    },
    gender: 'Male',
    dob: '1990-01-01',
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-4 text-sm p-4">
      {/* Profile Image and Name */}
      <div className="flex flex-col items-center gap-4">
        <img src={userData.image} alt="Profile" className="w-36 rounded" />
        {isEdit ? (
          <input
            className="bg-gray-50 text-3xl font-medium text-center max-w-xs border p-2 rounded"
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        ) : (
          <p className="font-medium text-3xl text-neutral-800">{userData.name}</p>
        )}
      </div>

      <hr className="bg-zinc-400 h-[1px] border-none my-4" />

      {/* Grid Section for Contact + Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div>
          <p className="text-neutral-500 underline mb-3">Contact Information</p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 text-neutral-700">
            <p className="font-medium">Email:</p>
            {isEdit ? (
              <input
                className="bg-gray-100 max-w-full p-1 rounded"
                type="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            ) : (
              <p className="text-blue-500">{userData.email}</p>
            )}

            <p className="font-medium">Phone:</p>
            {isEdit ? (
              <input
                className="bg-gray-100 max-w-full p-1 rounded"
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            ) : (
              <p className="text-blue-400">{userData.phone}</p>
            )}

            <p className="font-medium">Address:</p>
            {isEdit ? (
              <div className="flex flex-col gap-1">
                <input
                  className="bg-gray-50 p-1 rounded"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  type="text"
                />
                <input
                  className="bg-gray-50 p-1 rounded"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  type="text"
                />
              </div>
            ) : (
              <p className="text-gray-500">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>
        </div>

        {/* Basic Information */}
        <div>
          <p className="text-neutral-500 underline mb-3">Basic Information</p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 text-neutral-700">
            <p className="font-medium">Gender:</p>
            {isEdit ? (
              <select
                className="bg-gray-100 max-w-full p-1 rounded"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                value={userData.gender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="text-gray-400">{userData.gender}</p>
            )}

            <p className="font-medium">Birthday:</p>
            {isEdit ? (
              <input
                className="bg-gray-100 max-w-full p-1 rounded"
                type="date"
                value={userData.dob}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
              />
            ) : (
              <p className="text-gray-400">{userData.dob}</p>
            )}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-10 text-center">
        {isEdit ? (
          <button
            className="border border-blue-500 text-blue-500 px-8 py-2 rounded-full hover:bg-blue-50 transition-all"
            onClick={() => setIsEdit(false)}
          >
            Save Information
          </button>
        ) : (
          <button
            className="border border-blue-500 text-blue-500 px-8 py-2 rounded-full hover:bg-blue-50 transition-all"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;




// import React, { useState } from 'react';
// import { assets } from '../assets/assets_frontend/assets';

// const MyProfile = () => {
//   const [userData, setUserData] = useState({
//     name: 'Edward Vincent',
//     image: assets.profile_pic,
//     email: 'richardjames@gmail.com',
//     phone: '+1 234 567 890',
//     address: {
//       line1: '57th Cross, Richmond Circle',
//       line2: 'Church Street',
//     },
//     gender: 'Male',
//     dob: '1990-01-01',
//   });

//   const [isEdit, setIsEdit] = useState(false);

//   return (
//     <div className="max-w-lg mx-auto flex flex-col gap-2 text-sm p-4">
//       <img src={userData.image} alt="Profile" className="w-36 rounded" />

//       {isEdit ? (
//         <input
//           className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
//           type="text"
//           value={userData.name}
//           onChange={(e) =>
//             setUserData((prev) => ({ ...prev, name: e.target.value }))
//           }
//         />
//       ) : (
//         <p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
//       )}

//       <hr className="bg-zinc-400 h-[1px] border-none my-4" />

//       {/* Contact Info */}
//       <div>
//         <p className="text-neutral-500 underline mb-3">Contact Information</p>
//         <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 text-neutral-700">
//           <p className="font-medium">Email:</p>
//           <p className="text-blue-500">{userData.email}</p>

//           <p className="font-medium">Phone:</p>
//           {isEdit ? (
//             <input
//               className="bg-gray-100 max-w-52"
//               type="text"
//               value={userData.phone}
//               onChange={(e) =>
//                 setUserData((prev) => ({ ...prev, phone: e.target.value }))
//               }
//             />
//           ) : (
//             <p className="text-blue-400">{userData.phone}</p>
//           )}

//           <p className="font-medium">Address:</p>
//           {isEdit ? (
//             <div className="flex flex-col gap-1">
//               <input
//                 className="bg-gray-50"
//                 value={userData.address.line1}
//                 onChange={(e) =>
//                   setUserData((prev) => ({
//                     ...prev,
//                     address: { ...prev.address, line1: e.target.value },
//                   }))
//                 }
//                 type="text"
//               />
//               <input
//                 className="bg-gray-50"
//                 value={userData.address.line2}
//                 onChange={(e) =>
//                   setUserData((prev) => ({
//                     ...prev,
//                     address: { ...prev.address, line2: e.target.value },
//                   }))
//                 }
//                 type="text"
//               />
//             </div>
//           ) : (
//             <p className="text-gray-500">
//               {userData.address.line1}
//               <br />
//               {userData.address.line2}
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Basic Info */}
//       <div className="mt-6">
//         <p className="text-neutral-500 underline mb-3">Basic Information</p>
//         <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 text-neutral-700">
//           <p className="font-medium">Gender:</p>
//           {isEdit ? (
//             <select
//               className="max-w-24 bg-gray-100"
//               onChange={(e) =>
//                 setUserData((prev) => ({ ...prev, gender: e.target.value }))
//               }
//               value={userData.gender}
//             >
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//           ) : (
//             <p className="text-gray-400">{userData.gender}</p>
//           )}

//           <p className="font-medium">Birthday:</p>
//           {isEdit ? (
//             <input
//               className="max-w-32 bg-gray-100"
//               type="date"
//               value={userData.dob}
//               onChange={(e) =>
//                 setUserData((prev) => ({ ...prev, dob: e.target.value }))
//               }
//             />
//           ) : (
//             <p className="text-gray-400">{userData.dob}</p>
//           )}
//         </div>
//       </div>

//       {/* Action Button */}
//       <div className="mt-10">
//         {isEdit ? (
//           <button
//             className="border border-blue-500 text-blue-500 px-8 py-2 rounded-full hover:bg-blue-50 transition-all"
//             onClick={() => setIsEdit(false)}
//           >
//             Save Information
//           </button>
//         ) : (
//           <button
//             className="border border-blue-500 text-blue-500 px-8 py-2 rounded-full hover:bg-blue-50 transition-all"
//             onClick={() => setIsEdit(true)}
//           >
//             Edit
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyProfile;




// import React, { useState } from 'react';
// import { assets } from '../assets/assets;

// const MyProfile = () => {

//   const [userData, setUserData] = useState({
//     name: 'Edward Vincent',
//     image:assets.profile_pic,
//     email: 'richardjames@gmail.com',
//     phone: '+1 234 567 890',
//     address: {
//       line2:"57th Cross, Richmond Circle",
//       line2:"Circle, church street",
//       },
//     gender: 'Male',
//     dob: '1990-01-01',
//   });

//   const [isEdit, setIsEdit] = useState(false);

//   return (
//     <div className='max-w-lg flex flex-col gap-2 text-sm' >
      
//       <img
//         src={userData.image}
//         alt=""
//         className="w-36 rounded"/>

//         {
//           isEdit 
//           ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={setUserData(pre => ({...prev, name:e.targe.value}))} />
//           : <p className='font-medium text-3xl text-neutral-800 mt-4' > {userData.name} </p>
//         }

//         <hr className='bg-zinc-400 h-[1px] border-none' />
//         <div>
//           <p className='text-neutral-500 underline mt-3' >Contact Information</p>
//           <div  className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
//             <p className='font-medium' >Email id:</p>
//             <p className='text-blue-500' > {userData.email} </p>
//             <p className='font-medium' >Phone:</p>
//             {
//           isEdit 
//           ? <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={setUserData(pre => ({...prev, phone:e.targe.value}))} />
//           : <p className='text-blue-400' > {userData.phone} </p>
//         }
//         <p className='font-medium' >Address:</p>
//         {
//           isEdit
//           ? <p> 
//           <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({...prev, address: {...prev, address, line1: e.target.value}}))} value={userData.address.line1} type="text" />
//           <br />
//           <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({...prev, address: {...prev, address, line2: e.target.value}}))} value={userData.address.line2} type="text" />
//           </p>
//           : <p className='text-gray-500' >
//             {userData.address.line1}
//             <br />
//             {userData.address.line2}

//           </p>
//         }
//           </div>
//         </div>
//         <div>
//           <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
//           <div className='grid grid-cols-1fr_3fr] gap-y-2.5 mt3 text-neutral-700' >
//             <p className='font-medium' >Gender:</p>
//         {
//           isEdit 
//           ? <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({...prev, gender: e.target.value}))} value={userData.gender}> 
//             <option value="Male">Male</option>
//             <option value="Female">Female </option>
//           </select>
//           : <p className='text-gray-400'> {userData.gender} </p>
//         }
//         <p className='font-medium'> Birthday </p>
//         {
//           isEdit ? <input className='max-w-28 bg-gray-100' type='date' onChange={(e) => setUserData(prev => ({...prev, dob: e.target.value={userData.do}}))} />
//           : <p className='text-gray-400' > {userData.dob} </p>
//         }
//           </div>
//         </div>
//         <div className='mt-10' >
//           {
//             isEdit
//             ? <button className='border-primary px-8 py-2 rounded-full hover:bg-blue-50 hover:text-white transition-all' onClick={() => setIsEdit(false)}> Save Information </button>
//             : <button className='border-primary px-8 py-2 rounded-full hover:bg-blue-50 hover:text-white transition-all' onClick={() => setIsEdit(true)}> Edit </button>
//           }
//         </div>
//     </div>
//   )
// }

// export default MyProfile;
