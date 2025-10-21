import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import CenterHeader from './pages/display';
import Navigation from './navigation/navbar';
function App() {
  return (
    <div className="App ">
      <Navigation />
      <Routes>
        <Route path="/" element={<CenterHeader />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
