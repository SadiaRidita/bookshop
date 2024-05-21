import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const BookDetailPage = ({ book }) => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="border border-gray-300 rounded-lg p-4 w-full max-w-md">
            <h1>HERE IS THE BOOK DETAILS</h1>
          <h1 className="text-lg font-semibold mb-1">Title: {book.title}</h1>
          <p className="text-gray-600">Author Id: {book.author_id}</p>
          <p className="text-gray-600">Number of Pages: {book.pages}</p>
          <p className="text-gray-600">Book Release Date: {book.releaseDate}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books/${params.id}`);
  const book = await res.json();

  if (!book) {
    return {
      notFound: true,
    };
  }

  return {
    props: { book },
  };
}

export default BookDetailPage;
