import React, { createContext, useEffect, useState } from 'react';
import { doctors } from '../assets/assets_frontend/assets';

export const AppContext = createContext();

const backendURL = 'http://localhost:3002/api'; 

const AppContextProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const currencySymbol = '$';

  // Hardcoded user ID for now, replace with actual login later
  const userId = 'YOUR_USER_ID_HERE';

  const fetchAppointments = async (userId) => {
    try {
      const res = await fetch(`${backendURL}/user/${userId}/appointments`);
      const data = await res.json();
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      await fetch(`${backendURL}/user/${userId}/appointments/${appointmentId}`, {
        method: 'DELETE',
      });
      fetchAppointments(userId); // Refresh after cancel
    } catch (error) {
      console.error('Error cancelling appointment:', error);
    }
  };

  useEffect(() => {
    if (userId) fetchAppointments(userId);
  }, [userId]);

  const value = {
    doctors,
    appointments,
    cancelAppointment,
    currencySymbol,
    userId,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;

