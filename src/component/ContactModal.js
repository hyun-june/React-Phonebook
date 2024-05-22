import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ContactForm from "./ContactForm";

const ContactFormModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} id="plusbtn">
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>연락처 추가</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm handleClose={handleClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactFormModal;
