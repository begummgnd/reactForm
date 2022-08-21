import React, { useState, useEffect } from 'react'
import { Modal, Table ,Button} from "react-bootstrap"
import { useParams } from 'react-router-dom'
import { HiDocumentAdd } from 'react-icons/hi'
import WorkExperiencesForm from './WorkExperiencesForm'
import { BsTrash } from 'react-icons/bs'
import axios from 'axios'
import { FaUserEdit } from 'react-icons/fa'
import WorkEditForm from './WorkEditForm'
const WorkExperiences = () => {

  const [experiencesList, setExperiencesList] = useState([])
  const { id } = useParams()
  const [show, setShow] = useState(false)
  const handleClose = () =>  setShow(false)
  const handleShow = () => setShow(true)
  useEffect(() => {
    axios
    .get("http://localhost:8080/workexperiences/getAllWorkExperiences/" + id)
    .then((result) => {
     
      setExperiencesList(result.data)
      { console.log(result.data) }


  });


},[]);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2 className="text-success mt-4">  Work Experiences  </h2>
            <hr />
          </div>
          <div className="col-sm-6 mt-5 my-2 px-2">
            <Button
              className="btn btn-success text-white"
              data-toggle="modal"
              onClick={handleShow}
            >
              <span>
                Add New Experience <HiDocumentAdd />
              </span>
            </Button>
          </div>
        </div>
      </div>
      <table className="table striped hover " style={{ top: "10%" }}>
        <thead>
          <tr>
            <th>Position</th>
            <th>Company Name</th>
            <th>Company Sector</th>
            <th>City</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {experiencesList.map((u) => (
            <tr key={u.id}>
              <td>{u.position}</td>
              <td>{u.companyName}</td>
              <td>{u.companySector}</td>
              <td>{u.city}</td>
              <td>
                <Button style={{ width: "60px" }}
                  variant="outline-white"
                //</td>  onClick={deleteUser.bind(this, s.userId)}
                >
                  <BsTrash color="red" size="20" />
                </Button>
                <Button
                
                  style={{ width: "60px" }}
                  variant="outline-white"
                  onClick={handleShow}
                >
                  <FaUserEdit color="yellow" size="20" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header className='modal-header' closeButton>
          <Modal.Title>
            Update Experience
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
             <WorkEditForm/>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" color="black" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
     
    </>

  );

}

export default WorkExperiences;