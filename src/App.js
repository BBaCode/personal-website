import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
