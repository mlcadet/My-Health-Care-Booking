import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SpecialtyMenu from '../components/SpecialtyMenu';
import TopDoctors from '../components/TopDoctors';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { fetchData } from '../utils/api';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <SpecialtyMenu />
      <TopDoctors />
      <Banner />
      <Footer />
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default Home;



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
