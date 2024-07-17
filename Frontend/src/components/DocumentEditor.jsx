import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import io from 'socket.io-client';
import axios from 'axios';

const SOCKET_SERVER_URL = ''; // Adjust based on your server setup
const IMAGE_UPLOAD_URL = 'http://localhost:8080/upload'; // Adjust this to your server URL

const DocumentEditor = () => {
  const editorRef = useRef(null);
  const [quill, setQuill] = useState(null);
  const socketRef = useRef(null);
  const [isQuillInitialized, setIsQuillInitialized] = useState(false);

  useEffect(() => {
    socketRef.current = io(SOCKET_SERVER_URL);

    const editor = editorRef.current;
    if (!editor) return;

    const quillInstance = new Quill(editor, {
      theme: 'snow',
      modules: {
        toolbar: {
          container: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'video', 'link'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }]
          ],
          handlers: {
            image: imageHandler
          }
        }
      }
    });    
    
    quillInstance.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        socketRef.current.emit('editor-change', delta);
      }
    });

    socketRef.current.on('editor-change', (delta) => {
      quillInstance.updateContents(delta);
    });

    setQuill(quillInstance);
    setIsQuillInitialized(true);

    // Example: Set initial content
    const initialContent = [{ insert: 'Hello World!\n' }];
    quillInstance.setContents(initialContent);

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const imageHandler = () => {
   // if (!isQuillInitialized || !quill) return;

    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await axios.post(IMAGE_UPLOAD_URL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        const imageUrl = response.data.url;
        const range = quill.getSelection();
        if (range) {
          quill.insertEmbed(range.index, 'image', imageUrl);
        } else {
          console.error('No cursor position found.');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };
  };

  return (
    <div>
      <div ref={editorRef} style={{ height: '500px' }} id='editor' />
    </div>
  );
};

export default DocumentEditor;
