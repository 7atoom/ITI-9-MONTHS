import React from "react";
import { useNavigate } from "react-router";

function FloatingButton({ route }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(route);
    }
  return (
    <div className="fixed bottom-4 right-4 bg-blue-500 w-12 h-12 flex items-center justify-center text-white rounded-full p-4 shadow-lg cursor-pointer hover:bg-blue-600 transition-colors">
      <button onClick={handleClick} className="text-2xl font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 mx-auto cursor-pointer text-white hover:text-blue-100 transition-colors font-bold"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
}

export default FloatingButton;
