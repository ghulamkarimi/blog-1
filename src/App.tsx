import { Outlet } from "react-router-dom";
import MainMenu from "./components/navbar/MainMenu";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const App = () => {
  const isDarkMode = useSelector((state:RootState)=>state.app.isDarkMosde)
  return (
    <div className={`wrapper min-h-screen duration-500 ${isDarkMode? "bg-BACKGROUND text-FOREGROUND" : "bg-slate-400 text-BACKGROUND"}`}>
      <header className="py-3">
        <MainMenu />
      </header>
      <main className="mt-8">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
