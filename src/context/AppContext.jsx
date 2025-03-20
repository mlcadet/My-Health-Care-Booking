import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

const backendURL = 'http://localhost:3002/api';

const AppContextProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const currencySymbol = '$';

  // ✅ Fetch real doctors from backend
  const fetchDoctors = async () => {
    try {
      const res = await fetch(`${backendURL}/doctor/doctors`);
      const data = await res.json();
      setDoctors(data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const fetchAppointments = async (userId) => {
    try {
      const res = await fetch(`${backendURL}/user/${userId}/appointments`);
      const data = await res.json();
      if (!Array.isArray(data)) {
        setAppointments([]);
      } else {
        setAppointments(data);
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
      setAppointments([]);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    if (!currentUser?._id) return;
    try {
      await fetch(`${backendURL}/user/${currentUser._id}/appointments/${appointmentId}`, {
        method: 'DELETE',
      });
      fetchAppointments(currentUser._id);
    } catch (error) {
      console.error('Error cancelling appointment:', error);
    }
  };

  useEffect(() => {
    const mockUser = {
      _id: '67d98ff065923a55abb5a563',
      name: 'Jane Doe',
      email: 'janedoe@example.com',
    };
    setCurrentUser(mockUser);
    fetchDoctors();
    fetchAppointments(mockUser._id);
  }, []);

  const value = {
    doctors,
    appointments,
    cancelAppointment,
    fetchAppointments,
    currencySymbol,
    currentUser,
    setCurrentUser,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;





// import React, { createContext, useEffect, useState } from 'react';

// export const AppContext = createContext();

// const backendURL = 'http://localhost:3002/api/doctor';

// const AppContextProvider = ({ children }) => {
//   const [appointments, setAppointments] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [doctors, setDoctors] = useState([]);
//   const currencySymbol = '$';

//   // ✅ FETCH DOCTORS
//   const fetchDoctors = async () => {
//     try {
//       const res = await fetch(`${backendURL}/doctors`);
//       const data = await res.json();
//       setDoctors(data);
//     } catch (error) {
//       console.error('Error fetching doctors:', error);
//       setDoctors([]);
//     }
//   };

//   // ✅ FETCH APPOINTMENTS
//   const fetchAppointments = async (userId) => {
//     try {
//       const res = await fetch(`http://localhost:3002/api/user/${userId}/appointments`);
//       const data = await res.json();
//       setAppointments(Array.isArray(data) ? data : []);
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//       setAppointments([]);
//     }
//   };

//   // ✅ CANCEL APPOINTMENT
//   const cancelAppointment = async (appointmentId) => {
//     if (!currentUser?._id) return;
//     try {
//       await fetch(`http://localhost:3002/api/user/${currentUser._id}/appointments/${appointmentId}`, {
//         method: 'DELETE',
//       });
//       fetchAppointments(currentUser._id);
//     } catch (error) {
//       console.error('Error cancelling appointment:', error);
//     }
//   };

//   // ✅ ON LOAD
//   useEffect(() => {
//     const mockUser = {
//       _id: '67d98ff065923a55abb5a563',
//       name: 'Jane Doe',
//       email: 'janedoe@example.com',
//     };
//     setCurrentUser(mockUser);
//     fetchDoctors();
//     fetchAppointments(mockUser._id);
//   }, []);

//   const value = {
//     doctors,
//     appointments,
//     cancelAppointment,
//     fetchAppointments,
//     currencySymbol,
//     currentUser,
//     setCurrentUser,
//   };

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };

// export default AppContextProvider;




// import React, { createContext, useEffect, useState } from 'react';

// export const AppContext = createContext();

// const backendURL = 'http://localhost:3002/api';

// const AppContextProvider = ({ children }) => {
//   const [doctors, setDoctors] = useState([]);
//   const [appointments, setAppointments] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);
//   const currencySymbol = '$';

//   // Fetch doctors from backend
//   const fetchDoctors = async () => {
//     try {
//       const res = await fetch(`${backendURL}/doctors`);
//       const data = await res.json();
//       setDoctors(data);
//     } catch (error) {
//       console.error('Error fetching doctors:', error);
//     }
//   };

//   // Fetch user appointments
//   const fetchAppointments = async (userId) => {
//     try {
//       const res = await fetch(`${backendURL}/user/${userId}/appointments`);
//       const data = await res.json();

//       if (!Array.isArray(data)) {
//         console.error('Expected array, got:', data);
//         setAppointments([]);
//       } else {
//         setAppointments(data);
//       }
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//       setAppointments([]);
//     }
//   };

//   // Cancel a specific appointment
//   const cancelAppointment = async (appointmentId) => {
//     if (!currentUser?._id) return;
//     try {
//       await fetch(`${backendURL}/user/${currentUser._id}/appointments/${appointmentId}`, {
//         method: 'DELETE',
//       });
//       fetchAppointments(currentUser._id);
//     } catch (error) {
//       console.error('Error cancelling appointment:', error);
//     }
//   };

//   // Load mock user and fetch data
//   useEffect(() => {
//     const mockUser = {
//       _id: '67d98ff065923a55abb5a563', // Replace with real ID if using auth
//       name: 'Jane Doe',
//       email: 'janedoe@example.com',
//     };
//     setCurrentUser(mockUser);
//     fetchAppointments(mockUser._id);
//     fetchDoctors();
//   }, []);

//   const value = {
//     doctors,
//     appointments,
//     cancelAppointment,
//     fetchAppointments,
//     currencySymbol,
//     currentUser,
//     setCurrentUser,
//   };

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };

// export default AppContextProvider;








//MARCH 20 1.05

// import React, { createContext, useEffect, useState } from 'react';

// export const AppContext = createContext();

// const backendURL = 'http://localhost:3002/api';

// const AppContextProvider = ({ children }) => {
//   const [appointments, setAppointments] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [doctors, setDoctors] = useState([]);
//   const currencySymbol = '$';

//   // ✅ Fetch doctors from MongoDB via backend
//   useEffect(() => {
//     const fetchDoctors = async () => {
//       try {
//         const res = await fetch(`${backendURL}/doctors`);
//         const data = await res.json();
//         setDoctors(data);
//       } catch (err) {
//         console.error('Error fetching doctors:', err);
//       }
//     };
//     fetchDoctors();
//   }, []);

//   // ✅ Fetch appointments for a user
//   const fetchAppointments = async (userId) => {
//     try {
//       const res = await fetch(`${backendURL}/user/${userId}/appointments`);
//       const data = await res.json();

//       if (!Array.isArray(data)) {
//         console.error('Expected array, got:', data);
//         setAppointments([]);
//       } else {
//         setAppointments(data);
//       }
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//       setAppointments([]);
//     }
//   };

//   // ✅ Cancel an appointment
//   const cancelAppointment = async (appointmentId) => {
//     if (!currentUser?._id) return;
//     try {
//       await fetch(`${backendURL}/user/${currentUser._id}/appointments/${appointmentId}`, {
//         method: 'DELETE',
//       });
//       fetchAppointments(currentUser._id);
//     } catch (error) {
//       console.error('Error cancelling appointment:', error);
//     }
//   };

//   // ✅ Simulate login or load test user
//   useEffect(() => {
//     const mockUser = {
//       _id: '67d98ff065923a55abb5a563', // Replace with actual user ID
//       name: 'Jane Doe',
//       email: 'janedoe@example.com',
//     };
//     setCurrentUser(mockUser);
//     fetchAppointments(mockUser._id);
//   }, []);

//   const value = {
//     doctors,
//     appointments,
//     cancelAppointment,
//     fetchAppointments,
//     currencySymbol,
//     currentUser,
//     setCurrentUser,
//   };

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };

// export default AppContextProvider;




// import React, { createContext, useEffect, useState } from 'react';
// import { doctors } from '../assets/assets_frontend/assets';

// export const AppContext = createContext();

// const backendURL = 'http://localhost:3002/api';

// const AppContextProvider = ({ children }) => {
//   const [appointments, setAppointments] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null); // For real logged-in user
//   const currencySymbol = '$';

//   // Fetch appointments for a user
//   const fetchAppointments = async (userId) => {
//     try {
//       const res = await fetch(`${backendURL}/user/${userId}/appointments`);
//       const data = await res.json();
  
//       // If the response was an error object
//       if (!Array.isArray(data)) {
//         console.error('Expected array, got:', data);
//         setAppointments([]); // prevent crash
//       } else {
//         setAppointments(data);
//       }
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//       setAppointments([]); // fallback
//     }
//   };

//   // Cancel an appointment
//   const cancelAppointment = async (appointmentId) => {
//     if (!currentUser?._id) return;
//     try {
//       await fetch(`${backendURL}/user/${currentUser._id}/appointments/${appointmentId}`, {
//         method: 'DELETE',
//       });
//       fetchAppointments(currentUser._id); // Refresh appointments
//     } catch (error) {
//       console.error('Error cancelling appointment:', error);
//     }
//   };

//   // Simulate login or load test user
//   useEffect(() => {
//     const mockUser = {
//       _id: '67d98ff065923a55abb5a563', // Replace with real user ID from login
//       name: 'Jane Doe',
//       email: 'janedoe@example.com',
//     };
//     setCurrentUser(mockUser);
//     fetchAppointments(mockUser._id);
//   }, []);

//   const value = {
//     doctors,
//     appointments,
//     cancelAppointment,
//     fetchAppointments,
//     currencySymbol,
//     currentUser,
//     setCurrentUser, // Add this to allow setting the current user from other components
//   };

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };

// export default AppContextProvider;






// import React, { createContext, useEffect, useState } from 'react';
// import { doctors } from '../assets/assets_frontend/assets';

// export const AppContext = createContext();

// const backendURL = 'http://localhost:3002/api';

// const AppContextProvider = ({ children }) => {
//   const [appointments, setAppointments] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null); // For real logged-in user
//   const currencySymbol = '$';

//   // Fetch appointments for a user
//   const fetchAppointments = async (userId) => {
//     try {
//       const res = await fetch(`${backendURL}/user/${userId}/appointments`);
//       const data = await res.json();
  
//       // If the response was an error object
//       if (!Array.isArray(data)) {
//         console.error('Expected array, got:', data);
//         setAppointments([]); // prevent crash
//       } else {
//         setAppointments(data);
//       }
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//       setAppointments([]); // fallback
//     }
//   };
  

//   // Cancel an appointment
//   const cancelAppointment = async (appointmentId) => {
//     if (!currentUser?._id) return;
//     try {
//       await fetch(`${backendURL}/user/${currentUser._id}/appointments/${appointmentId}`, {
//         method: 'DELETE',
//       });
//       fetchAppointments(currentUser._id); // Refresh appointments
//     } catch (error) {
//       console.error('Error cancelling appointment:', error);
//     }
//   };

//   // Simulate login or load test user
//   useEffect(() => {
//     const mockUser = {
//       _id: '67d98ff065923a55abb5a563', // Replace with real user ID from login
//       name: 'Jane Doe',
//       email: 'janedoe@example.com',
//     };
//     setCurrentUser(mockUser);
//     fetchAppointments(mockUser._id);
//   }, []);

//   const value = {
//     doctors,
//     appointments,
//     cancelAppointment,
//     fetchAppointments,
//     currencySymbol,
//     currentUser,
//   };

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };

// export default AppContextProvider;





// import React, { createContext, useEffect, useState } from 'react';
// import { doctors } from '../assets/assets_frontend/assets';

// export const AppContext = createContext();

// const backendURL = 'http://localhost:3002/api'; 

// const AppContextProvider = ({ children }) => {
//   const [appointments, setAppointments] = useState([]);
//   const currencySymbol = '$';

//   // Hardcoded user ID for now, replace with actual login later
//   const userId = 'YOUR_USER_ID_HERE';

//   const fetchAppointments = async (userId) => {
//     try {
//       const res = await fetch(`${backendURL}/user/${userId}/appointments`);
//       const data = await res.json();
//       setAppointments(data);
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//     }
//   };

//   const cancelAppointment = async (appointmentId) => {
//     try {
//       await fetch(`${backendURL}/user/${userId}/appointments/${appointmentId}`, {
//         method: 'DELETE',
//       });
//       fetchAppointments(userId); // Refresh after cancel
//     } catch (error) {
//       console.error('Error cancelling appointment:', error);
//     }
//   };

//   useEffect(() => {
//     if (userId) fetchAppointments(userId);
//   }, [userId]);

//   const value = {
//     doctors,
//     appointments,
//     cancelAppointment,
//     currencySymbol,
//     userId,
//   };

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };

// export default AppContextProvider;

