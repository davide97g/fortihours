import { Header } from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex gap-6 w-full flex-col p-4 ">
      <Header />
      <Home />
    </div>
  );
}

export default App;
