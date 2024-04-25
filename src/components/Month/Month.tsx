import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Day } from "./Day";
import { useMonth } from "./hooks/useMonth";
import { WeekHeader } from "./WeekHeader";
import { useState } from "react";

export function Month() {
  const { records } = useMonth({
    startDate: "2024-04-01",
    endDate: "2024-04-30",
  });
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50"
      shadow="sm"
      style={{
        width: "calc(100% - 20rem)",
      }}
    >
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Month</p>
          <p className="text-small text-default-500">
            Visualize all your worked hours with a Month view
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <WeekHeader />
        <div className="flex flex-row flex-wrap">
          {records.map((record) => (
            <Day
              key={record.date}
              date={record.date}
              records={record.records}
              selected={selected.includes(record.date)}
              onSelected={(date) => {
                if (selected.includes(date)) {
                  setSelected(selected.filter((d) => d !== date));
                } else {
                  setSelected([...selected, date]);
                }
              }}
              isHoliday={record.isHoliday}
              isWorkday={record.isWorkday}
            />
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
