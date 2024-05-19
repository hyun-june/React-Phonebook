import React from 'react'
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col } from 'react-bootstrap'
import {faTrash,faMars,faVenus } from "@fortawesome/free-solid-svg-icons"
import { removeList } from '../redux/reducer/reducer';

const ContactItem = ({item}) => {
  const dispatch = useDispatch();
  const removebtn = () => {
    dispatch(removeList(item.id));
  }

  const renderImage = () => {
    if (item.imageURL) {
      return <img width={50} src={item.imageURL} alt="" />;
    } else {
      return <img width={50} src={genderImg()} alt="" />;
    }
  }

  const genderImg = () =>{
    if(item.gender === "male"){
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-Hqs8urboyNJBdIsn3yKZxLh_21lrZNTKP9fPca19w&s"
    } else if (item.gender === "female"){
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkfYAVY483Zn4VhU4y_0r5rz7Z0CeM7Q3MrCHpT0vfCA&s"
    } else {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4FkDdTgnYE-lIObgdRfp_QGoiUn8yS3bgvfIUVLMOA&s"
    }
  }

  const genderIcon =() =>{
    if(item.gender === "male"){
      return <FontAwesomeIcon icon={faMars} className="maleitemicon"/>;
    } else if (item.gender ==="female"){
      return <FontAwesomeIcon icon={faVenus} className="femaleitemicon"/>;
    }
  }

  return (
    <Row className="itemcontainer">
        <Col lg={3}>
        {renderImage()}
        </Col>
        <Col lg={5}>
        <div>
            {item.name}
        </div>
        <div>
            {item.phoneNumber}
        </div>
        </Col>
        <Col lg={1}>
          {genderIcon()}
        </Col>
        <Col lg={1} className='iconcontainer'>
        <button className='iconbtn' onClick={removebtn}><FontAwesomeIcon icon={faTrash} /></button>
        </Col>
    </Row>
  )
}

export default ContactItem;