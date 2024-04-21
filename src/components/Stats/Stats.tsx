import { getLocalTimeZone, today } from "@internationalized/date";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  RangeCalendar,
} from "@nextui-org/react";

export function Stats() {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50"
      shadow="sm"
      style={{
        width: "30rem",
      }}
    >
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Stats</p>
          <p className="text-small text-default-500">Summary of your data</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <RangeCalendar
          className="bg-background/60"
          aria-label="Date (Read Only)"
          value={{
            start: today(getLocalTimeZone()),
            end: today(getLocalTimeZone()).add({ weeks: 1 }),
          }}
          isReadOnly
        />
      </CardBody>
    </Card>
  );
}
