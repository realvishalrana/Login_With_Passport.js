import { Navbar } from "./components/Navbar";
import "./app.css";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Post />
    </div>
  );
}

export default App;
