import "./App.css";
import CurrentRead from "./components/CurrentRead";
import Schedule from "./components/Schedule";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>READ, KAY, READ!</h1>
        <CurrentRead />
        <Schedule />
      </header>
    </div>
  );
}

export default App;
