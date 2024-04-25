import { Agenda } from "../components/Agenda/Agenda";
import { Stats } from "../components/Stats";

export default function Home() {
  return (
    <div className="flex flex-row justify-between gap-4">
      <Agenda />
      <Stats />
    </div>
  );
}
