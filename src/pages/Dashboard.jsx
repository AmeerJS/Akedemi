import { useEffect, useState } from "react";
import StatsCard from "../components/StatsCard";

export default function Dashboard() {
  const [Stats, setStats] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard/stats")
      .then((res) => res.json())
      .then((data) => {
        const styledData = data.map((item) => {
          switch (item.label) {
            case "Students":
              return { ...item, icon: "👨‍🎓", color: "bg-orange-100", textColor: "text-orange-500" };
            case "Teachers":
              return { ...item, icon: "👩‍🏫", color: "bg-purple-100", textColor: "text-purple-500" };
            case "Events":
              return { ...item, icon: "📅", color: "bg-pink-100", textColor: "text-pink-500" };
            case "Foods":
              return { ...item, icon: "🍱", color: "bg-indigo-100", textColor: "text-indigo-500" };
            default:
              return item;
          }
        });
        setStats(styledData);
      });
  }, []);

  return (
    <div className="space-y-4">
      <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Stats.map((item, idx) => (
          <StatsCard key={idx} {...item} />
        ))}
      </div>
    </div>
      <div>Charts Section</div>
      <div>Calendar</div>
      <div>Student Table</div>
    </div>
  );
}
