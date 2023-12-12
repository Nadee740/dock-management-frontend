import { Doughnut } from "react-chartjs-2";

export const NeumorphicDoughnutChart = () => {
  const chartData = {
    labels: ["2016", "2017", "2018", "2019", "2020"],
    datasets: [
      {
        data: [100, 150, 200, 180, 250],
        backgroundColor: ["#64B5F6", "#1E88E5", "#81D4FA", "#FFB74D", "#546E7A"],
      },
    ],
  };

  return (
    <div className="neumorphic-container p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="neumorphic-chart bg-white p-6 rounded-lg shadow-inner">
        <Doughnut
          data={chartData}
          options={{
            cutout: 70, // Adjust the cutout value to control the size of the hole in the center
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
};
