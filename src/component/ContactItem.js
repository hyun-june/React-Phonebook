import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ContactList from './ContactList';

const ContactItem = ({item}) => {
  return (
    <Row>
        <Col lg={1}>
        <img width={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk4295X8SPopOlMFGqT5J8FB0v4sPTTB4JVA5JRqR_Bg&s" alt="" />
        </Col>
        <Col lg={11}>
        <div>
            {item.name}
        </div>
        <div>
            {item.phoneNumber}
        </div>
        </Col>
    </Row>
  )
}

export default ContactItem;