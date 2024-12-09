import React from "react";

const DressStyleBrowser = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100">
      <h1 className="text-xl font-bold mb-6">BROWSE BY DRESS STYLE</h1>
      <div className="grid grid-cols-2 gap-4 max-w-lg">
        {/* Casual */}
        <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-md">
          <img
            src="/52.png"
            alt="Casual"
            className="w-full h-32 object-cover rounded-t-md"
          />
          <p className="text-center text-lg font-medium mt-2">Casual</p>
        </div>

        {/* Formal */}
        <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-md">
          <img
            src="/51.png"
            alt="Formal"
            className="w-full h-32 object-cover rounded-t-md"
          />
          <p className="text-center text-lg font-medium mt-2">Formal</p>
        </div>

        {/* Party */}
        <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-md">
          <img
            src="/53.png"
            alt="Party"
            className="w-full h-32 object-cover rounded-t-md"
          />
          <p className="text-center text-lg font-medium mt-2">Party</p>
        </div>

        {/* Gym */}
        <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-md">
          <img
            src="/54.png"
            alt="Gym"
            className="w-full h-32 object-cover rounded-t-md"
          />
          <p className="text-center text-lg font-medium mt-2">Gym</p>
        </div>
      </div>
    </div>
  );
};

export default DressStyleBrowser;
