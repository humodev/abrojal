import React from 'react';

const InProgress: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center text-4xl font-bold text-gray-700 break-words">
        SITIO EN
        <img src="/images/progreso.png" alt="En progreso" className="mt-4" />
      </div>
    </div>
  );
};

export default InProgress;