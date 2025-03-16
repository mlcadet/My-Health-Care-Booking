import React from 'react';
import logo from '../assets/assets_frontend/logo.svg'; // or correct import path

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-14 my-10 mt-40 text-sm">
        {/* LEFT SECTION */}
        <div>
          <img src={logo} alt="Logo" className="mb-5 w-40" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </p>
        </div>

        {/* CENTER SECTION */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>1-800-333-7777</li>
            <li>myhealthcare@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div>
        <hr className="border-gray-300" />
        <p className="py-5 text-sm text-center text-gray-500">
          © 2025 MyHealthCare. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;