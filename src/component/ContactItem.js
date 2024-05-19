import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'react-bootstrap';
import { faTrash, faMars, faVenus, faPen } from '@fortawesome/free-solid-svg-icons';
import { removeList } from '../redux/reducer/reducer';

const ContactItem = ({ item }) => {
  const dispatch = useDispatch();
  const [editName, setEditName] = useState(item.name);
  const [editPhoneNumber, setEditPhoneNumber] = useState(item.phoneNumber);
  const [isEditing, setIsEditing] = useState(false);

  const handleNameChange = (e) => {
    if (!/^\D*$/.test(e.target.value)) return;
    setEditName(e.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 3 && value.length <= 7) {
      value = value.slice(0, 3) + '-' + value.slice(3);
    } else if (value.length > 7) {
      value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7);
    }
    if (/^[\d-]*$/.test(value) && value.length <= 13) {
      setEditPhoneNumber(value);
    }
  };
  
  

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch({
      type: 'EDIT_CONTACT',
      payload: {
        id: item.id,
        name: editName,
        phoneNumber: editPhoneNumber,
      },
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditName(item.name);
    setEditPhoneNumber(item.phoneNumber);
    setIsEditing(false);
  };

  const handleRemove = () => {
    dispatch(removeList(item.id));
  };

  const genderImg = () => {
    if (item.gender === 'male') {
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-Hqs8urboyNJBdIsn3yKZxLh_21lrZNTKP9fPca19w&s';
    } else if (item.gender === 'female') {
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkfYAVY483Zn4VhU4y_0r5rz7Z0CeM7Q3MrCHpT0vfCA&s';
    } else {
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4FkDdTgnYE-lIObgdRfp_QGoiUn8yS3bgvfIUVLMOA&s';
    }
  };

  return (
    <Row className="itemcontainer">
      <Col lg={3}>
        <img width={50} src={item.imageURL || genderImg()} alt="" />
      </Col>
      <Col lg={5}>
        {isEditing ? (
          <>
            <input type="text" value={editName} onChange={handleNameChange} />
            <input type="text" value={editPhoneNumber} onChange={handlePhoneNumberChange} />
          </>
        ) : (
          <>
            <div>{item.name}</div>
            <div>{item.phoneNumber}</div>
          </>
        )}
      </Col>
      <Col lg={1}>
        {item.gender === 'male' ? (
          <FontAwesomeIcon icon={faMars} className="maleitemicon" />
        ) : item.gender === 'female' ? (
          <FontAwesomeIcon icon={faVenus} className="femaleitemicon" />
        ) : null}
      </Col>
      <Col lg={1} className="iconcontainer">
        {isEditing ? (
          <>
            <button className="iconbtn" onClick={handleSave}>
              Save
            </button>
            <button className="iconbtn" onClick={handleCancel}>
              Cancel
            </button>
          </>
        ) : (
          <button className="iconbtn" onClick={handleEdit}>
            <FontAwesomeIcon icon={faPen} />
          </button>
        )}
        <button className="iconbtn" onClick={handleRemove}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </Col>
    </Row>
  );
};

export default ContactItem;
