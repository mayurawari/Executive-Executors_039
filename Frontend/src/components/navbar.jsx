import React from 'react';
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineInbox } from "react-icons/md";

const Navbar = () => {
    return (
        <div>

            <ul style={{ listStyleType: 'none', textAlign: "start" }}>
                <li>

                    <Link className="navbar-brand" to="/">Notion</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </li>
                <li style={{ display: "flex", marginTop: "15px", padding:"10px" }}>
                    <div style={{ paddingTop: "5px", paddingRight: "5px" }} >
                        <IoSearch />
                    </div>
                    <Link to="/search">Search</Link>

                </li>
                <li style={{ display: "flex",  padding:"10px" }}>
                    <div style={{ paddingTop: "5px", paddingRight: "5px" }} >
                        <IoHomeOutline />
                    </div>
                    <Link to="/">Home</Link>
                </li>
                
                <li style={{ display: "flex", padding:"10px" }}>
                    <div style={{ paddingTop: "5px", paddingRight: "5px" }} >
                        <MdOutlineInbox />
                    </div>
                    <Link to="/index">Index</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
