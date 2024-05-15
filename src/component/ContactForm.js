import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMars, faVenus } from "@fortawesome/free-solid-svg-icons"
import { Button, Form, ButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState(null);
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault();

    if (name === "" || phoneNumber === '') {
      alert("내용을 입력해주세요.");
    } else {
      dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
      setName('');
      setPhoneNumber('');
      setGender(null);
    }
  };

  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" placeholder="이름을 입력해주세요." value={name} onChange={(event) => setName(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control type="number" placeholder="전화번호를 입력해주세요." value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
        </Form.Group>
        <div>
        <ButtonGroup aria-label="Basic example">
          <Button className={gender === 'male' ? 'male active': 'male'} onClick={() => setGender('male')} ><FontAwesomeIcon icon={faMars}/></Button>
          <Button className={gender === 'female' ? 'female active': 'female'} onClick={() => setGender('female')} ><FontAwesomeIcon icon={faVenus}/></Button>
        </ButtonGroup>
        <div>
        <Button variant="primary" type="submit">
          추가
        </Button>
        </div>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
