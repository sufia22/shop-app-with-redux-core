import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const BrandModal = ({ show, onHide }) => {
  return (
    <div>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>Add new brand</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Brand Name</Form.Label>
              <Form.Control value="" type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Logo</Form.Label>
              <Form.Control type="file" />
              <br />
              <img style={{ width: "100%" }} src="" alt="" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BrandModal;
