import axios from "axios";

const instanceUser = axios.create(
    {
        baseURL: 'http://localhost:8090/user',
        headers: {
            'Access-Control-Allow-Origin' : '*'
        }
    }
)

export default instanceUser;