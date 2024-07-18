import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import SearchFiltter from './SearchFiltter';
import GetStarted from '../pages/GetStarted';

const FrontPage = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ width: "1200px" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Notion</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/search">Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/getnotion" style={{ backgroundColor: "black", color: "white", borderRadius: "7px" }}>Get Notion Free</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/search" element={<SearchFiltter />} />
                <Route path="/getnotion" element={<GetStarted />} />

            </Routes>
        </>
    );
};

export default FrontPage;
