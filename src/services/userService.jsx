import axios from "axios";


export default class UserService {
    getOneUser(userId) {
        return axios.get("http://localhost:8080/users/"+userId)
    }
}
