"use client";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function SubnetChart() {
  
  const data = {
    labels: ["SUBNET1", "SUBNET2", "SUBNET3", "SUBNET4"],
    datasets: [
      {
        label: "Emission Rate",
        data: [12, 19, 9, 22],
        borderColor: "#4ade80",
        backgroundColor: "rgba(74, 222, 128, 0.3)",
      },
      {
        label: "Network Weights",
        data: [8, 15, 14, 18],
        borderColor: "#60a5fa",
        backgroundColor: "rgba(96, 165, 250, 0.3)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "white" } },
    },
    scales: {
      x: { ticks: { color: "#ddd" } },
      y: { ticks: { color: "#ddd" } },
    },
  };

  return (
    <div className="w-full h-[400px]">
      <Line data={data} options={options} />
    </div>
  );
}
