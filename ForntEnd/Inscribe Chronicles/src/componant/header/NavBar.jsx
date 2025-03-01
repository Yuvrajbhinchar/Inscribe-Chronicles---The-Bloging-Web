import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import DescriptionIcon from "@mui/icons-material/Description";
import BarChartIcon from "@mui/icons-material/BarChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("Inscribe_Barrer_Token");
    localStorage.removeItem("isAuth");
    window.location.reload();
  };

  const handleWrite = () => {
    navigate("/write")
  }

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-md relative">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">Inscribe Chronicles</div>

      {/* Search Section */}
      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
        <SearchIcon className="text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="ml-2 bg-transparent outline-none text-gray-600 w-full hidden sm:block"
        />
      </div>

      {/* Icons Section */}
      <div className="flex items-center space-x-4">
        <button className="hidden md:flex items-center space-x-1 text-gray-700 font-medium" onClick={handleWrite}>
          <EditIcon />
          <span>Write</span>
        </button>
        <NotificationsIcon className="text-gray-700" />

        {/* Profile Section */}
        <div className="relative">
          {/* Profile Icon */}
          <div
            className="h-8 w-8 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            Y
          </div>

          {/* Dropdown Menu */}
          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
              <button className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full">
                <PersonIcon className="mr-2" /> Profile
              </button>
              <button className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full">
                <BookmarkIcon className="mr-2" /> Library
              </button>
              <button className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full">
                <DescriptionIcon className="mr-2" /> Stories
              </button>
              <button className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full">
                <BarChartIcon className="mr-2" /> Stats
              </button>
              <hr />
              <button
                onClick={handleLogOut}
                className="flex items-center px-4 py-2 text-red-600 hover:bg-gray-100 w-full"
              >
                <ExitToAppIcon className="mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
