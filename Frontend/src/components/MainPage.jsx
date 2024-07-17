import React from 'react';
import { FaBook } from "react-icons/fa";

const MainPage = () => {
    return (
        <div>
            <div style={{ display: "flex", paddingLeft:"50px" }}>
                <div style={{fontSize:"16px", padding:"2px"}}>
                    <FaBook />
                </div>

                <h6 style={{ marginBottom: "20px", textAlign: "start" }}> Learn</h6>
            </div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex justify-content-around" style={{ width: "100%", padding: "10px" }}>

                            <div style={{ width: "20%", border: "1px solid black", backgroundColor: "#ffffff", borderRadius: "15px", padding: "6px" }}>
                                <img src="https://www.notion.so/images/home/learn/the-ultimate-guide-to-notion-templates.png" className="d-block w-100" alt="..." />
                                <h6 style={{ textAlign: "start", marginTop: "15px" }}> The ultimate guide to Notion templates</h6>
                            </div>

                            <div style={{ width: "20%", border: "1px solid black", backgroundColor: "#ffffff", borderRadius: "15px", padding: "6px" }}>
                                <img src="https://www.notion.so/images/home/learn/customize-and-style-your-content.png" className="d-block w-100" alt="..." />
                                <h6 style={{ textAlign: "start", marginTop: "15px" }}>Getting started with projects and tasks</h6>
                            </div>

                            <div style={{ width: "20%", border: "1px solid black", backgroundColor: "#ffffff", borderRadius: "15px", padding: "6px" }}>
                                <img src="https://www.notion.so/images/home/learn/using-notion-ai.png" className="d-block w-100" alt="..." />
                                <h6 style={{ textAlign: "start", marginTop: "15px" }} >Using Notion AI to extend your impact</h6>

                            </div>

                            <div style={{ width: "20%", border: "1px solid black", backgroundColor: "#ffffff", borderRadius: "15px", padding: "6px" }}>
                                <img src="https://www.notion.so/images/home/learn/keyboard-shortcuts.png" className="d-block w-100" alt="..." />
                                <h6 style={{ textAlign: "start", marginTop: "15px" }}>Keyboard shortcuts</h6>
                            </div>

                        </div>
                    </div>

                    <div className="carousel-item">

                        <div className="d-flex justify-content-around" style={{ width: "100%" }}>

                            <div style={{ width: "20%", border: "1px solid black", backgroundColor: "#ffffff", borderRadius: "15px", padding: "6px" }}>
                                <img src="https://www.notion.so/images/home/learn/keyboard-shortcuts.png" className="d-block w-100" alt="..." />
                                <h6 style={{ textAlign: "start", marginTop: "15px" }}>Keyboard shortcuts</h6>
                            </div>

                            <div style={{ width: "20%", border: "1px solid black", backgroundColor: "#ffffff", borderRadius: "15px", padding: "6px" }}>
                                <img src="https://www.notion.so/images/home/learn/types-of-content-blocks.png" className="d-block w-100" alt="..." />
                                <h6 style={{ textAlign: "start", marginTop: "15px" }}>Types of content blocks</h6>
                            </div>

                            <div style={{ width: "20%", border: "1px solid black", backgroundColor: "#ffffff", borderRadius: "15px", padding: "6px" }}>
                                <img src="https://www.notion.so/images/home/learn/the-ultimate-guide-to-notion-templates.png" className="d-block w-100" alt="..." />
                                <h6 style={{ textAlign: "start", marginTop: "15px" }}>The ultimate guide to Notion templates</h6>
                            </div>

                            <div style={{ width: "20%", border: "1px solid black", backgroundColor: "#ffffff", borderRadius: "15px", padding: "6px" }}>
                                <img src="https://www.notion.so/images/home/learn/personal-tasks.png" className="d-block w-100" alt="..." />
                                <h6 style={{ textAlign: "start", marginTop: "15px" }}>Personal tasks</h6>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">

                        <div className="d-flex justify-content-around" style={{ width: "100%" }}>

                            <div style={{ width: "20%", border: "1px solid black", backgroundColor: "#ffffff", borderRadius: "15px", padding: "6px" }}>
                                <img src="https://www.notion.so/images/home/learn/simple-tables-vs-databases.png" className="d-block w-100" alt="..." />
                                <h6 style={{ textAlign: "start", marginTop: "15px" }}>The best ways to use simple tables in your Notion pages</h6>
                            </div>

                            <div style={{ width: "20%", border: "1px solid black", backgroundColor: "#ffffff", borderRadius: "15px", padding: "6px" }}>
                                <img src="https://www.notion.so/images/home/learn/unearth-fresh-insights-from-your-personal-knowledge-library-using-q-and-a.png" className="d-block w-100" alt="..." />
                                <h6 style={{ textAlign: "start", marginTop: "15px" }}>Unearth fresh insights from your personal knowledge library using Q&A</h6>
                            </div>

                            <div style={{ width: "20%", border: "1px solid black", backgroundColor: "#ffffff", borderRadius: "15px", padding: "6px" }}>
                                <img src="https://www.notion.so/images/home/learn/types-of-content-blocks.png" className="d-block w-100" alt="..." />
                                <h6 style={{ textAlign: "start", marginTop: "15px" }}>Types of content blocks</h6>
                            </div>

                            <div style={{ width: "20%", border: "1px solid black", backgroundColor: "#ffffff", borderRadius: "15px", padding: "6px" }}>
                                <img src="https://www.notion.so/images/home/learn/a-notion-guide-on-switching-between-work-and-personal-accounts.png" className="d-block w-100" alt="..." />
                                <h6 style={{ textAlign: "start", marginTop: "15px" }}>A Notion guide on switching between work and personal accounts</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default MainPage;
