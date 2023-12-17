
import { Bar } from "react-chartjs-2";
export const BarChart = ({data}) => {
    const labels=[]
    const datasets=[]
    const d=new Date();
    function dateFormater(inputDate) {
        const date = new Date(inputDate);
        let month = (date.getMonth() + 1).toString();
        let year = date.getFullYear();
        let day = date.getDate().toString();
        if (month.length < 2) {
          month = "0" + month;
        }
        if (day.length < 2) day = "0" + day;
        return [year, month, day].join("-");
      }
    for(let i=0;i<7;i++){
        d.setDate(d.getDate() - 1);
        labels.push(`day ${i+1}`)
    }
    const chartData = {
        labels: labels,
        datasets: [
          {
            label: "Delivery for past week",
            data: [7,8,1,0,2,1,1], 
            backgroundColor: "rgba(75,192,192,0.6)", 
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
              text: "Deliveries for past week",
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