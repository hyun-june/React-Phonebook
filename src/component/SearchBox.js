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
    <div className="boxsearch">
        <Form.Control type="text" placeholder="검색어를 입력해주세요." onChange={findsearch} />
    </div>
  )
}

export default SearchBox