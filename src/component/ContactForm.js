import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMars, faVenus } from "@fortawesome/free-solid-svg-icons"
import { Button, Form, ButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = ({ handleClose }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState(null);
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault();

    if (name ==="" && phoneNumber ==="") {
      alert("내용을 입력해주세요.");
    } else if(phoneNumber ===""){
      alert("전화번호를 입력해주세요.")
    } else if(name === ""){
      alert("이름을 입력해주세요.")
    } else {
      dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
      setName('');
      setPhoneNumber('');
      handleClose();
    }
  };

  const GeneralNum = (event) =>{
    const value = event.target.value;
    if (/^\d*$/.test(value) && value.length <= 12) {
      setPhoneNumber(value);
    }
  }

  const GeneralName = (event) =>{
    const value = event.target.value;
    if(/^[^0-9]*$/.test(value)){
      setName(value);
    }
  }

  return (
    <div className="formcontact">
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" placeholder="이름을 입력해주세요." value={name} onChange={GeneralName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control type="text" placeholder="전화번호를 입력해주세요." value={phoneNumber} onChange={GeneralNum} />
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
