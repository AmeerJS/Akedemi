import { useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function FinanceChart() {
  const chartRef = useRef(null);

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: [40, 60, 35, 80, 90, 75, 65],
        backgroundColor: "#FCC43E",
        borderRadius: 4,
        barThickness: 12,
        categoryPercentage: 0.4,
        barPercentage: 0.8,
      },
      {
        label: "Expenses",
        data: [20, 30, 25, 50, 60, 45, 35],
        backgroundColor: "#FB7D5B",
        borderRadius: 4,
        barThickness: 12,
        categoryPercentage: 0.4,
        barPercentage: 0.8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    layout: {
      padding: {
        top: 10,
        bottom: 0,
        left: 0,
        right: 0,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: (val) => `${val}`,
          maxTicksLimit: 6,
        },
        grid: {
          drawTicks: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="rounded-3xl p-4 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">School Finance</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "#FCC43E" }}
            ></span>
            <span className="text-sm text-gray-600">This Week</span>
          </div>
          <div className="flex items-center gap-1">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "#FB7D5B" }}
            ></span>
            <span className="text-sm text-gray-600">Last Week</span>
          </div>
        </div>
      </div>

      <div className="h-[350px] w-full">
        <Bar ref={chartRef} options={options} data={data} />
      </div>
    </div>
  );
}
