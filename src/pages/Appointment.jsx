import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import verifiedIcon from '../assets/assets_frontend/verified_icon.svg';
import infoIcon from '../assets/assets_frontend/info_icon.svg';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  // Get doctor info
  useEffect(() => {
    if (doctors && docId) {
      const foundDoc = doctors.find(doc => doc._id === docId);
      setDocInfo(foundDoc || null);
    }
  }, [doctors, docId]);

  // Generate available slots
  useEffect(() => {
    if (!docInfo) return;

    const today = new Date();
    const generatedSlots = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        const now = new Date();
        const minutes = now.getMinutes();
        currentDate.setHours(now.getHours() + 1);
        currentDate.setMinutes(minutes > 30 ? 0 : 30);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      const daySlots = [];
      while (currentDate < endTime) {
        daySlots.push({
          datetime: new Date(currentDate),
          time: currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      generatedSlots.push(daySlots);
    }

    setDocSlots(generatedSlots);
  }, [docInfo]);

  if (!docInfo) {
    return (
      <div className="w-full text-center py-20 text-gray-600">
        Loading doctor information...
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 text-gray-800">
      {/* Doctor Info */}
      <div className="flex flex-col sm:flex-row gap-6">
        <div>
          <img
            className="bg-blue-500 w-full sm:max-w-72 rounded-lg"
            src={docInfo.image}
            alt={docInfo.name}
          />
        </div>

        <div className="flex-1 border border-gray-300 rounded-lg p-6 bg-white mt-[-80px] sm:mt-0">
          <p className="flex items-center gap-2 text-2xl font-semibold text-gray-900">
            {docInfo.name}
            <img className="w-5" src={verifiedIcon} alt="Verified" />
          </p>

          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>{docInfo.degree} — {docInfo.specialty}</p>
            <span className="py-0.5 px-2 border text-xs rounded-full">
              {docInfo.experience}
            </span>
          </div>

          <div className="mt-4">
            <p className="flex items-center gap-2 text-sm font-medium text-gray-900">
              About
              <img src={infoIcon} alt="info" className="w-4 h-4" />
            </p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
          </div>

          <p className="text-gray-500 font-medium mt-4">
            Appointment Fee:{' '}
            <span className="text-blue-600">
              {currencySymbol}
              {docInfo.fees}
            </span>
          </p>
        </div>
      </div>

      {/* Slot Selector */}
      <div className="sm:ml-72 sm:pl-4 mt-12 font-medium text-gray-700">
        <p className="text-xl font-semibold mb-4">Booking Slots</p>

        {/* Days */}
        <div className="flex gap-3 items-center w-full overflow-x-auto mt-4">
          {docSlots.map((item, index) => (
            <div
              key={index}
              onClick={() => setSlotIndex(index)}
              className={`text-center py-6 min-w-16 rounded-full cursor-pointer px-4 ${
                slotIndex === index
                  ? 'bg-blue-500 text-white'
                  : 'border border-gray-200'
              }`}
            >
              <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>

        {/* Times */}
        <div className="flex items-center gap-3 w-full overflow-x-auto mt-4">
          {docSlots[slotIndex]?.map((item, index) => (
            <p
              key={index}
              onClick={() => setSlotTime(item.time)}
              className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer border ${
                item.time === slotTime
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-400 border-gray-300'
              }`}
            >
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>

        {/* Submit Button--------------- */}
        <button
          className="bg-blue-500 text-white text-sm font-light px-14 py-3 rounded-full my-6"
          onClick={() => {
            if (slotTime) {
              alert(`Appointment booked for ${slotTime} with Dr. ${docInfo.name}`);
            } else {
              alert('Please select a time slot first.');
            }
          }}
        >
          Book an appointment
        </button>
      </div>

          {/** List of Related Doctors */}
          <RelatedDoctors docId={docId} specialty={docInfo.specialty} />
    </div>
  );
};

export default Appointment;



