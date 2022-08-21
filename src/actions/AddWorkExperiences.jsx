import axios from 'axios';
import { useState } from 'react';
import { createBrowserHistory } from 'history';
import { useParams } from 'react-router-dom'
const AddWorkExperiences =() =>{
    const { id } = useParams()
    const [position, setPosition] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [city, setCity] = useState("")
    const [companySector, setCompanySector] = useState("")
    const [professionalTime, setProfessionalTime] = useState("")
    const [businessSpace, setBusinessSpace] = useState("")
    const history = createBrowserHistory();

    const AddExperiencesInfo = () => {

        const data = {

            "businessSpace": businessSpace,
            "city": city,
            "companyName": companyName,
            "companySector": companySector,
            "position": position,
            "professionalTime": professionalTime,
            "userId": id
        }

        axios.post('http://localhost:8080/workexperiences/post', data).then((data) => {
            console.log(data);
            history.push("/profile/id")

        })

    }
   
}

export default AddWorkExperiences;