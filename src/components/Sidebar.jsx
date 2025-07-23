import HomeIcon from "../assets/icons/home.svg?react";
import StudentsIcon from "../assets/icons/student.svg?react";
import TeachersIcon from "../assets/icons/teacher.svg?react";
import EventsIcon from "../assets/icons/calender.svg?react";
import FinanceIcon from "../assets/icons/finance.svg?react";
import FoodIcon from "../assets/icons/food.svg?react";
import UserIcon from "../assets/icons/user.svg?react";
import ChatIcon from "../assets/icons/chat.svg?react";
import LatestActivityIcon from "../assets/icons/activity.svg?react";
import LogoIcon from "../assets/icons/logo.svg?react";

export default function Sidebar() {
  const navItems = [
    { icon: <HomeIcon className="w-6 h-6" />, label: "Dashboard" },
    { icon: <StudentsIcon className="w-6 h-6" />, label: "Students" },
    { icon: <TeachersIcon className="w-6 h-6" />, label: "Teachers" },
    { icon: <EventsIcon className="w-6 h-6" />, label: "Event" },
    { icon: <FinanceIcon className="w-6 h-6" />, label: "Finance" },
    { icon: <FoodIcon className="w-6 h-6" />, label: "Food" },
    { icon: <UserIcon className="w-6 h-6" />, label: "User" },
    { icon: <ChatIcon className="w-6 h-6" />, label: "Chat" },
    {
      icon: <LatestActivityIcon className="w-6 h-6" />,
      label: "Latest Activity",
    },
  ];
  return (
    <div className="w-[280px] h-422 bg-[#4B2AAD] text-white flex flex-col justify-between">
      <div className="pl-10 py-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center"><LogoIcon /></div>
          <h1 className="text-2xl font-bold">Akademi</h1>
        </div>
      </div>

      <nav className="flex-1 pl-6 py-4 space-y-1">
        {navItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 px-4 py-3 rounded-l-full transition-all duration-200 cursor-pointer text-gray-300 hover:bg-gray-100 hover:text-[#4B2AAD]">
            <div className="w-6 h-6">{item.icon}</div>
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </nav>
      <div className="px-6 py-4 text-xs text-gray-300">
        <p>Akademi – School Dashboard</p>
        <p className="opacity-70">Made with ❤️ by Ameer Ali</p>
      </div>
    </div>
  );
}
