import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Page components
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyProfile from './pages/MyProfile';
import MyAppointments from './pages/MyAppointments';
import Appointment from './pages/Appointment';

// Layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:specialty" element={<Doctors />} />
        <Route path="/login" element={<Login />} />       
        <Route path="/signup" element={<Signup />} />     
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;






// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Doctors from './pages/Doctors';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Login from './pages/login';
// import MyProfile from './pages/MyProfile';
// import MyAppointments from './pages/MyAppointments';
// import Appointment from './pages/Appointment';
// import Navbar from './components/Navbar';
// import Header from './components/Header';
// import SpecialtyMenu from './components/SpecialtyMenu';
// import TopDoctors from './components/TopDoctors';
// import Banner from './components/Banner';

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Header />
//               <Home />
//               <SpecialtyMenu />
//               <TopDoctors />
//               <Banner />
//             </>
//           }
//         />
//         <Route path="/doctors" element={<Doctors />} />
//         <Route path="/doctors/:specialty" element={<Doctors />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/my-profile" element={<MyProfile />} />
//         <Route path="/my-appointments" element={<MyAppointments />} />
//         <Route path="/appointment/:docId" element={<Appointment />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;



// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Doctors from './pages/Doctors';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Login from './pages/login';
// import MyProfile from './pages/MyProfile';
// import MyAppointments from './pages/MyAppointments';
// import Appointment from './pages/Appointment';
// import Navbar from './components/Navbar';
// import Header from './components/Header';

// const App = () => {
//   return (
//     <div className='mx-4 sm:mx-[10%]'>   
//       <Navbar/>
//       <Header/>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/doctors' element={<Doctors />} />
//         <Route path='/doctors/:specialty' element={<Doctors />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/my-profile' element={<MyProfile />} />
//         <Route path='/my-appointments' element={<MyAppointments />} />
//         <Route path='/appointment/:docId' element={<Appointment />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;