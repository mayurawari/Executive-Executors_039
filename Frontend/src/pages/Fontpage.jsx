import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Login from './Login';
import FrontPage from '../components/FrontPage';


const Fontpage = () => {
    return (
        <Router>
           <FrontPage></FrontPage>
            <div className="container mt-4">
                <Routes>
                    <Route path="/search" element={<Search />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
};

export default Fontpage;
