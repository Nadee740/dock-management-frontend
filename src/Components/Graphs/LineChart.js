import React from "react";
import { Line } from "react-chartjs-2";
function LineChart() {
    const chartData = {
        labels: ["2016", "2017", "2018", "2019", "2020"],
        datasets: [
          {
            label: "Users Gained",
            data: [100, 150, 200, 180, 250], // Replace these values with your actual data
            backgroundColor: "rgba(75,192,192,0.6)", // Adjust the color as needed
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 1,
          },
        ],
      };
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg shadow-inner p-6  rounded-lg shadow-lg  m-2">
      {/* <h2 className="text-center text-2xl mb-4">Line Chart</h2> */}
      <div className="neumorphic-chart bg-white p-6 rounded-lg shadow-inner">
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
      </div>

    </div>
  );
}
export default LineChart;