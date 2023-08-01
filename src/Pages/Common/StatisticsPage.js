import BarChartComponent from "../../Components/BarChart";
import CombiningCharts from "../../Components/MultipleCharts";
import StatisticsComponent from "../../Components/StatisticsComponent";

const StatisticsPage = ({ iseditable }) => {
  return (
    <>
      <div className="w-full admin-dashboard overflow-hidden overflow-y-scroll">
        <div className="flex flex-row w-full w-full items-center p-3 justify-between">
          <section class=" text-black w-5/6 p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-20 overflow-x-scroll">
            <StatisticsComponent/>
          </section>
        </div>
      </div>
    </>
  );
};

export default StatisticsPage;
