import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAddressBook } from "@fortawesome/free-solid-svg-icons"
import ContactModal from "./component/ContactModal";
import ContactList from './component/ContactList';
import SearchBox from './component/SearchBox';

//1. 왼쪽에는 연락처 등록하는 폼이, 오른쪽에는 연락처 리스트와 검색 창이 있다.
//2. 리스트에 유저 이름과 전화번호를 추가 할 수 있다.
//3. 리스트에 아이템이 몇개 있는지 보인다.
//4. 사용자가 유저를 이름검색으로 찾을 수 있다.

function App() {
  return (
    <div>
      <div className="maincontainer">
        <Container>
          <Row>
          <Col lg={2}>
          <FontAwesomeIcon icon={faAddressBook} id="mainicon" />
            </Col>
            <Col lg={2} className="maintitle">
            <div>주소록</div>
            </Col>
            <Col lg={6}>
              <SearchBox />
            </Col>
            <Col lg={2}>
              <ContactModal/>
            </Col>
          </Row>
          <Row>
            <Col>
            <div>전체연락처</div>
            {/* 여기에 contactlist.length 표시하기 */}
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <ContactList />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
