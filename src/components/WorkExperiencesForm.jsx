import { useParams } from 'react-router'
import { FormControl } from '@mui/material';
import axios from 'axios';
import {Form, Button} from 'react-bootstrap';
import { FormCheckbox } from 'semantic-ui-react';
import React, { useEffect, useState } from 'react'
const AddNewWorkExperiences = (data) => {
    const {id} = useParams();
    axios
    .post("http://localhost:8080/workexperiences/post/"+id,data)
    .then((data)=>{
        console.log(data)
        alert("Experiences added succeesfully.");
    })
}


const WorkExperiencesForm = () =>{
    
    
    const[position,setPosition] = useState("")
    const[companyName,setCompanyName] = useState("")
    const[companySector,setCompanySector] = useState("")
    const[city,setCity] = useState("")

    const data ={
        "position":position,
        "companyName":companyName,
        "companySector":companySector,
        "city":city
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        AddNewWorkExperiences(data)
    }
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-1'>
                <Form.Control
                    type="Text"
                    placeholder="Position *"
                    value={position}
                    onChange={e => setPosition(e.target.value)}
                    required
                    />
            </Form.Group>
            <Form.Group className='mb-1'> 
                <Form.Control
                    type="Text"
                    placeholder="Company Name *"
                    value={companyName}
                    onChange={e => setCompanyName(e.target.value)}
                    required
                    />
            </Form.Group>
            <Form.Group className='mb-1'>
                <Form.Control
                    type="Text"
                    placeholder="Company Sector *"
                    value={companySector}
                    onChange={e => setCompanySector(e.target.value)}
                    required
                    />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Control
                    type="Text"
                    placeholder="City *"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    required
                    />
            </Form.Group>
            <Button variant="success" type="submit" style={{width:"170px",marginLeft:"12rem"}}>
            Add new experience
        </Button>
        </Form>
    )
}

export default WorkExperiencesForm;