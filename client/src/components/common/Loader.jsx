import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div
        className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"
        style={{ borderTopColor: 'transparent' }}
      ></div>
    </div>
  );
};
export default Loader;