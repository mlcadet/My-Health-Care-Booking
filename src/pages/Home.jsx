// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SpecialtyMenu from '../components/SpecialtyMenu';
import TopDoctors from '../components/TopDoctors';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { fetchDoctors } from '../utils/api';

const Home = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const data = await fetchDoctors();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    getDoctors();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <SpecialtyMenu />
      <TopDoctors />
      <Banner />
      <Footer />

      {/* Display Doctor Cards */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array.isArray(doctors) && doctors.map((doctor) => (
          <div key={doctor._id} className="border p-4 rounded shadow">
            <img src={doctor.image} alt={doctor.name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-bold mt-2">{doctor.name}</h3>
            <p className="text-sm text-gray-500">{doctor.specialty}</p>
            <p className="text-sm">{doctor.experience}</p>
            <p className="text-sm text-blue-500">{doctor.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;





// import React, { useEffect, useState } from 'react';
// import Header from '../components/Header';
// import SpecialtyMenu from '../components/SpecialtyMenu';
// import TopDoctors from '../components/TopDoctors';
// import Banner from '../components/Banner';
// import Footer from '../components/Footer';
// import { fetchData } from '../utils/api';

// const Home = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const result = await fetchData();
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     getData();
//   }, []);

//   return (
//     <div className="w-full overflow-x-hidden">
//       <Header />
//       <SpecialtyMenu />
//       <TopDoctors />
//       <Banner />
//       <Footer />
//       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//     </div>
//   );
// };

// export default Home;



// import React from 'react';
// import Header from '../components/Header';
// import SpecialtyMenu from '../components/SpecialtyMenu';
// import TopDoctors from '../components/TopDoctors';
// import Banner from '../components/Banner';
// import Footer from '../components/Footer';

// const Home = () => {
//   return (
//     <div className="w-full overflow-x-hidden">
//       <Header />
//       <SpecialtyMenu />
//       <TopDoctors />
//       <Banner />
//     </div>
//   );
// };

// export default Home;
