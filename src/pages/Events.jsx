// src/pages/Events.jsx
import CalendarPanel from "../components/EventCalender";
import SchedulePanel from "../components/SchedulePanel";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Events() {
  return (
    <div className="flex bg-[#F3F3FB] min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="p-6 flex-1 overflow-auto">
          <div className="flex gap-6">
            <div className="flex-1">
              <CalendarPanel />
            </div>
            <div className="w-[340px]">
              <SchedulePanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
