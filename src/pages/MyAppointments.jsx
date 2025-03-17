import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {

  const { doctors} = useContext(AppContext);
  
  return (
    <div>
      <p>My appointments</p>
    </div>
  )
}

export default MyAppointments;
