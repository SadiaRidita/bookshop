import React, { useState } from 'react';

const NewBookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author_id: '',
    pages: '',
    releaseDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to add new book');
      }
      setFormData({
        title: '',
        author_id: '',
        pages: '',
        releaseDate: '',
      });
      alert('New book added successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to add new book');
    }
  };

  return (
    <div>
      <h1>Add New Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="author_id">Author ID:</label>
          <input
            type="text"
            id="author_id"
            name="author_id"
            value={formData.author_id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="pages">Number of Pages:</label>
          <input
            type="number"
            id="pages"
            name="pages"
            value={formData.pages}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="releaseDate">Release Date:</label>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default NewBookForm;