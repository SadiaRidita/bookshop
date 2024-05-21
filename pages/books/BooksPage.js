import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Books from '../../components/Books'; 
import Footer from '../../components/Footer';
import "../../styles/globals.css"; 

const getData = async () => {
  const res = await fetch("https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books?_limit=6");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setBooks(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Books books={books} /> 
      )}
      <Footer />
    </div>
  );
};

export default BooksPage;
