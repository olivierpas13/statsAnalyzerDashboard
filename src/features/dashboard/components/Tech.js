import { Doughnut } from "react-chartjs-2";
import TitleCard from "../../../components/Cards/TitleCard";
import Subtitle from "../../../components/Typography/Subtitle";

function Tech() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const labels = ["Con fibra óptica", "Sin fibra óptica"];
  const data = {
    labels,
    datasets: [
      {
        label: "Registros",
        data: [22, 78],
        backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      className={
        "h-3/4 card w-full p-6 bg-base-100 shadow-xl " +
        "mt-6  text-left"
      }
    >
      <Subtitle >
        {"Distribución de tecnología" }
      </Subtitle>
      <div className="divider mt-2"></div>
      <div className="flex justify-center items-center h-4/5">


      <Doughnut options={options} data={data} />
      </div>
    </div>
  );
}

export default Tech;
