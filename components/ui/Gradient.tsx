import React from 'react';

const Gradient = () => {
  return (
    <div>
      {/* First gradient: Cyan to pink */}
      <div className="fixed -top-32 -left-32 w-[900px] h-[900px] bg-gradient-to-br from-cyan-400/60 via-pink-300/50 to-transparent rounded-full blur-[200px] -z-10"></div>

      {/* Second gradient: Adds more depth */}
      <div className="fixed top-20 right-20 w-[600px] h-[600px] bg-gradient-to-bl from-pink-400/60 via-cyan-300/50 to-transparent rounded-full blur-[150px] -z-20"></div>
    </div>
  );
};

export default Gradient;
