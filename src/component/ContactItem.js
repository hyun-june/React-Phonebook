import React from 'react'
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col } from 'react-bootstrap'
import ContactList from './ContactList';
import {faTrash } from "@fortawesome/free-solid-svg-icons"
import { removeList } from '../redux/reducer/reducer';

const ContactItem = ({item}) => {
  const dispatch = useDispatch();
  const removebtn = () => {
    dispatch(removeList(item.id));
  }
  return (
    <Row>
        <Col lg={3}>
        <img width={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk4295X8SPopOlMFGqT5J8FB0v4sPTTB4JVA5JRqR_Bg&s" alt="" />
        </Col>
        <Col lg={7}>
        <div>
            {item.name}
        </div>
        <div>
            {item.phoneNumber}
        </div>
        </Col>
        <Col lg={2} className='deletecontainer'>
        <button id='deletebtn' onClick={removebtn}><FontAwesomeIcon icon={faTrash} /></button>
        </Col>
    </Row>
  )
}

export default ContactItem;