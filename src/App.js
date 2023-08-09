import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main";
import Meals from "./components/Meals";
import Friedwonton from "./components/Friedwonton";
function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Meals />
      <Friedwonton />
    </div>
  );
}

export default App;
