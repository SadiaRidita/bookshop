import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: '/',
      name: 'Home',
    },
    {
      id: 2,
      link: '/books/booksPage', 
      name: 'Book Page',
    },
    {
      id: 3,
      link: '/form',
      name: 'Form',
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed top-0 left-0 z-50">
      <div>
        <h3 className="text-3xl font-bold ml-2">
          <a className="link-underline link-underline-black" href="/" target="_blank" rel="noreferrer">
            Simple Bookshop
          </a>
        </h3>
      </div>

      <ul className="hidden md:flex items-center space-x-4">
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className="nav-links text-lg font-medium text-gray-300 hover:text-white duration-200"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link href={link} onClick={() => setNav(!nav)}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
