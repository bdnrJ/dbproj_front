// Popup.tsx
import React, { useState } from 'react';

interface PopupProps {
  children: React.ReactNode;
  buttonText: string;
}

const Popup: React.FC<PopupProps> = ({ children, buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <>
      <button onClick={openPopup} className="px-4 py-2 bg-blue-500 text-white rounded mt-10">{buttonText}</button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black opacity-50 absolute inset-0" onClick={closePopup}></div>
          <div className="bg-white w-auto h-auto p-5 rounded shadow-lg relative">
            <button onClick={closePopup} className="absolute right-2 top-2 text-gray-500 hover:text-gray-800">
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
