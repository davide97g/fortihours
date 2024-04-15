import { Header } from "./components/Header";
import { PeopleList } from "./components/PeopleList";

function App() {
  return (
    <div className="flex gap-4 w-full flex-col p-4">
      <Header />
      <div className="flex flex-row justify-between gap-10">
        <PeopleList />
      </div>
    </div>
  );
}

export default App;
