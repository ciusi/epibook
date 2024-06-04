import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="loading-spinner">
      <TailSpin
        height="80"
        width="80"
        color="#007bff"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loading;
