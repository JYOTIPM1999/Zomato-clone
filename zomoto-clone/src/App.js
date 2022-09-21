import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Jyoti/Navbar";
import Body from "./Components/Jyoti/Body";

function App() {
  return (
    <div className={("body", "App")}>
      <Navbar />
      <br />
      <Body />
    </div>
  );
}

export default App;
