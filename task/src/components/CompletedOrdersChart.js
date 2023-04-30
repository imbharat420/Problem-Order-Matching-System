import { useSelector } from "react-redux";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, Title);

const CompletedOrdersChart = ({ completedOrders }) => {
  const data = useSelector((state) => state.orders.completedOrders);

  const chartData = {
    labels: completedOrders.map((_, index) => `Order ${index + 1}`),
    datasets: [
      {
        label: "Completed Orders",
        data: data.map((order) => order.price),
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h2 className="text-xl font-bold mb-4">Completed Orders Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default CompletedOrdersChart;
