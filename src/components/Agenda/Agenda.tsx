import { useState } from "react";
import { Week } from "../Week";
import { Month } from "../Month";

export function Agenda() {
  const [visualization] = useState<"MONTH" | "WEEK">("WEEK");
  return visualization === "MONTH" ? <Month /> : <Week />;
}
