import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Meals from "./components/Meals";
import Friedwonton from "./components/Friedwonton";
import Reservation from "./components/Reservation";
import Location from "./components/Location";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <head>
        <title>Double Nuke Burger</title>
      </head>
      <Navbar />
      <Main />
      <Meals />
      <Friedwonton />
      <Reservation />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
