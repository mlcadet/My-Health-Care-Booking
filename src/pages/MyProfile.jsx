import React, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets'; // Adjust if needed

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Edward Vincent',
    image: assets.profile_pic || '/default-user.png',
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
    <div className="w-full flex justify-center py-12 px-4">
      <div className="w-full max-w-4xl bg-white p-6 rounded shadow flex flex-col items-center gap-6 text-sm">

        <img src={userData.image} alt="User" className="w-36 rounded" />

        {isEdit ? (
          <input
            className="bg-gray-50 text-3xl font-medium max-w-60 mt-2 text-center"
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        ) : (
          <p className="font-medium text-3xl text-neutral-800 mt-2">
            {userData.name}
          </p>
        )}

        <hr className="bg-zinc-300 h-[1px] w-full border-none" />

        {/* Side-by-side layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div>
            <p className="text-neutral-500 underline mb-3">Contact Information</p>
            <div className="grid grid-cols-[1fr_2fr] gap-y-2 text-neutral-700">
            <p className="font-medium">Email:</p>
{isEdit ? (
  <input
    className="bg-gray-100 max-w-52"
    type="email"
    value={userData.email}
    onChange={(e) =>
      setUserData((prev) => ({ ...prev, email: e.target.value }))
    }
  />
) : (
  <p className="text-blue-500">{userData.email}</p>
)}

              {/* <p className="font-medium">Email:</p>
              <p className="text-blue-500">{userData.email}</p> */}

              <p className="font-medium">Phone:</p>
              {isEdit ? (
                <input
                  className="bg-gray-100 max-w-52"
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
                    className="bg-gray-50"
                    value={userData.address.line1}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line1: e.target.value },
                      }))
                    }
                  />
                  <input
                    className="bg-gray-50"
                    value={userData.address.line2}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line2: e.target.value },
                      }))
                    }
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

          {/* Basic Info */}
          <div>
            <p className="text-neutral-500 underline mb-3">Basic Information</p>
            <div className="grid grid-cols-[1fr_2fr] gap-y-2 text-neutral-700">
              <p className="font-medium">Gender:</p>
              {isEdit ? (
                <select
                  className="max-w-24 bg-gray-100"
                  value={userData.gender}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      gender: e.target.value,
                    }))
                  }
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
                  className="max-w-32 bg-gray-100"
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

        {/* Button */}
        <div className="mt-6">
          <button
            className="border border-blue-500 text-blue-500 px-8 py-2 rounded-full hover:bg-blue-50 hover:text-white transition-all"
            onClick={() => setIsEdit((prev) => !prev)}
          >
            {isEdit ? 'Save Information' : 'Edit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;




///MARCH 19

// import React, { useState } from 'react';
// import { assets } from '../assets/assets_frontend/assets'; // Adjust if needed

// const MyProfile = () => {
//   const [userData, setUserData] = useState({
//     name: 'Edward Vincent',
//     image: assets.profile_pic || '/default-user.png', // placeholder fallback
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
//     <div className="max-w-lg flex flex-col gap-2 text-sm">
//       <img
//         src={userData.image}
//         alt="User"
//         className="w-36 rounded"
//       />

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
//         <p className="font-medium text-3xl text-neutral-800 mt-4">
//           {userData.name}
//         </p>
//       )}

//       <hr className="bg-zinc-400 h-[1px] border-none" />
//       <div>
//         <p className="text-neutral-500 underline mt-3">Contact Information</p>
//         <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
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
//             <div>
//               <input
//                 className="bg-gray-50 block"
//                 value={userData.address.line1}
//                 onChange={(e) =>
//                   setUserData((prev) => ({
//                     ...prev,
//                     address: { ...prev.address, line1: e.target.value },
//                   }))
//                 }
//               />
//               <input
//                 className="bg-gray-50 block mt-1"
//                 value={userData.address.line2}
//                 onChange={(e) =>
//                   setUserData((prev) => ({
//                     ...prev,
//                     address: { ...prev.address, line2: e.target.value },
//                   }))
//                 }
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

//       <div>
//         <p className="text-neutral-500 underline mt-3">Basic Information</p>
//         <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
//           <p className="font-medium">Gender:</p>
//           {isEdit ? (
//             <select
//               className="max-w-20 bg-gray-100"
//               value={userData.gender}
//               onChange={(e) =>
//                 setUserData((prev) => ({ ...prev, gender: e.target.value }))
//               }
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
//               className="max-w-28 bg-gray-100"
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

//       <div className="mt-10">
//         <button
//           className="border border-blue-500 text-blue-500 px-8 py-2 rounded-full hover:bg-blue-50 hover:text-white transition-all"
//           onClick={() => setIsEdit((prev) => !prev)}
//         >
//           {isEdit ? 'Save Information' : 'Edit'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;






// import React, { useContext, useState, useEffect } from 'react';
// import { AppContext } from '../context/AppContext';
// import { useNavigate } from 'react-router-dom';

// const MyProfile = () => {
//   const { currentUser, setCurrentUser } = useContext(AppContext);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log("currentUser updated:", currentUser);
//     if (currentUser) {
//       setName(currentUser.name || '');
//       setEmail(currentUser.email || '');
//     }
//   }, [currentUser]);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const updateData = { name, email };
//       if (password.trim()) {
//         updateData.password = password;
//       }

//       const response = await fetch(`http://localhost:3002/api/user/${currentUser._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           email: currentUser.email,
//           password: password || '',
//         },
//         body: JSON.stringify(updateData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setCurrentUser(data);
//         console.log('Profile updated successfully:', data);
//         navigate('/profile'); // ✅ Replace with your actual profile view route
//       } else {
//         console.error('Profile update failed:', data.message);
//       }
//     } catch (error) {
//       console.error('Error updating profile:', error);
//     }
//   };

//   if (!currentUser) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <form
//       onSubmit={onSubmitHandler}
//       className="min-h-[80vh] flex items-center justify-center"
//     >
//       <div className="flex flex-col gap-3 items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
//         <p className="text-2xl font-semibold">My Profile</p>

//         {/* Name */}
//         <div className="w-full">
//           <p>Full Name</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="text"
//             placeholder="John Doe"
//             onChange={(e) => setName(e.target.value)}
//             value={name}
//             required
//           />
//         </div>

//         {/* Email */}
//         <div className="w-full">
//           <p>Email</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="email"
//             placeholder="you@example.com"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             required
//           />
//         </div>

//         {/* Password */}
//         <div className="w-full">
//           <p>Password</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="password"
//             placeholder="••••••••"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//           />
//         </div>

//         {/* Submit button */}
//         <button
//           type="submit"
//           className="bg-blue-500 text-white w-full py-2 rounded-md text-base"
//         >
//           Update Profile
//         </button>
//       </div>
//     </form>
//   );
// };

// export default MyProfile;




// import React, { useContext, useState, useEffect } from 'react';
// import { AppContext } from '../context/AppContext';

// const MyProfile = () => {
//   const { currentUser, setCurrentUser } = useContext(AppContext);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     console.log("currentUser updated:", currentUser);
//     if (currentUser) {
//       setName(currentUser.name || '');
//       setEmail(currentUser.email || '');
//     }
//   }, [currentUser]);
  

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const updateData = { name, email };
//       if (password.trim()) {
//         updateData.password = password;
//       }

//       const response = await fetch(`http://localhost:3002/api/user/${currentUser._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           email: currentUser.email,
//           password: password || '',
//         },
//         body: JSON.stringify(updateData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setCurrentUser(data);
//         console.log('Profile updated successfully:', data);
//       } else {
//         console.error('Profile update failed:', data.message);
//       }
//     } catch (error) {
//       console.error('Error updating profile:', error);
//     }
//   };

//   if (!currentUser) {
//     console.log('Current user:', currentUser); // ✅ Now reachable
//     return <p>Loading...</p>;
//   }


//   return (
//     <form
//       onSubmit={onSubmitHandler}
//       className="min-h-[80vh] flex items-center justify-center"
//     >
//       <div className="flex flex-col gap-3 items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
//         <p className="text-2xl font-semibold">My Profile</p>

//         {/* Name */}
//         <div className="w-full">
//           <p>Full Name</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="text"
//             placeholder="John Doe"
//             onChange={(e) => setName(e.target.value)}
//             value={name}
//             required
//           />
//         </div>

//         {/* Email */}
//         <div className="w-full">
//           <p>Email</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="email"
//             placeholder="you@example.com"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             required
//           />
//         </div>

//         {/* Password */}
//         <div className="w-full">
//           <p>Password</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="password"
//             placeholder="••••••••"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//           />
//         </div>

//         {/* Submit button */}
//         <button
//           type="submit"
//           className="bg-blue-500 text-white w-full py-2 rounded-md text-base"
//         >
//           Update Profile
//         </button>
//       </div>
//     </form>
//   );
// };

// export default MyProfile;






//MARCH 19 6PM

// import React, { useContext, useState, useEffect } from 'react';
// import { AppContext } from '../context/AppContext';

// const MyProfile = () => {
//   const { currentUser, setCurrentUser } = useContext(AppContext);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     if (currentUser) {
//       setName(currentUser.name);
//       setEmail(currentUser.email);
//     }
//   }, [currentUser]);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(`http://localhost:3002/api/user/${currentUser._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, password }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setCurrentUser(data); // Update the current user in the context
//         console.log('Profile updated successfully:', data);
//       } else {
//         console.error('Profile update failed:', data.message);
//       }
//     } catch (error) {
//       console.error('Error updating profile:', error);
//     }
//   };

//   if (!currentUser) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <form
//       onSubmit={onSubmitHandler}
//       className="min-h-[80vh] flex items-center justify-center"
//     >
//       <div className="flex flex-col gap-3 items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
//         <p className="text-2xl font-semibold">My Profile</p>

//         {/* Name */}
//         <div className="w-full">
//           <p>Full Name</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="text"
//             placeholder="John Doe"
//             onChange={(e) => setName(e.target.value)}
//             value={name}
//             required
//           />
//         </div>

//         {/* Email */}
//         <div className="w-full">
//           <p>Email</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="email"
//             placeholder="you@example.com"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             required
//           />
//         </div>

//         {/* Password */}
//         <div className="w-full">
//           <p>Password</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="password"
//             placeholder="••••••••"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//           />
//         </div>

//         {/* Submit button */}
//         <button
//           type="submit"
//           className="bg-blue-500 text-white w-full py-2 rounded-md text-base"
//         >
//           Update Profile
//         </button>
//       </div>
//     </form>
//   );
// };

// export default MyProfile;





// import React, { useContext, useState, useEffect } from 'react';
// import { AppContext } from '../context/AppContext';

// const MyProfile = () => {
//   const { currentUser, setCurrentUser } = useContext(AppContext);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     if (currentUser) {
//       setName(currentUser.name);
//       setEmail(currentUser.email);
//     }
//   }, [currentUser]);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(`http://localhost:3002/api/user/${currentUser._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, password }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setCurrentUser(data); // Update the current user in the context
//         console.log('Profile updated successfully:', data);
//       } else {
//         console.error('Profile update failed:', data.message);
//       }
//     } catch (error) {
//       console.error('Error updating profile:', error);
//     }
//   };

//   if (!currentUser) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <form
//       onSubmit={onSubmitHandler}
//       className="min-h-[80vh] flex items-center justify-center"
//     >
//       <div className="flex flex-col gap-3 items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
//         <p className="text-2xl font-semibold">My Profile</p>

//         {/* Name */}
//         <div className="w-full">
//           <p>Full Name</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="text"
//             placeholder="John Doe"
//             onChange={(e) => setName(e.target.value)}
//             value={name}
//             required
//           />
//         </div>

//         {/* Email */}
//         <div className="w-full">
//           <p>Email</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="email"
//             placeholder="you@example.com"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             required
//           />
//         </div>

//         {/* Password */}
//         <div className="w-full">
//           <p>Password</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="password"
//             placeholder="••••••••"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//           />
//         </div>

//         {/* Submit button */}
//         <button
//           type="submit"
//           className="bg-blue-500 text-white w-full py-2 rounded-md text-base"
//         >
//           Update Profile
//         </button>
//       </div>
//     </form>
//   );
// };

// export default MyProfile;


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
