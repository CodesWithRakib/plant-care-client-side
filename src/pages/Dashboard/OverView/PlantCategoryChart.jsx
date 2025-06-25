import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PlantCategoryChart = ({ categories }) => {
  if (!categories || Object.keys(categories).length === 0) {
    return null;
  }

  const categoryNames = Object.keys(categories);
  const categoryCounts = Object.values(categories);

  // Generate distinct HSL colors evenly spaced by hue
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
        borderWidth: 1,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "65%", // makes doughnut hole size
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#6b7280", // Tailwind gray-500
          font: {
            size: 14,
          },
          padding: 20,
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="h-80">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PlantCategoryChart;
