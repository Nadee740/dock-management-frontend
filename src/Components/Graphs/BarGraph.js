
import { Bar } from "react-chartjs-2";
export const BarChart = () => {
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
    <div className="neumorphic-container p-6 bg-gray-100 rounded-lg shadow-lg ml-4 m-2">
    {/* <h2 className="text-center text-2xl mb-4">Bar Chart</h2> */}
    <div className="neumorphic-chart bg-white p-6 rounded-lg shadow-inner">
      <Bar
        data={chartData}
        options={{
          scales: {
            x: {
              type: 'category',
              labels: ["2016", "2017", "2018", "2019", "2020"],
              grid: {
                color: "rgba(0, 0, 0, 0.1)",
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                color: "rgba(0, 0, 0, 0.1)",
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Deliveries from 2016-2020",
              padding: { top: 10, bottom: 15 },
              font: {
                size: 16,
              },
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  </div>
  );
};