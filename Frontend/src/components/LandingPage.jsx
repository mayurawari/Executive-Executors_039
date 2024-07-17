import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const LandingPage = () => {
    return (
        <div className="container text-center" style={{ marginTop: "60px" }}>
            <div className="mb-4">
                <h1>Your, <span style={{ display: "inline-flex", alignItems: "center" }}>
                    <img style={{ width: "40px", marginLeft: "5px", marginRight: "5px" }} src="https://nextjs14-notion.vercel.app/_next/image?url=%2Fassets%2Ficons%2Fwikis.png&w=96&q=75" alt="wikis" /></span> wikis-wiki, <span style={{ display: "inline-flex", alignItems: "center" }}>
                    <img style={{ width: "40px", marginLeft: "5px", marginRight: "5px" }} src="https://nextjs14-notion.vercel.app/_next/image?url=%2Fassets%2Ficons%2Fdocs.png&w=96&q=75" alt="docs" /></span> docs-docs,<br />
                    & <span style={{ display: "inline-flex", alignItems: "center" }}>
                    <img style={{ width: "40px", marginLeft: "5px", marginRight: "5px" }} src="https://nextjs14-notion.vercel.app/_next/image?url=%2Fassets%2Ficons%2Fprojects.png&w=128&q=75" alt="projects" /></span> projects-projects.<br /> Together.
                </h1>
                <h5 style={{ marginTop: "40px", fontStyle: "italic" }}>Turn ideas into action with Notion’s AI-powered workspace.</h5>
            </div>
            <button style={{width:"150px",padding:"10px", backgroundColor:"black", color:"white"}} > <Link className="nav-link" to="/">Get Started</Link></button>
            <div className="d-flex justify-content-center">
                <img style={{ width: "400px", height: "300px", margin: "10px", marginLeft:"100px" }} src="https://nextjs14-notion.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fdocuments.png&w=1920&q=75" alt="documents" />
                <img style={{ width: "400px", height: "300px", margin: "10px" }} src="https://nextjs14-notion.vercel.app/_next/image?url=%2Fassets%2Fimages%2Freading.png&w=1920&q=75" alt="reading" />
            </div>
        </div>
    );
}

export default LandingPage;
