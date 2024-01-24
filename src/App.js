import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kingston" />
        <footer>
          This project was coded by
          <a
            href="https://github.com/mcleanalecia1998"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Alecia Mclean
          </a>
          , is open sourced on{" "}
          <a
            href="https://github.com/mcleanalecia1998/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github{" "}
          </a>
          and hosted on
          <a
            href="https://mclean-weather-app-react.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
