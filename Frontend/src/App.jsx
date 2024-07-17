import React, { useState, useRef, useEffect } from 'react';
import DocumentList from './components/DocumentList';
import DocumentEditor from './components/DocumentEditor';
import './App.css';

const App = () => {
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [sidebarWidth, setSidebarWidth] = useState(25);
    const resizerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const newWidth = (event.clientX / window.innerWidth) * 100;
            if (newWidth >= 15 && newWidth <= 35) {
                setSidebarWidth(newWidth);
            }
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        const handleMouseDown = () => {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        };

        const resizer = resizerRef.current;
        resizer.addEventListener('mousedown', handleMouseDown);

        return () => {
            resizer.removeEventListener('mousedown', handleMouseDown);
        };
    }, []);

    return (
        <div className="App">
            <div className="sidebar" style={{ width: `${sidebarWidth}%` }}>
                <DocumentList onSelectDocument={setSelectedDocument} />
            </div>
            <div className="resizer" ref={resizerRef}>
            {/* <i class="fa-solid fa-grip-lines-vertical" id="resizer"></i> */}
            </div>
            <div className="content">
                {/* {selectedDocument ? (
                    <DocumentEditor selectedDocument={selectedDocument} />
                ) : (
                    <div>Select a document to edit</div>
                )} */}
                <DocumentEditor />
            </div>
        </div>
    );
};

export default App;
