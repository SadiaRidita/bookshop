import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center fixed bottom-0 left-0 w-full">
      <p>&copy; {new Date().getFullYear()} Simple Bookshop. All rights reserved.</p>
    </footer>
  );
};

export default Footer;