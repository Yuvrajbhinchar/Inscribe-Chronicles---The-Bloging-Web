import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">Inscribe Chronicles</div>

      {/* Search Section */}
      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
        <SearchIcon className="text-gray-500" />
        {/* Hide the input below 500px */}
        <input
          type="text"
          placeholder="Search"
          className="ml-2 bg-transparent outline-none text-gray-600 w-full hidden sm:block"
        />
      </div>

      {/* Icons Section */}
      <div className="flex items-center space-x-4">
        {/* "Write" Button - Hidden below 700px */}
        <button className="hidden md:flex items-center space-x-1 text-gray-700 font-medium">
          <EditIcon />
          <span>Write</span>
        </button>
        {/* Notification Icon */}
        <NotificationsIcon className="text-gray-700" />
        {/* User Avatar */}
        <div className="h-8 w-8 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold">
          Y
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
