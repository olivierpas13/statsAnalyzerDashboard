import DashboardStats from "./components/DashboardStats";
import AmountStats from "./components/AmountStats";
import PageStats from "./components/PageStats";

import WifiIcon from "@heroicons/react/24/outline/WifiIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
import UserChannels from "./components/UserChannels";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DownArrowIcon from "@heroicons/react/24/outline/ArrowDownIcon";
import UpArrowIcon from "@heroicons/react/24/outline/ArrowUpIcon";
import { useDispatch } from "react-redux";
import { showNotification } from "../common/headerSlice";
import DoughnutChart from "./components/DoughnutChart";
import { data } from "../../utils/dummyData";
import Tech from "./components/Tech";
import InternetSunburst from "./components/InternetSunburst";
import TitleCard from "../../components/Cards/TitleCard";
import Subtitle from "../../components/Typography/Subtitle";
const totalSpeedDown = data.reduce((sum, entry) => sum + entry.speed_down, 0);
const averageSpeedDown = totalSpeedDown / data.length;

const totalSpeedUp = data.reduce((sum, entry) => sum + entry.speed_up, 0);
const averageSpeedUp = totalSpeedUp / data.length;

const totalLMI = data.reduce((sum, entry) => sum + entry.income_lmi, 0);
const averageLMI = totalLMI / data.length;

const totalBandwidth = data.reduce(
  (sum, entry) => sum + entry.internet_perc_broadband,
  0
);
const averageBandwidth = totalBandwidth / data.length;

const statsData = [
  {
    title: "Velocidad de bajada promedio",
    value: averageSpeedDown.toFixed(4),
    icon: <DownArrowIcon className="w-8 h-8" />,
  },
  {
    title: "Velocidad de subida promedio",
    value: averageSpeedUp.toFixed(4),
    icon: <UpArrowIcon className="w-8 h-8" />,
  },
  {
    title: "LMI promedio",
    value: averageLMI.toFixed(4),
    icon: <CircleStackIcon className="w-8 h-8" />,
  },
  {
    title: "Ancho de banda promedio",
    value: averageBandwidth.toFixed(4),
    icon: <WifiIcon className="w-8 h-8" />,
  },
];

function Dashboard() {
  const dispatch = useDispatch();

  const updateDashboardPeriod = (newRange) => {
    // Dashboard range changed, write code to refresh your values
    dispatch(
      showNotification({
        message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`,
        status: 1,
      })
    );
  };

  return (
    <>
      {/** ---------------------- Select Period Content ------------------------- */}
      {/* <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod}/> */}

      {/** ---------------------- Different stats content 1 ------------------------- */}
      <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
        {statsData.map((d, k) => {
          return <DashboardStats key={k} {...d} colorIndex={k} />;
        })}
      </div>

      {/** ---------------------- Different charts ------------------------- */}
      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <LineChart />
        <Tech />
        {/* <BarChart /> */}
      </div>

      {/** ---------------------- Different stats content 2 ------------------------- */}

      {/* <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
        <AmountStats />
        <PageStats />
      </div> */}

      {/** ---------------------- User source channels table  ------------------------- */}

      <div className={"h-screen card w-full p-6 bg-base-100 shadow-xl mt-6"}>
        <Subtitle>{"Representación de tecnologías en distintos paises"}</Subtitle>
        <div className="divider mt-2"></div>

        <div className={`h-3/4 w-full bg-base-100 flex justify-center`}>
          <InternetSunburst />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
