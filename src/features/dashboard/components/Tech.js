import { Doughnut } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';

function Tech() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const labels = ["Con fibra óptica", "Sin fibra óptica"];
  const data = {
    labels,
    datasets: [
      {
        label: 'Registros',
        data: [22, 78],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      }
    ],
  };

  return (
    <TitleCard title={"Tecnología usada"}>
      <Doughnut options={options} data={data} />
    </TitleCard>
  );
}

export default Tech;
