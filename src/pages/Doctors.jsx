import React from 'react';
import { useParams } from 'react-router-dom';

const Doctors = () => {

  const { specialty } = useParams();
  
  console.log(specialty);

  return (
    <div>
      
    </div>
  )
}

export default Doctors;
