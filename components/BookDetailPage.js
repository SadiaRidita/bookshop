import React from 'react';
import { useRouter } from 'next/router';

const BookDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>Book Detail Page</h1>
      <p>Book ID: {id}</p>
    </div>
  );
};

export default BookDetailPage;
