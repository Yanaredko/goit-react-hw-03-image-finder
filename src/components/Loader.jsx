import React from 'react';
import { Puff } from 'react-loader-spinner';

const CustomLoader = () => (
  <div className="Loader">
    <Puff
      color="#00BFFF" 
      height={100} 
      width={100} 
    />
  </div>
);

export default CustomLoader;

