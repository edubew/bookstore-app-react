import React, { useSelector } from 'react-redux';
import InputBook from './InputBook';
import Book from './Book';

const BookList = () => {
  const bookList = useSelector((state) => state.books);
  return (
    <div>
      <ul>
        {bookList.books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} id={book.id} book={book} />
        ))}
      </ul>
      <InputBook />
    </div>
  );
};

export default BookList;
