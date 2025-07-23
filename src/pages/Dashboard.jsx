import { useEffect, useState } from "react";
import axios from "axios";
import ChartSection from "../components/ChartSection";
import Calendar from '../components/Calender';
import FinanceChart from "../components/Finance";
import StudentIcon from "../assets/icons/studentwhite.svg?react";
import TeacherIcon from "../assets/icons/teacherwhite.svg?react";
import EventIcon from "../assets/icons/calenderwhite.svg?react";
import FoodIcon from "../assets/icons/foodwhite.svg?react";
import UnpaidStudentTable from "../components/UnpaidStudentTable";

export default function Dashboard() {
  const [Stats, setStats] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dashboard/stats")
      .then((res) => {
        const styledData = res.data.map((item) => {
          switch (item.label) {
            case "Students":
              return {
                ...item,
                icon: <StudentIcon className="w-6 h-6 text-white" />,
                bgColor: "bg-[#4D44B5]",
              };
            case "Teachers":
              return {
                ...item,
                icon: <TeacherIcon className="w-6 h-6 text-white" />,
                bgColor: "bg-[#FB7D5B]",
              };
            case "Events":
              return {
                ...item,
                icon: <EventIcon className="w-6 h-6 text-white" />,
                bgColor: "bg-[#FCC43E]",
              };
            case "Foods":
              return {
                ...item,
                icon: <FoodIcon className="w-6 h-6 text-white" />,
                bgColor: "bg-[#303972]",
              };
            default:
              return item;
          }
        });

        setStats(styledData);
      })
      .catch((err) => {
        console.error("Failed to fetch stats:", err);
      });
  }, []);

  return (
    <div className="space-y-6">
      <div className="w-full h-28 bg-white rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {Stats.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-4 min-w-[180px]" >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.bgColor}`}>
              {item.icon}
            </div>
            <div> <h4 className="text-sm text-gray-500 font-medium"> {item.label} </h4>
              <p className="text-2xl font-semibold text-gray-800"> {item.value} </p>
            </div>
          </div>  
        ))}
      </div>
      <ChartSection />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Calendar />
        <FinanceChart />
      </div>
      <UnpaidStudentTable />
    </div>
  );
}
