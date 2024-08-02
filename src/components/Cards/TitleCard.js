import Subtitle from "../Typography/Subtitle"

function TitleCard({ title, children, topMargin, TopSideButtons, height }) {
  const cardHeight = height || 96; // Use height prop if passed, otherwise default to 96

  return (
    <div className={"card w-full p-6 bg-base-100 shadow-xl " + (topMargin || "mt-6")}>
      {/* Title for Card */}
      <Subtitle styleClass={TopSideButtons ? "inline-block" : ""}>
        {title}
        {/* Top side button, show only if present */}
        {TopSideButtons && <div className="inline-block float-right">{TopSideButtons}</div>}
      </Subtitle>

      <div className="divider mt-2"></div>

      {/** Card Body */}
      <div className={`h-${cardHeight} w-full pb-6 bg-base-100 flex justify-center`}>
        {children}
      </div>
    </div>
  );
}

export default TitleCard;
