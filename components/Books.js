"use client";
import Link from 'next/link';
import React from 'react';

const Books = ({ books }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-gray-300 rounded-lg p-4 w-full max-w-md">
        {books.map((book, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold mb-1">
              <Link href={`/books/${book.id}`}>{book.title}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;