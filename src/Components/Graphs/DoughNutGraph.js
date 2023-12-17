import { Doughnut } from "react-chartjs-2";

export const NeumorphicDoughnutChart = ({data,totol_no_of_orders}) => {
    const labels=[];
    const datasets=[]
    let sum=0;
    for(let i=0;i<4;i++){
        labels.push(data[i]._id)
        let val=(data[i].count/totol_no_of_orders)*100.0
        datasets.push(val)
    }
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: datasets,
        backgroundColor: ["#64B5F6", "#1E88E5", "#81D4FA", "#FFB74D", "#546E7A"],
      },
    ],
  };

  return (
    <div className="neumorphic-container mt-2 p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="neumorphic-chart bg-white p-6 rounded-lg shadow-inner">
        <Doughnut
          data={chartData}
          options={{
            cutout: 70, // Adjust the cutout value to control the size of the hole in the center
            plugins: {
              title: {
                display: true,
                text: "Most Frequent Booked Time Slots",
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
