export const useWeek = ({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) => {
  const generateDayBetween = (startDate: string, endDate: string) => {
    const dates = [];
    let currentDate = new Date(startDate);
    const stopDate = new Date(endDate);
    while (currentDate <= stopDate) {
      dates.push(new Date(currentDate).toISOString().split("T")[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const records = generateDayBetween(startDate, endDate).map((date) => ({
    date,
    records: [],
    isHoliday: false,
    isWorkday: true,
  }));

  return { records };
};
