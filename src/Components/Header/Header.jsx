import React from "react";
import icon from "../../Assets/icon128.png";

const Header = () => {
  return (
    <div className="flex items-center justify-center p-4 gap-4 border-b-2 border-gray-300 font-inter">
      <img src={icon} alt="chef-claude-icon" className="w-16 h-16" />
      <h1 className="text-xl font-midium">Chef Claude</h1>
    </div>
  );
};

export default Header;
