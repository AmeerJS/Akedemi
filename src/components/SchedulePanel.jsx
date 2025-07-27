import { CalendarDays, Clock } from "lucide-react";

const events = [
  {
    title: "Basic Algorithm",
    subject: "Algorithm",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
    color: "#4B2AAD",
  },
  {
    title: "Basic Art",
    subject: "Art",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
    color: "#FB7D5B",
  },
  {
    title: "HTML & CSS Class",
    subject: "Programming",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
    color: "#FCC43E",
  },
  {
    title: "Simple Past Tense",
    subject: "English",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
    color: "#4B2AAD",
  },
];

export default function SchedulePanel() {
  return (
    <div className="w-[320px] space-y-5">
      {/* Schedule Header */}
      <div className="bg-white p-5 rounded-2xl">
        <h3 className="text-lg font-semibold text-[#1E1E1E]">
          Schedule Details
        </h3>
        <p className="text-sm text-gray-500 mt-1">Thursday, 10th April, 2021</p>
      </div>

      {/* Event Cards */}
      {events.map((event, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl overflow-hidden border-l-4"
          style={{ borderColor: event.color }}
        >
          <div className="p-4 space-y-1">
            <h4 className="text-base font-medium text-[#1E1E1E]">
              {event.title}
            </h4>
            <p className="text-sm text-gray-500">{event.subject}</p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
              <CalendarDays className="w-4 h-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock className="w-4 h-4" />
              <span>{event.time}</span>
            </div>
          </div>
        </div>
      ))}

      {/* View More Button */}
      <button className="ml-15 w-50 bg-gray-300 text-[#4B2AAD] text-sm py-4 rounded-full font-medium hover:bg-[#e4e3f9] transition">
        View More
      </button>
    </div>
  );
}
