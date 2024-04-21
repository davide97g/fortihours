export function WeekHeader() {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="flex flex-row flex-wrap">
      {daysOfWeek.map((day) => (
        <div
          key={day}
          className="flex flex-col p-4 border border-white/5 dark:border-white/5 justify-center items-center"
          style={{
            width: "calc(100% / 7)",
          }}
        >
          <h2 className="text-small text-white">{day}</h2>
        </div>
      ))}
    </div>
  );
}
