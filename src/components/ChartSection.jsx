import React, { useRef, useEffect } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Tooltip,
  Filler,
  Legend
);

const ChartSection = () => {
  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = canvasRef.current.getContext("2d");

    const gradientGold = ctx.createLinearGradient(0, 0, 0, 300);
    gradientGold.addColorStop(0, "rgba(252, 196, 62, 0.4)");
    gradientGold.addColorStop(1, "rgba(252, 196, 62, 0)");

    const gradientOrange = ctx.createLinearGradient(0, 0, 0, 300);
    gradientOrange.addColorStop(0, "rgba(251, 125, 91, 0.4)");
    gradientOrange.addColorStop(1, "rgba(251, 125, 91, 0)");

    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    chartRef.current = new ChartJS(ctx, {
      type: "line",
      data: {
        labels: months,
        datasets: [
          {
            label: "This Week",
            data: [10, 25, 40, 45, 30, 50, 27, 83, 22, 58, 67, 69],
            borderColor: "#FCC43E",
            backgroundColor: gradientGold,
            fill: true,
            tension: 0.4,
            pointRadius: 3,
            pointHoverRadius: 6,
          },
          {
            label: "Last Week",
            data: [22, 36, 48, 66, 40, 53, 84, 45, 76, 22, 11, 87],
            borderColor: "#FB7D5B",
            backgroundColor: gradientOrange,
            fill: true,
            tension: 0.4,
            pointRadius: 3,
            pointHoverRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 1000,
          easing: "easeOutQuart",
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            backgroundColor: "#fff",
            titleColor: "#000",
            bodyColor: "#000",
            borderColor: "#ccc",
            borderWidth: 1,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "#666",
              maxRotation: 0,
              minRotation: 0,
            },
          },
          y: {
            min: 0,
            max: 100,
            ticks: {
              stepSize: 25,
              color: "#666",
            },
            grid: {
              color: "#f0f0f0",
              borderDash: [5, 5],
            },
          },
        },
      },
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, []);

  return (
    <div className="w-full bg-white p-4 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold text-gray-700">School Perfomance</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FCC43E" }}></span>
            <span className="text-sm text-gray-600">This Week</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FB7D5B" }}></span>
            <span className="text-sm text-gray-600">Last Week</span>
          </div>
        </div>
      </div>

      {/* Chart Container */}
      <div className="relative h-[300px] w-full">
        <canvas ref={canvasRef} className="w-full h-full"></canvas>
      </div>
    </div>
  );
};

export default ChartSection;
