import React from 'react';
import './review.css';

const review = () => {
  return (
    <>
      <h1 className='titulo'>Write a Review</h1>
      <div className='form-review'>
        <form>
          <label>Your Name</label>
          <input className='input' type='text' />

          <label>
            Your Email
            <input className='input' type='email' />
          </label>
          <br />
          <label>
            <textarea>Write a Review</textarea>
          </label>
          <br />
          <button className='btn-form' type='submit'>
            Publish
          </button>
        </form>
      </div>
    </>
  );
};

export default review;
