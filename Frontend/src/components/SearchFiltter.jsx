import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchFiltter = () => {
    const [show, setShow] = useState(true);
    const navigate = useNavigate();

    const handleClose = () => {
        setShow(false);
        navigate('/');
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Search</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="searchQuery">
                            <Form.Label>Search</Form.Label>
                            <Form.Control type="text" placeholder="Enter search query" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Search
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default SearchFiltter;
