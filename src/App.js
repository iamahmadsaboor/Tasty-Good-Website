import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main";
import Meals from "./components/Meals";
import Friedwonton from "./components/Friedwonton";
import Reservation from "./components/Reservation";
function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Meals />
      <Friedwonton />
      <Reservation />
    </div>
  );
}

export default App;
