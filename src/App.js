import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App p-5">
      <div className="container main-cont rounded border m-5 p-2">
        <h1 className=" title text-center m-2">Weather app</h1>
        <Weather city="London" />
      </div>
      <footer className=" m-5">
        This project was created by{" "}
        <a
          href="https://www.linkedin.com/in/erika-diaz-0b9857195/"
          target="_blank"
          rel="noreferrer"
        >
          Erika Dìaz{" "}
        </a>{" "}
        and it is{" "}
        <a
          href="https://github.com/EriDQuinn/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Open sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
