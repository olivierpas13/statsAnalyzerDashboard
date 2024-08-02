// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/sunburst
import { ResponsiveSunburst } from "@nivo/sunburst";

import { data as database } from "../../../utils/dummyData";
const InternetSunburst = () => {
  const chicago = database.filter((el) => el.major_city === "chicago");
  const newOrleans = database.filter((el) => el.major_city === "new orleans");
  const detroit = database.filter((el) => el.major_city === "detroit");
  const losAngeles = database.filter((el) => el.major_city === "los angeles");

  const data = {
    name: "nivo",
    color: "hsl(299, 70%, 50%)",
    children: [
      {
        name: "Chicago",
        color: "hsl(0, 70%, 50%)",
        children: [
          {
            name: "Sin fibra óptica",
            color: "hsl(30, 70%, 50%)",
            loc: chicago.filter((el) => el.technology === "Not Fiber").length,
          },
          {
            name: "Con fibra óptica",
            color: "hsl(90, 70%, 50%)",
            loc: chicago.filter((el) => el.technology === "Fiber").length,
          },
        ],
      },
      {
        name: "New Orleans",
        color: "hsl(60, 70%, 50%)",
        children: [
          {
            name: "Sin fibra óptica",
            color: "hsl(120, 70%, 50%)",
            loc: newOrleans.filter((el) => el.technology === "Not Fiber")
              .length,
          },
          {
            name: "Con fibra óptica",
            color: "hsl(180, 70%, 50%)",
            loc: newOrleans.filter((el) => el.technology === "Fiber").length,
          },
        ],
      },
      {
        name: "DETROIT",
        color: "hsl(120, 70%, 50%)",
        children: [
          {
            name: "Sin fibra óptica",
            color: "hsl(240, 70%, 50%)",
            loc: detroit.filter((el) => el.technology === "Not Fiber").length,
          },
          {
            name: "Con fibra óptica",
            color: "hsl(300, 70%, 50%)",
            loc: detroit.filter((el) => el.technology === "Fiber").length,
          },
        ],
      },
      {
        name: "LOS ANGELES",
        color: "hsl(180, 70%, 50%)",
        children: [
          {
            name: "Sin fibra óptica",
            color: "hsl(360, 70%, 50%)",
            loc: losAngeles.filter((el) => el.technology === "Not Fiber")
              .length,
          },
          {
            name: "Con fibra óptica",
            color: "hsl(240, 70%, 50%)",
            loc: losAngeles.filter((el) => el.technology === "Fiber").length,
          },
        ],
      },
    ],
  };

  return (
    <ResponsiveSunburst
      data={data}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      id="name"
      theme={{
        textColor: "#333333",
        labels: {
          text: 
          {
            scale: 1.2,
        },
        },
      }}
      value="loc"
      cornerRadius={5}
      borderColor={{ theme: "background" }}
      colors={{ scheme: "set2" }}
      childColor={{
        from: "color",
        modifiers: [["darker", 0.3]],
      }}
      enableArcLabels={true}
      arcLabel="id"
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 5]],
      }}
    />
  );
};

export default InternetSunburst;
