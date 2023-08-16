import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavBar from "./components/Header";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header>
        <AppNavBar />
      </header>
      <Outlet/>
    </div>
  );
}

export default App;
