import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

const SearchFiltter = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Search
            </Button>

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

export default SearchFiltter