import "./App.css";
// import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Meals from "./components/Meals";
import Friedwonton from "./components/Friedwonton";
import Reservation from "./components/Reservation";
import Membership from "./components/Membership";
import Location from "./components/Location";
import Footer from "./components/Footer";
function App() {
  // {
  //   alert("The Website is Under Construction!!! Feedback Will Be Appreciated");
  // }
  return (
    <div>
      {/* <Navbar /> */}
      {/* <head>
        <title>My Site</title>
        <link
          rel="shortcut icon"
          href="../public/favicon.ico"
          type="image/x-icon"
        />
      </head> */}
      <Main />
      <Meals />
      <Friedwonton />
      <Reservation />
      <Membership />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
