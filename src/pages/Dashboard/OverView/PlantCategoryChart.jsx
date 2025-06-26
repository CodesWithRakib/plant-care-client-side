import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PlantCategoryChart = ({ categories }) => {
  const [legendColor, setLegendColor] = useState("#6b7280"); // default light mode color

  useEffect(() => {
    const isDark =
      document.documentElement.classList.contains("dark") ||
      document.documentElement.getAttribute("data-theme") === "dark";

    const color = isDark ? "#d1d5db" : "#374151"; // gray-300 for dark, gray-700 for light
    setLegendColor(color);
  }, []);

  if (!categories || Object.keys(categories).length === 0) {
    return (
      <div className="bg-white dark:bg-zinc-800 text-center p-6 rounded-lg shadow-sm">
        <p className="text-gray-500 dark:text-gray-400">
          No category data available
        </p>
      </div>
    );
  }

  const categoryNames = Object.keys(categories);
  const categoryCounts = Object.values(categories) ?? [];

  const generateColors = (count) => {
    const colors = [];
    const hueStep = 360 / count;
    for (let i = 0; i < count; i++) {
      colors.push(`hsl(${i * hueStep}, 70%, 60%)`);
    }
    return colors;
  };

  const backgroundColors = generateColors(categoryNames.length);

  const data = {
    labels: categoryNames,
    datasets: [
      {
        data: categoryCounts,
        backgroundColor: backgroundColors,
        borderColor: "#fff",
        borderWidth: 1,
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "65%",
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: legendColor,
          font: { size: 14 },
          padding: 16,
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="h-80 sm:h-96 w-full bg-white dark:bg-zinc-900 rounded-lg shadow-sm p-4">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PlantCategoryChart;
