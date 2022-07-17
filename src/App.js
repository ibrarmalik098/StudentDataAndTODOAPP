import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login";
import AppRouter from "./config/router/approuter";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
