import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import verifiedIcon from '../assets/assets_frontend/verified_icon.svg';
import infoIcon from '../assets/assets_frontend/info_icon.svg';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext); // ✅ FIXED

  const [docInfo, setDocInfo] = useState(null);

  useEffect(() => {
    if (doctors && docId) {
      const foundDoc = doctors.find((doc) => doc._id === docId);
      setDocInfo(foundDoc || null);
    }
  }, [doctors, docId]);

  if (!docInfo) {
    return (
      <div className="w-full text-center py-20 text-gray-600">
        Loading doctor information...
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 text-gray-800">
      {/* Doctor Details */}
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Image */}
        <div>
          <img
            className="bg-primary w-full sm:max-w-72 rounded-lg"
            src={docInfo.image}
            alt={docInfo.name}
          />
        </div>

        {/* Info */}
        <div className="flex-1 border border-gray-300 rounded-lg p-6 bg-white mt-[-80px] sm:mt-0">
          {/* Name, Degree */}
          <p className="flex items-center gap-2 text-2xl font-semibold text-gray-900">
            {docInfo.name}
            <img className="w-5" src={verifiedIcon} alt="Verified" />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>
              {docInfo.degree} — {docInfo.specialty}
            </p>
            <span className="py-0.5 px-2 border text-xs rounded-full">
              {docInfo.experience}
            </span>
          </div>

          {/* About */}
          <div className="mt-4">
            <p className="flex items-center gap-2 text-sm font-medium text-gray-900">
              About
              <img src={infoIcon} alt="info" className="w-4 h-4" />
            </p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
          </div>

          {/* Fees */}
          <p className="text-gray-500 font-medium mt-4">
            Appointment Fee:{' '}
            <span className="text-blue-600">
              {currencySymbol}
              {docInfo.fees}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Appointment;

