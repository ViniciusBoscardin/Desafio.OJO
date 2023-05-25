import React, { useEffect, useState } from 'react';
import './review.css';

const Review = ({ filmeId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');
  const [allReviews, setAllReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let arrayLocalStorage = [];
    const objectFromReview = {
      name,
      email,
      review,
      filmeId,
    };
    setAllReviews((prevState) => [objectFromReview, ...prevState]);
    arrayLocalStorage.push(objectFromReview);
    arrayLocalStorage.push(...allReviews);
    localStorage.setItem('review', JSON.stringify(arrayLocalStorage));
  };

  useEffect(() => {
    const getReview = localStorage.getItem('review');
    if (!!getReview) {
      setAllReviews(JSON.parse(getReview));
    }
  }, []);

  return (
    <>
      <h1 className='titulo'>Write a Review</h1>
      <div
        className='form-review'
        style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
      >
        <form onSubmit={handleSubmit}>
          <div className='container-input'>
            <div className='input-box'>
              <label className='label'>Your Name</label>
              <input
                className='input'
                type='text'
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className='input-box'>
              <label className='label'>Your Email</label>
              <input
                className='input'
                type='email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>

          <div className='input-box'>
            <label className='label'>Write a Review</label>
            <textarea
              className='input'
              value={review}
              onChange={(e) => {
                setReview(e.target.value);
              }}
            />
          </div>

          <button className='btn-form' type='submit'>
            Publish
          </button>
        </form>
      </div>
    </>
  );
};

export default Review;
