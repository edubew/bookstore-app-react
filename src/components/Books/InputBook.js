import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './books.css';

const InputBook = () => {
  const [state, setState] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(InputBook(state.title, state.author));
    state.title = '';
    state.author = '';
  };

    <div className="input__container">
      <h1>ADD NEW BOOK</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Book title..." required onChange={handleChange} />
        <input type="text" name="name" placeholder="Author..." required onChange={handleChange} />
        <button className="add__btn" type="submit" onClick={handleSubmit}>ADD BOOK</button>
      </form>
    </div>;
};

export default InputBook;
