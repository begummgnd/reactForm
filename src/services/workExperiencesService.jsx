import axios from "axios";

export default class WorkExperiencesService{
    getAllWorkExperiences(userId){
        return axios.get("http://localhost:8080/workexperiences/getAllWorkExperiences/"+userId)
    }
 
}