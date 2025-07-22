import {  useRef } from "react";
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

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: [12000, 15000, 10000, 17000, 14000, 16000],
        backgroundColor: function (context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;

          if (!chartArea) return;

          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, "#FCC43E");

          return gradient;
        },
        borderRadius: 6,
        barThickness: 24,
      },
      {
        label: "Expenses",
        data: [10000, 12000, 8000, 15000, 11000, 13000],
        backgroundColor: function (context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;

          if (!chartArea) return;

          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, "#FB7D5B");

          return gradient;
        },
        borderRadius: 6,
        barThickness: 24,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (val) => `$${val}`,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">School Finance</h3>
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
}
