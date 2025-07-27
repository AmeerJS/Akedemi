// src/components/EventCalendar.jsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function EventCalendar() {
  const [month, setMonth] = useState("January");
  const [year, setYear] = useState("2021");
  const [isMonthOpen, setIsMonthOpen] = useState(false);
  const [isYearOpen, setIsYearOpen] = useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from({ length: 10 }, (_, i) => 2021 + i);

  const days = [
    ["", "", "1", "2", "3", "4", "5"],
    ["6", "7", "8", "9", "10", "11", "12"],
    ["13", "14", "15", "16", "17", "18", "19"],
    ["20", "21", "22", "23", "24", "25", "26"],
    ["27", "28", "29", "30", "31", "", ""],
  ];

  return (
    <div className="flex-1 bg-white p-6 rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[#1E1E1E]">Calendar</h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="relative">
              <div
                onClick={() => setIsMonthOpen(!isMonthOpen)}
                className="flex items-center justify-between gap-2 text-md px-4 py-1 border border-[#4D44B5] rounded-full bg-white text-[#4D44B5] hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition cursor-pointer"
                role="combobox"
                aria-expanded={isMonthOpen}
                aria-haspopup="listbox"
              >
                <span>{month}</span>
                <ChevronDown className="w-4 h-4" />
              </div>

              {isMonthOpen && (
                <ul
                  className="absolute top-full mt-1 w-full bg-white border rounded-lg shadow-lg z-10"
                  role="listbox"
                >
                  {months.map((m) => (
                    <li
                      key={m}
                      role="option"
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setMonth(m);
                        setIsMonthOpen(false);
                      }}
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="relative">
            <div
              onClick={() => setIsYearOpen(!isYearOpen)}
              className="flex items-center justify-between gap-2 text-md px-4 py-1 border border-[#4D44B5] rounded-full bg-white text-[#4D44B5] hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition cursor-pointer"
              role="combobox"
              aria-expanded={isYearOpen}
              aria-haspopup="listbox"
            >
              <span>{year}</span>
              <ChevronDown className="w-4 h-4" />
            </div>

            {isYearOpen && (
              <ul
                className="absolute top-full mt-1 w-full bg-white border rounded-lg shadow-lg z-10"
                role="listbox"
              >
                {years.map((y) => (
                  <li
                    key={y}
                    role="option"
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setYear(y);
                      setIsYearOpen(false);
                    }}
                  >
                    {y}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className="bg-[#4B2AAD] text-white text-sm px-4 py-2 rounded-full font-medium hover:bg-[#3a2193] transition">
            + New Student
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-600 mb-3">
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((day) => (
          <div key={day} className="font-medium">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-3 text-sm">
        {days.flat().map((day, idx) => (
          <div
            key={idx}
            className={`h-30 rounded-lg flex items-start justify-start p-2 text-gray-700 border border-gray-400`}
          >
            {day && <span className="font-semibold">{day}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
