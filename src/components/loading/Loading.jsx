import React from 'react';
import './loading.css';

function Loading() {
  return (
    <div className='loading-overlay centralize' data-testid='loading'>
      Loading...
    </div>
  );
}

export default Loading;
