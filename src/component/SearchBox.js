import React from 'react'
import { Row, Col, Button, Form } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import {setSearchNow} from "../redux/reducer/reducer.js"

const SearchBox = () => {
  const dispatch = useDispatch();

  const findsearch = (event) =>{
    dispatch(setSearchNow(event.target.value));
  }

  return (
    <Row>
        <Col lg={10}>
        <Form.Control type="text" placeholder="이름을 입력해주세요." onChange={findsearch} />
        </Col>
    </Row>
  )
}

export default SearchBox