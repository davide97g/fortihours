import { Calendar } from "./components/Calendar";
import { Header } from "./components/Header";
import { Stats } from "./components/Stats";

function App() {
  return (
    <div className="flex gap-6 w-full flex-col p-4 ">
      <Header />
      <div className="flex flex-row justify-between gap-4">
        <Calendar />
        <Stats />
      </div>
    </div>
  );
}

export default App;
