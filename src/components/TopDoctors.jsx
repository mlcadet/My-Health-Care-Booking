import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-900 md:mx-10">
      {/* Header */}
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Grid layout for doctor cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-5 w-full px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 bg-white"
          >
            {/* Responsive image with no cropping */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-72 sm:h-80 md:h-96 lg:h-[28rem] object-contain bg-blue-50"
            />

            {/* Card content */}
            <div className="p-4 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-green-500 mb-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.specialty}</p>
            </div>
          </div>
        ))}
      </div>

      {/* "More" button */}
      <button className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 hover:bg-blue-100 transition-all">
        more
      </button>
    </div>
  );
};

export default TopDoctors;

