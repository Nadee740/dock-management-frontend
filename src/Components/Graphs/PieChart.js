import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart() {
    const chartData = {
        labels: ["2016", "2017", "2018", "2019", "2020"],
        datasets: [
          {
            label: "Users Gained",
            data: [100, 150, 200, 180, 250], // Replace these values with your actual data
            backgroundColor: ["#64B5F6", "#1E88E5", "#81D4FA", "#FFB74D", "#546E7A"],// Adjust the color as needed
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 1,
          },
        ],
      };
  return (
<div className="neumorphic-container p-6 bg-gray-100 rounded-lg shadow-lg">
  <div className="neumorphic-chart bg-white p-6 rounded-lg shadow-inner">
    <Pie
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Users Gained between 2016-2020",
            padding: { top: 10, bottom: 15 },
            font: {
              size: 16,
            },
          },
        },
      }}
    />
  </div>
</div>

  );
}
export default PieChart;