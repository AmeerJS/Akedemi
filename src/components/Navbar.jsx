import { useLocation } from "react-router-dom";
import SearchIcon from "../assets/icons/search.svg?react";
import NotificationIcon from "../assets/icons/bell.svg?react";
import GearIcon from "../assets/icons/gear.svg?react";

export default function Navbar() {
  const location = useLocation();
  
  const getPageTitle = (path) => {
    const titles = {
      "/dashboard": "Dashboard",
      "/students": "Students",
      "/teachers": "Teachers",
      "/events": "Events",
      "/finance": "Finance",
      "/food": "Food Menu",
      "/user": "User Profile",
      "/chat": "Chat",
      "/activity": "Latest Activity",
    };
    return titles[path] || "Page";
  };

  const pageTitle = getPageTitle(location.pathname);

  return (
    <div className="w-full h-[60px] bg-gray-100 flex justify-between items-center px-6 py-12">
      <h2 className="text-xl font-semibold">{pageTitle}</h2>
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-white px-8 py-3 rounded-full">
          <SearchIcon className="w-5 h-5" />
          <input
            type="text"
            placeholder="Search here..."
            className="bg-white px-3 py-1 rounded-full text-sm focus:outline-none"
          />
        </div>
        <span className="bg-white p-3 rounded-full">
          <NotificationIcon className="w-6 h-6" />
        </span>
        <span className="bg-white p-3 rounded-full">
          <GearIcon className="w-6 h-6" />
        </span>
      </div>
    </div>
  );
}
