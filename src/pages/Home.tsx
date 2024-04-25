import { lazy } from "react";
import { Agenda } from "../components/Agenda/Agenda";
import { Stats } from "../components/Stats";

const Header = lazy(() => import("../components/Header"));

export default function Home() {
  return (
    <div className="flex gap-6 w-full flex-col p-4 ">
      <Header />
      <div className="flex flex-row justify-between gap-4">
        <Agenda />
        <Stats />
      </div>
    </div>
  );
}
