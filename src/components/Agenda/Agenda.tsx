import { lazy, useState } from "react";

const Month = lazy(() => import("../Month"));
const Week = lazy(() => import("../Week"));

export function Agenda() {
  const [visualization] = useState<"MONTH" | "WEEK">("WEEK");
  return visualization === "MONTH" ? <Month /> : <Week />;
}
