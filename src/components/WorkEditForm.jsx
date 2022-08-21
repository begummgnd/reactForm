import axios from 'axios';
import { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { useParams } from 'react-router'

// const UpdateExperience = (data) => {
//     const { id } = useParams();
//     axios
//       .post("http://localhost:8080/uworkexperiences/update/"+id,data)
//       .then((data) => {
//           console.log(data);
//           alert("User added succeesfully.");
        
//       });
//   };



const WorkEditForm = (experiencesList)=>{

    // const temp ={}
    // temp [position,companyName,companySector,city]= [...experiencesList]
    // const[position,setPosition] = useState(temp.position)
    // const[companyName,setCompanyName] = useState(temp.companyName)
    // const[companySector,setCompanySector] = useState(temp.companySector)
    // const[city,setCity] = useState(temp.city)


    return(
        <Form >
        <Form.Group className='mb-1'>
            <Form.Control
                type="Text"
                placeholder='position'
             //  value={position}
                required
                />
        </Form.Group>
        <Form.Group className='mb-1'>
            <Form.Control
                type="Text"
             //   value={companyName}
                required
                />
        </Form.Group>
        <Form.Group className='mb-1'>
            <Form.Control
                type="Text"
              // value={companySector}
              
                required
                />
        </Form.Group>
        <Form.Group className='mb-3'>
            <Form.Control
                type="Text"
             //   value={city}
              
                required
                />
        </Form.Group>
        
        <Button variant="success" type="submit" style={{width:"170px",marginLeft:"10rem"}} >
                Edit experience
        </Button>
    </Form>

    )
}

export default WorkEditForm;