import { Button, Checkbox } from "@nextui-org/react";
import dayjs from "dayjs";

export function Day({
  date,
  records,
  selected,
  isWorkday = true,
  isHoliday = false,
  onSelected,
}: Readonly<{
  date: string;
  records: {
    clientId: string;
    hoursWorked: number;
  }[];
  selected: boolean;
  isWorkday?: boolean;
  isHoliday?: boolean;
  onSelected?: (date: string) => void;
}>) {
  return (
    <div
      className="flex flex-col p-4 border border-white/5 dark:border-white/5 justify-center items-center gap-4"
      style={{
        width: "calc(100% / 7)",
        backgroundColor: isHoliday
          ? "var(--nextui-color-error)"
          : isWorkday
          ? "var(--nextui-color-primary)"
          : "var(--nextui-color-success)",
        position: "relative",
        cursor: "pointer",
      }}
      onClick={() => onSelected?.(date)}
    >
      <h3 className="text-tiny text-white/80">
        {dayjs(date).format("DD/MM/YYYY")}
      </h3>
      <Checkbox
        checked={selected}
        style={{
          position: "absolute",
          top: "0.5rem",
          right: "0.5rem",
        }}
      />

      <Button
        className="text-tiny text-white bg-black/20 border border-white/5 dark:border-white/5"
        variant="flat"
        color="default"
        radius="lg"
        size="sm"
      >
        {records.reduce((acc, curr) => curr.hoursWorked + acc, 0)} hours
      </Button>
    </div>
  );
}
