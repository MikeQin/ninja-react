import React from 'react';

const BookDetails = (({ book }) => {

  return (
    <div key={book.id}>
      <h3>{book.title}</h3>
    </div>
  );
});

export default BookDetails;