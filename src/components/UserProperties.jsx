import React, { useEffect, useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import { FaUserEdit } from 'react-icons/fa'
import { IoIosPersonAdd } from 'react-icons/io'
import axios from "axios";
import { Button, Modal } from "react-bootstrap"
import { useParams } from 'react-router'
import UserForm from './UserForm';
import MDEditor from '@uiw/react-md-editor';
const UserProperties = () => {

  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false)
  const { id } = useParams();
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    axios
      .get("http://localhost:8080/users/" + id)
      .then((result) => {
        let temp = []
        temp.push(result.data)
        setUser(temp)
       
      })
  },[]);



  const deleteUser = (userId) => {
    axios
      .delete("http://localhost:8080/users/" + userId)
      .then((response) => {
        if (response.data != null) {
          alert("User deleted succeesfully.");
        }
      });
  };
  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2 className="text-success mt-4">
              User Properties

            </h2>
            <hr />
          </div>
          <div className="col-sm-6 mt-5 my-2 px-2">
            <Button
              className="btn btn-success text-white"
              data-toggle="modal"
              onClick={handleShow}
            >
              <span>
                Add New User <IoIosPersonAdd />
              </span>
            </Button>
          </div>
        </div>
      </div>
      <table className="table striped hover " style={{ top: "10%" }}>
        <thead>
          <tr  >
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Content</th>
            <th>Programming</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {user.map((s) => (
            <tr key={s.userId}>
              <td>{s.userName}</td>
              <td>{s.userSurname}</td>
              <td>{s.age}</td>
              <td>{s.gender}</td>
              <td>{s.email}</td>
           <td> <MDEditor.Markdown source={s.content} style={{ whiteSpace: 'pre-wrap' }} /></td>
           <td>{s.programming}</td>
              <td>
                <Button
                  style={{ width: "60px" }}
                  variant="outline-white"
                  onClick={deleteUser.bind(this, s.userId)}
                >
                  <BsTrash color="red" size="20" />
                </Button>
                <Button
                  style={{ width: "60px" }}
                  variant="outline-white"
                //  onClick={User.bind(this, s.userId)}
                >
                  <FaUserEdit color="yellow" size="20" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modal-header' closeButton>
          <Modal.Title>
            Add User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default UserProperties;
