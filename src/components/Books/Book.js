import React from 'react';

const Book = () => (
  <ul>
    <li className="book__container">
      <small>Action</small>
      <h2>The Hunger Games</h2>
      <p>Suzanne Collins</p>
      <div className="cta__container">
        <button type="submit">Comments</button>
        <button type="submit">Remove</button>
        <button type="submit">Edit</button>
      </div>
    </li>
  </ul>
);

export default Book;
