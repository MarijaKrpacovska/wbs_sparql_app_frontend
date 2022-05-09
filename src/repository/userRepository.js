import axios from "../custom-axios/user-axios";
import authToken from "../services/utils/authToken";

const userService = {
    register: (name, email, password, repeatPassword, mobile) => {
        return axios.post("/register", {
            "name": name,
            "email": email,
            "password": password,
            "repeatPassword": repeatPassword,
            "mobile": mobile,
            "roleId" : 2
        });
    },
    verify: (code) => {
        return axios.get("/verify", {
            params: { token: code }
        });
    }

}
export default userService;