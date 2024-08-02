import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';
import { data as database } from '../../../utils/dummyData';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function LineChart(){

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  
const labels = [...new Set(database.map(el => el.major_city))];

const data = {
  labels: labels.map(city => city.toUpperCase()),
  datasets: [
    {
      fill: true,
      label: 'Registros',
      data: labels.map(city => database.filter(el => el.major_city === city).length),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
  

    return(
      <TitleCard title={"Cantidad de registros por país"}>
          <Bar data={data} options={options}/>
      </TitleCard>
    )
}


export default LineChart