import React from 'react';
import { specialtyData } from '../assets/assets_frontend/assets';
import { Link } from 'react-router-dom';

const SpecialtyMenu = () => {
  return (
    <div id='#specialty'>
      <h1> Find by Specialty </h1>
      <p> Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free. </p>
      <div>
        {specialtyData.map((item, index) => (
          <Link key={index} to= {`/doctors/${item.specialty}`}>
            <img src={item.image} alt="" />
            <p>{item.specialty}</p>
          </Link>
        ))}
        
      </div>
    </div>
  )
}

export default SpecialtyMenu;
