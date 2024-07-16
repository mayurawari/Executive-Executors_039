import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Index from './pages/Index';
import Navbar from './components/navbar';


function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/index" element={<Index />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
