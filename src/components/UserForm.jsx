import axios from 'axios';
import { useState } from 'react';
import { Form, Button, FormLabel } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MDEditor from '@uiw/react-md-editor';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import MultiSelect from 'react-multiple-select-dropdown-lite'
import 'react-multiple-select-dropdown-lite/dist/index.css'
import { FaStar } from 'react-icons/fa'
const AddNewUser = (data) => {
    console.log(data)
    axios
        .post("http://localhost:8080/users/", data)
        .then((data) => {

            alert("User added succeesfully.");

        });
};

const UserForm = () => {

    const [userName, setUserName] = useState("");
    const [userSurname, setUserSurname] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const [programming, setProgramming] = useState("")
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(null)
    const [level, setLevel] = useState([])
    let temp = []
    const handleOnchange = val => {
      
        setProgramming(val)
        
    }
   
    const handleChange = val => {
        
        temp.push(val.target.value)
        console.log(temp)
      };


    const options = [
        { label: 'C', value: 'C' },
        { label: 'Java', value: 'Java' },
        { label: 'C#', value: 'C#' },
        { label: 'Python', value: 'Python' },
        { label: 'JavaScript', value: 'JavaScript' },
        { label: 'React Js', value: 'React Js' },
        { label: 'Angular', value: 'Angular' },
        { label: '.Net Core', value: '.Net Core' },
        { label: 'Vue', value: 'Vue' }

    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        AddNewUser({
            "userName": userName,  //useState den gelir sağ taraftaki değişkenler.
            "userSurname": userSurname,
            "age": age,
            "gender": gender,
            "email": email,
            "content": content,
            "programming": programming,
            "level":level
        }
        )
    }


    return (

        <Form onSubmit={handleSubmit}>
{/* //{  console.log(level)} */}
            <Row className="mb-3">
                <Form.Group as={Col} md="4">
                    <Form.Label style={{ color: "grey" }}>Name</Form.Label>
                    <Form.Control
                        type="Text"
                        placeholder="Name"
                        value={userName}  //bu text alanının değeri value'si name deriz
                        onChange={e => setUserName(e.target.value)}  //bu değer değiştiğinde yapmasını istediğimiz işlem yazılır. Value değeri setName 'e yollanır.
                        required
                    />

                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Label style={{ color: "grey" }}>Surname</Form.Label>
                    <Form.Control
                        type="Text"
                        placeholder="Surname"
                        value={userSurname}
                        onChange={e => setUserSurname(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Label style={{ color: "grey" }}>Age</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Age"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        required
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">

                <Form.Label style={{ color: "grey", marginLeft: "1rem" }} >Gender</Form.Label>
                <Form.Group style={{ marginLeft: "2rem" }} as={Col} md="5" >

                    <Form.Check name="gender" label='Female' value="Female" type="radio" onChange={e => setGender(e.target.value)} inline isValid />
                    <Form.Check name="gender" label='Male' value="Male" type="radio" onChange={e => setGender(e.target.value)} inline isValid />
                </Form.Group>
                <Form.Group as={Col} md="5">
                    <Form.Control
                        type="email"
                        placeholder="Email *"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
            </Row>
            <Form.Group style={{ marginTop: "3rem" }}>
                <Form.Label style={{ color: "grey", marginLeft: "1rem" }} >About</Form.Label>
                <MDEditor
                    value={content}
                    onChange={setContent}
                />

            </Form.Group>
            <Form.Group style={{ marginTop: "1rem" }}>
                <Form.Label style={{ color: "grey", marginLeft: "1rem" }} >Programming</Form.Label>

                <MultiSelect
                    onChange={handleOnchange}
                    options={options}
                />

            </Form.Group>
            <Row className="mb-3">

                {programming.split(",").map((p, i) => (
                    <>
                        <Form.Group style={{ marginLeft: "2rem", marginTop: "2rem" }} as={Col} md="2" >
                            <Form.Label ><h4 >{p}</h4></Form.Label>
                        </Form.Group>
                        <Form.Group style={{ marginLeft: "2rem", marginTop: "1rem" }} as={Col} md="8" >
                          {programming.length>0 &&
                                 <div key={p.toString()} style={{marginTop:"1rem"}}>
                                    <Form.Check
                                        inline
                                        label="1"
                                        name={`group-${p}`}
                                        type="radio"
                                        value="1"
                                        onChange={handleChange}
                                    />
                                    <Form.Check
                                        inline
                                        label="2"
                                        name={`group-${p}`}
                                        type="radio"
                                        value="2"
                                        onChange={handleChange}
                                    />
                                    <Form.Check
                                        inline
                                        label="3"
                                        name={`group-${p}`}
                                        type="radio"
                                        value="3"
                                        onChange={handleChange}
                                    />

                                </div>
                        }

                        </Form.Group>
                    </>
                ))}

            </Row>
            <Button variant="success" type="submit" style={{ width: "170px", marginLeft: "10rem", marginTop: "3rem" }} >
                Add new user
            </Button>


        </Form>

    )
}

export default UserForm;