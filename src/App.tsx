import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Header = lazy(() => import("./components/Header"));

function App() {
  return (
    <div className="flex gap-6 w-full flex-col p-4 ">
      <Header />
      <Home />
    </div>
  );
}

export default App;
